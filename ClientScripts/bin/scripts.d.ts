/// <reference path="../Typings/kendo/index.d.ts" />
/// <reference types="kendo" />
/// <reference types="jquery" />
interface Array<T> {
    sum: (exp?: (item: T) => number) => number;
    max: (exp?: (item: T) => number) => number;
    min: (exp?: (item: T) => number) => number;
    addRange: (arr: T[]) => number;
    where: (exp?: (item: T) => boolean) => T[];
    all: (exp?: (item: T) => boolean) => boolean;
    any: (exp?: (item: T) => boolean) => boolean;
    orderBy: <K>(exp?: (item: T) => K) => T[];
    orderByDescending: <K>(exp?: (item: T) => K) => T[];
    firstOrDefault: (exp?: (item: T) => boolean) => T;
    groupBy: <K>(exp?: (item: T) => K) => ClientScripts.Common.ArrayExtensions.Grouping<T, K>[];
    removeAt: (index: number) => void;
    removeAll: () => void;
    removeRangeWhere: (exp: (item: T) => boolean) => number;
    removeRange: (arr: T[]) => number;
    remove: (item: T) => void;
    onRemove: (exp?: (item: T, ar: Array<T>) => void) => void;
    add: (item: T) => void;
    onAdd: (exp?: (item: T, ar: Array<T>) => void) => void;
    contains: (item: T) => boolean;
    /**Intersects with other array:
     * [1,2,3].intersect([2,3,4,5]) ==> [2, 3] */
    intersect: (otherArray: T[]) => T[];
    /**
     * Excepts with other array:
     * [1,2,3].except([2,3,4,5]) ==> [1]
     * @param otherArray
     */
    except: (otherArray: T[]) => T[];
}
declare namespace ClientScripts.Common.ArrayExtensions {
    class Grouping<T, K> extends Array<T> {
        constructor(myKey: K);
        key: K;
    }
}
declare namespace ClientScripts.Common {
    class CustomRouter extends kendo.Router {
        private _view;
        private _isViewDirty;
        private _modalUrlHistory;
        private ViewsStack;
        private _isKendoRouterNavigated;
        private _modalIDs;
        private _currentModalUrl;
        entryPoint: EntryPoint;
        constructor(options?: kendo.RouterOptions);
        navigate(route: string, silent?: boolean): void;
        UnRegisterView(isModal?: boolean): void;
        RegisterView(partialView: ClientScripts.Views.IView, isModal?: boolean): ClientScripts.Views.IView;
        GetActiveView(): ClientScripts.Views.IView;
        RemoveViewFromIsDirtyList(view: ClientScripts.Views.IView): void;
        IsPageDirty(): boolean;
        SetPageDirty(isDirty: boolean): void;
        CurrentModalUrl: string;
        SetModalHistory(url: string): void;
        GetModalHistory(): string;
        SetModal(id: string): void;
        RemoveModal(id: string): void;
        GetActiveModalId(): string;
        private isInModal;
        private getAndShowViewOnPage;
    }
}
declare namespace ClientScripts.Views {
    interface IView {
        OnInit(): Promise<void>;
        destroy(): void;
        EntryPoint: ClientScripts.Common.EntryPoint;
        IsModal: boolean;
    }
}
declare namespace ClientScripts.Common {
    class EntryPoint {
        private _viewModelObject;
        private _session;
        private _lastHttpActivityTimestamp;
        Router: CustomRouter;
        constructor(_viewModelObject: object);
        OnInit(): Promise<void>;
        Logout(): Promise<void>;
        Login(): Promise<void>;
        private ajaxCall;
        addSessionToUrl(url: string): string;
        AjaxCall<TResult>(ajaxOptions: JQueryAjaxSettings): Promise<TResult>;
    }
}
declare namespace ClientScripts.Common {
    function ShowLoaderOverElement(targetElement: any, backgroundColor?: any, opacity?: any): void;
    function HideLoaderOverElement(targetElement: any): void;
    function GetUrlParams(): any[];
    function AlertError(messages: ClientScripts.Common.ActionLoggerItem[]): void;
    function Dialog(dialogTitle: string, dialogMessage: string, buttonYes?: string, buttonNo?: string, callBackOnYes?: any, callBackOnNo?: any): void;
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
