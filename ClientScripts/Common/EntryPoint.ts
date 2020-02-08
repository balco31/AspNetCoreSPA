namespace ClientScripts.Common {
    export class EntryPoint {
        private _session: string;
        private _lastHttpActivityTimestamp: Date = new Date();

        constructor(private _viewModelObject: object) {
            console.log('Entry Point');
        }
        public async OnInit(): Promise<void> {
            $(function () {
            });
        } 


        public async Login() {
            var $form = $(".m-login__form");
            let self = this;
            let postPromise: AjaxResult = await this.ajaxCall<AjaxResult>({
                url: `/Login/Index`,
                data: $form.serialize(),
                headers: { 'sessionKey': sessionStorage.getItem("sessionKey"), 'isNew': "true" },
                type: "POST",
                success: function (response) {
                    if (response.url) {
                        window.location = response.url;
                    }
                    else {
                        document.body.innerHTML = response;
                        
                    }
                }
            });
        }

        private async ajaxCall<TResult>(ajaxOptions: JQueryAjaxSettings): Promise<TResult> {
            let self = this;
            var promise = new Promise<TResult>((resolve, reject) => {
                $.ajax(ajaxOptions).done((data, textStatus, jqXHR) => {
                    let cookie = jqXHR.getResponseHeader("midas_cookie");
                    if (cookie != null) {
                        self._session = cookie;
                    }
                    resolve(data);
                }).fail((xhr, textStatus, errorThrown) => {
                    console.log(textStatus);
                    console.log(errorThrown);
                    reject({ xhr, textStatus, errorThrown });
                });
            });
            return promise;
        }

        public addSessionToUrl(url: string): string {
            let session = this._session;
            if (session && session != "") {
                if (url.indexOf('?') > -1) {
                    var hashes = url.slice(url.indexOf('?') + 1).split('&');
                    let hasSessionIdDefined: boolean = false;
                    for (var i = 0; i < hashes.length; i++) {
                        let hash = hashes[i].split('=');
                        if (hash[0] == "session") {
                            hasSessionIdDefined = true;
                        }
                    }
                    if (!hasSessionIdDefined) {
                        url = url + "&session=" + session;
                    }
                }
                else {
                    url = url + "?session=" + session;
                }
            }
            return url;
        }

        public async AjaxCall<TResult>(ajaxOptions: JQueryAjaxSettings): Promise<TResult> {
            ajaxOptions.url = this.addSessionToUrl(ajaxOptions.url);

            try {
                let ajaxCallResponse = await this.ajaxCall<TResult>(ajaxOptions);
                this._lastHttpActivityTimestamp = new Date;
                return ajaxCallResponse;
            }
            catch (exc) {
                if (exc.errorThrown == "Unauthorized" || exc.errorThrown == "Forbidden") {
                    let msg = "Resources.sSessionExpiredMessage";//+ ".<br/> Last network action reported at: " + this._lastHttpActivityTimestamp.toLocaleTimeString();
                    //msg = msg + ".<br/> User logged in at: " + EntryPoint.viewModel.LoginTimeStamp.toLocaleTimeString();
                    //miClientScripts.Libs.Helpers.Alert(powClientScripts.System.powActionLoggerItemKind.Warning, Resources.sSessionExpiredTitle, msg, null, () => {
                        //this._CronusLogout();
                    //});
                    return new Promise<TResult>((resolve, reject) => { return { success: false } });
                }
                else {
                    console.log(exc);
                    //miClientScripts.Libs.Helpers.Alert(powClientScripts.System.powActionLoggerItemKind.Exception, Resources.sUnhandledExceptionInHttpCall, exc.xhr.responseText, null, () => { });
                    return new Promise<TResult>((resolve, reject) => { return { success: false } });
                }
            }
        }

    }
}