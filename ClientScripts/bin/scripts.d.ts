/// <reference types="jquery" />
declare namespace ClientScripts.Common {
    class EntryPoint {
        private _viewModelObject;
        private _session;
        private _lastHttpActivityTimestamp;
        constructor(_viewModelObject: object);
        OnInit(): Promise<void>;
        Login(): Promise<void>;
        private ajaxCall;
        addSessionToUrl(url: string): string;
        AjaxCall<TResult>(ajaxOptions: JQueryAjaxSettings): Promise<TResult>;
    }
}
declare namespace ClientScripts.Common {
    interface AjaxResult<TData = {}> {
        success: boolean;
        model: TData;
        messages: ActionLoggerItem[];
    }
    interface ActionLoggerItem {
        Kind: ActionLoggerItemKind;
        Message: string;
    }
    enum ActionLoggerItemKind {
        Info = 0,
        Warning = 1,
        Exception = 2
    }
}
