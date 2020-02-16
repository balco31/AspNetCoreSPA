/// <reference path="../ViewModels/AnotherVM.ts" />
namespace ClientScripts.Views {
    export class AnotherView implements IView {
        private _viewModel: ClientScripts.ViewModels.AnotherVM;
        private _observableObject: kendo.Observable;
        
        constructor(private _viewModelObject: object, protected _controllerName: string, private _pageTitle: string) {
        }

        async OnInit(): Promise<void> {
            this._observableObject = (kendo.observable(this._viewModelObject) as any);
            this._viewModel = new ClientScripts.ViewModels.AnotherVM(this._observableObject);
        }

        destroy(): void {
            
        }

        EntryPoint: Common.EntryPoint;
        IsModal: boolean;

    }
}