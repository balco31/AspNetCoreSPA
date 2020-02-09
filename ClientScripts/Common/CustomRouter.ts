namespace ClientScripts.Common {
    import helpers = ClientScripts.Common;
    export class CustomRouter extends kendo.Router {
        private _view: kendo.View;
        private _isViewDirty: Array<{ view: ClientScripts.Views.IView, isDirty: boolean }> = [];
        private _modalUrlHistory: Array<string> = [];
        private ViewsStack: Array<ClientScripts.Views.IView> = [];
        private _isKendoRouterNavigated: boolean = false;
        private _modalIDs: Array<string> = [];
        private _currentModalUrl: string;

        public entryPoint: EntryPoint;

        constructor(options?: kendo.RouterOptions) {
            super({
                pushState: true,
                root: "/",
                routeMissing: (e) => {
                    console.log("missinge route", e.url, e.params);
                }
            });
            let self = this;

            this.bind('change', (changeEvent: kendo.RouterChangeEvent) => {
                //console.log("change route event", changeEvent);
                if (self._isKendoRouterNavigated == false && changeEvent.backButtonPressed == null) {
                    // do this in case of page full reload (so navigation was not triggered by router (user triggered)) e.g. when you do window.location('/') or enter a specific url in browser and press enter or page rrefresh via F5
                    // so this does nothing otherwise goes in infinite loop
                    changeEvent.preventDefault();
                    return;
                }
                if (changeEvent.backButtonPressed && this.isInModal()) {
                    changeEvent.preventDefault();
                    return;
                }
                if (self.IsPageDirty() == true) {
                    //prevent default change and ask for unsaved changes in callback change page dirtability and navigate again
                    changeEvent.preventDefault();
                    //TODO: Fix this
                    //helpers.Dialog("Resources.sUnsavedChanges", "Resources.sLeaveChanges", null, null, (evnt) => {
                    //    self.SetPageDirty(false);
                    //    self.navigate(changeEvent.url);
                    //});
                }
            });

            this.bind("back", function (e) {
                //console.log("back route event", e);
                if (self.isInModal()) {
                    // in case of history.back and is in modal then navigate to the modalHistoryUrl (keeps the back url in case of modals)
                    e.preventDefault();
                    let modalHistoryUrl = self.GetModalHistory();
                    self.navigate(modalHistoryUrl);
                }
            });
            this.route(":controller(/:action)(/:id)", async function (controller, action, id) { self.getAndShowViewOnPage(controller, action, id); });
        }

        navigate(route: string, silent?: boolean) {
            route = this.entryPoint.addSessionToUrl(route);
            //if (EntryPoint.CntrlIsPressed) {
            //    setTimeout(() => {
            //        EntryPoint.CntrlIsPressed = false;
            //        let myWindow = window.open(route, "_blank");
            //        myWindow.focus();
            //    }, 200);
            //    return;
            //}

            let self = this;
            this._isKendoRouterNavigated = true;
            if (this.isInModal()) {
                let modalId = this.GetActiveModalId();

                if (this.IsPageDirty() == true) {
                    //ask if view Is Dirty before navigate to another modal window this modal case is not going thorugh change event of Router so this is neede again here to ask for unsaved changes in modals
                    helpers.Dialog("Resources.sUnsavedChanges", "Resources.sLeaveChanges", null, null, (evnt) => {
                        self.SetPageDirty(false);
                        this.SetModalHistory(this.CurrentModalUrl);
                        //this.LoadModalPartial(route, `#${modalId} #ModalPlaceHolder`, `#${modalId} #ModalPlaceHolder .h-modal-content`);
                    });
                } else {
                    this.SetModalHistory(this.CurrentModalUrl);
                    //this.LoadModalPartial(route, `#${modalId} #ModalPlaceHolder`, `#${modalId} #ModalPlaceHolder .h-modal-content`);
                }

                return;
            }
            super.navigate(route, silent);

        }

        public UnRegisterView(isModal?: boolean) {
            let view = this.ViewsStack.pop();
            if (view != null) {
                this.RemoveViewFromIsDirtyList(view);
                view.destroy();
                view = null;
            }
        }

        public RegisterView(partialView: ClientScripts.Views.IView, isModal?: boolean): ClientScripts.Views.IView {
            if (isModal != null && isModal == true) {
                partialView.IsModal = true;
                this.ViewsStack.add(partialView);
            }
            else {
                partialView.IsModal = false;
                if (this.ViewsStack.length == 0) {
                    this.ViewsStack.add(partialView);
                }
                else {
                    this.ViewsStack[this.ViewsStack.length - 1] = partialView;
                }
            }

            partialView.EntryPoint = this.entryPoint;
            return partialView;
        }

        public GetActiveView(): ClientScripts.Views.IView {
            return this.ViewsStack[this.ViewsStack.length - 1];
        }

        public RemoveViewFromIsDirtyList(view: ClientScripts.Views.IView) {
            let val = this._isViewDirty.firstOrDefault(f => f.view == view);
            if (val) {
                this._isViewDirty.remove(val);
            }
        }

        public IsPageDirty(): boolean {
            if (this._isViewDirty.firstOrDefault(f => f.view == this.GetActiveView()) != null) {
                return this._isViewDirty.firstOrDefault(f => f.view == this.GetActiveView()).isDirty;
            }
            return false;
        }

        public SetPageDirty(isDirty: boolean): void {
            if (isDirty) {
                $(window).on("beforeunload", () => { return "Resources.sUnsavedChanges"; });
            }
            else {
                $(window).off("beforeunload");
            }
            //this.entryPoint.viewModel.IsFormDirty = isDirty; MAYBE USELESS
            if (this._isViewDirty.firstOrDefault(f => f.view == this.GetActiveView()) == null) {
                this._isViewDirty.push({ view: this.GetActiveView(), isDirty: isDirty });
            }
            else {
                this._isViewDirty.firstOrDefault(f => f.view == this.GetActiveView()).isDirty = isDirty;
            }
        }

        public set CurrentModalUrl(url: string) {
            this._currentModalUrl = url;
        }

        public get CurrentModalUrl(): string {
            return this._currentModalUrl;
        }

        public SetModalHistory(url: string): void {
            if (this._modalUrlHistory == null) {
                this._modalUrlHistory = [];
            }
            this._modalUrlHistory.push(url);
        }

        public GetModalHistory(): string {
            return this._modalUrlHistory[this._modalUrlHistory.length - 1];
        }

        public SetModal(id: string) {
            this._modalIDs.push(id);
        }

        public RemoveModal(id: string) {
            this._modalIDs.pop();
        }

        public GetActiveModalId() {
            return this._modalIDs[this._modalIDs.length - 1];
        }

        private isInModal() {
            return this.GetActiveView() != null && this.GetActiveView().IsModal != null && this.GetActiveView().IsModal == true;
        }

        private async getAndShowViewOnPage(controller: string, action: string, id?: string): Promise<void> {
            if (action == null) {
                action = "Index";
            }

            //if (controller.toLowerCase() != "login" && sidebarMenu) {
            //    let menuItem = $(`a[data-controller=${controller.toLowerCase()}]`);
            //    sidebarMenu.setActiveItem(menuItem);
            //}

            helpers.ShowLoaderOverElement($(".m-wrapper"));
            if (this._view != null) {
                this._view.destroy();
                this.UnRegisterView();
            }

            let url = `/${controller}/${action}`;
            if (id != null) {
                url = `${url}/${id}`;
            }
            
            let downloadedView: any = "<h1>View not Found</h1>";
            downloadedView = await this.entryPoint.AjaxCall<AjaxResult<string>>({
                url: url,
                headers: { 'viewtype': 'partials' },
                method: "GET",
            });
            if (downloadedView.success == false) {
                helpers.HideLoaderOverElement($(".m-wrapper"));
                helpers.AlertError(downloadedView.messages);
                return;
            }

            this._view = new kendo.View(downloadedView);

            this.SetPageDirty(false);
            helpers.HideLoaderOverElement($(".m-wrapper"));
            $("#partialViewWrapper").text("");
            this._view.render("#partialViewWrapper");
        }
    }
}