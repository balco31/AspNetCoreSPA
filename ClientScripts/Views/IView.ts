namespace ClientScripts.Views {

    export interface IView {
        OnInit(): Promise<void>;
        destroy(): void;
        EntryPoint: ClientScripts.Common.EntryPoint;
        IsModal: boolean;
    }
}