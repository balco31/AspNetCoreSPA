namespace ClientScripts.Common {
    export interface AjaxResult<TData = {}> {
        success: boolean;
        model: TData;
        messages: ActionLoggerItem[];
    }

    export interface ActionLoggerItem {
        Kind: ActionLoggerItemKind;
        Message: string;
    }

    export enum ActionLoggerItemKind {
        Info = 0,
        Warning = 1,
        Exception = 2
    }

}