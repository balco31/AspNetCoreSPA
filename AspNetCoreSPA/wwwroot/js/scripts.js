var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Array.prototype.sum = function (exp) {
    var result = 0;
    this.map(exp || (function (item) { return item; })).forEach(function (val) { return result += val; });
    return result;
};
Array.prototype.max = function (exp) {
    var arr = this.map(exp || (function (item) { return item; }));
    return Math.max.apply(null, arr);
};
Array.prototype.min = function (exp) {
    var arr = this.map(exp || (function (item) { return item; }));
    return Math.min.apply(null, arr);
};
Array.prototype.addRange = function (arr) {
    var length = this.length;
    var self = this;
    jQuery.each(arr, function (i, el) {
        length = self.push(el);
        if (self.addEvents) {
            for (var i_1 = 0; i_1 < self.addEvents.length; i_1++) {
                self.addEvents[i_1](el, self);
            }
        }
    });
    return length;
};
Array.prototype.removeAll = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        this.removeAt(i);
    }
};
Array.prototype.removeRange = function (arr) {
    var self = this;
    jQuery.each(arr, function (i, el) {
        self.remove(el);
    });
    var length = this.length;
    return length;
};
Array.prototype.removeRangeWhere = function (exp) {
    var self = this;
    var arr = this.where(exp);
    jQuery.each(arr, function (i, el) {
        self.remove(el);
    });
    var length = this.length;
    return length;
};
Array.prototype.where = function (exp) {
    var arr = jQuery.grep(this, exp);
    return arr;
};
Array.prototype.all = function (exp) {
    if (this.length === 0) {
        return false;
    }
    var result = true;
    jQuery.each(this, function (i, el) {
        if (!exp(el)) {
            result = false;
        }
    });
    return result;
};
Array.prototype.any = function (exp) {
    var result = false;
    if (exp) {
        jQuery.each(this, function (i, el) {
            if (exp(el)) {
                result = true;
            }
        });
    }
    else {
        result = this.length > 0;
    }
    return result;
};
Array.prototype.orderBy = function (exp) {
    var sortAr = new Array();
    sortAr.addRange(this);
    if (exp == null) {
        return sortAr.sort();
    }
    else {
        return sortAr.sort(function (n1, n2) {
            var value1 = exp(n1);
            var value2 = exp(n2);
            if ((typeof value1) === "number") {
                return value1 - value2;
            }
            else {
                if (value1 > value2) {
                    return 1;
                }
                else if (value1 < value2) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        });
    }
};
Array.prototype.orderByDescending = function (exp) {
    var sortAr = new Array();
    sortAr.addRange(this);
    if (!exp) {
        return sortAr.sort();
    }
    else {
        return sortAr.sort(function (n1, n2) {
            var value1 = exp(n1);
            var value2 = exp(n2);
            if ((typeof value1) === "number") {
                return value2 - value1;
            }
            else {
                if (value2 > value1) {
                    return 1;
                }
                else if (value2 < value1) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        });
    }
};
Array.prototype.contains = function (item) {
    return this.indexOf(item) >= 0;
};
Array.prototype.firstOrDefault = function (exp) {
    if (exp) {
        var arr = jQuery.grep(this, exp);
        return arr.length ? arr[0] : null;
    }
    else {
        return this.length ? this[0] : null;
    }
};
Array.prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        if (this.removeEvents) {
            for (var i = 0; i < this.removeEvents.length; i++) {
                this.removeEvents[i](item, this);
            }
        }
    }
};
Array.prototype.removeAt = function (index) {
    if (index >= 0) {
        var item = this[index];
        this.splice(index, 1);
        if (this.removeEvents) {
            for (var i = 0; i < this.removeEvents.length; i++) {
                this.removeEvents[i](item, this);
            }
        }
    }
};
Array.prototype.onRemove = function (exp) {
    if (!this.removeEvents) {
        this.removeEvents = [];
    }
    this.removeEvents.push(exp);
};
Array.prototype.add = function (item) {
    this.push(item);
    if (this.addEvents) {
        for (var i = 0; i < this.addEvents.length; i++) {
            this.addEvents[i](item, this);
        }
    }
};
Array.prototype.onAdd = function (exp) {
    if (!this.addEvents) {
        this.addEvents = [];
    }
    this.addEvents.push(exp);
};
Array.prototype.groupBy = function (exp) {
    var result = (this.reduce(function (groups, item) {
        var key = exp(item);
        if (!(groups instanceof Array)) {
            groups = new Array();
        }
        var group = groups.firstOrDefault(function (x) { return x.key === key; });
        if (!group) {
            group = new ClientScripts.Common.ArrayExtensions.Grouping(key);
            groups.push(group);
        }
        group.push(item);
        return groups;
    }, {}));
    if (!(result instanceof Array)) {
        return new Array();
    }
    return result;
};
Array.prototype.intersect = function (otherArray) {
    return this.filter(function (n) {
        return otherArray.indexOf(n) !== -1;
    });
};
Array.prototype.except = function (otherArray) {
    var self = this;
    return self.filter(function (n) {
        return self.intersect(otherArray).indexOf(n) === -1;
    });
};
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var ArrayExtensions;
        (function (ArrayExtensions) {
            var Grouping = /** @class */ (function (_super) {
                __extends(Grouping, _super);
                function Grouping(myKey) {
                    var _this = _super.call(this) || this;
                    _this.key = myKey;
                    return _this;
                }
                return Grouping;
            }(Array));
            ArrayExtensions.Grouping = Grouping;
        })(ArrayExtensions = Common.ArrayExtensions || (Common.ArrayExtensions = {}));
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var helpers = ClientScripts.Common;
        var CustomRouter = /** @class */ (function (_super) {
            __extends(CustomRouter, _super);
            function CustomRouter(options) {
                var _this = _super.call(this, {
                    pushState: true,
                    root: "/",
                    routeMissing: function (e) {
                        console.log("missinge route", e.url, e.params);
                    }
                }) || this;
                _this._isViewDirty = [];
                _this._modalUrlHistory = [];
                _this.ViewsStack = [];
                _this._isKendoRouterNavigated = false;
                _this._modalIDs = [];
                var self = _this;
                _this.bind('change', function (changeEvent) {
                    //console.log("change route event", changeEvent);
                    if (self._isKendoRouterNavigated == false && changeEvent.backButtonPressed == null) {
                        // do this in case of page full reload (so navigation was not triggered by router (user triggered)) e.g. when you do window.location('/') or enter a specific url in browser and press enter or page rrefresh via F5
                        // so this does nothing otherwise goes in infinite loop
                        changeEvent.preventDefault();
                        return;
                    }
                    if (changeEvent.backButtonPressed && _this.isInModal()) {
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
                _this.bind("back", function (e) {
                    //console.log("back route event", e);
                    if (self.isInModal()) {
                        // in case of history.back and is in modal then navigate to the modalHistoryUrl (keeps the back url in case of modals)
                        e.preventDefault();
                        var modalHistoryUrl = self.GetModalHistory();
                        self.navigate(modalHistoryUrl);
                    }
                });
                _this.route(":controller(/:action)(/:id)", function (controller, action, id) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        self.getAndShowViewOnPage(controller, action, id);
                        return [2 /*return*/];
                    }); });
                });
                return _this;
            }
            CustomRouter.prototype.navigate = function (route, silent) {
                var _this = this;
                route = this.entryPoint.addSessionToUrl(route);
                //if (EntryPoint.CntrlIsPressed) {
                //    setTimeout(() => {
                //        EntryPoint.CntrlIsPressed = false;
                //        let myWindow = window.open(route, "_blank");
                //        myWindow.focus();
                //    }, 200);
                //    return;
                //}
                var self = this;
                this._isKendoRouterNavigated = true;
                if (this.isInModal()) {
                    var modalId = this.GetActiveModalId();
                    if (this.IsPageDirty() == true) {
                        //ask if view Is Dirty before navigate to another modal window this modal case is not going thorugh change event of Router so this is neede again here to ask for unsaved changes in modals
                        helpers.Dialog("Resources.sUnsavedChanges", "Resources.sLeaveChanges", null, null, function (evnt) {
                            self.SetPageDirty(false);
                            _this.SetModalHistory(_this.CurrentModalUrl);
                            //this.LoadModalPartial(route, `#${modalId} #ModalPlaceHolder`, `#${modalId} #ModalPlaceHolder .h-modal-content`);
                        });
                    }
                    else {
                        this.SetModalHistory(this.CurrentModalUrl);
                        //this.LoadModalPartial(route, `#${modalId} #ModalPlaceHolder`, `#${modalId} #ModalPlaceHolder .h-modal-content`);
                    }
                    return;
                }
                _super.prototype.navigate.call(this, route, silent);
            };
            CustomRouter.prototype.UnRegisterView = function (isModal) {
                var view = this.ViewsStack.pop();
                if (view != null) {
                    this.RemoveViewFromIsDirtyList(view);
                    view.destroy();
                    view = null;
                }
            };
            CustomRouter.prototype.RegisterView = function (partialView, isModal) {
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
            };
            CustomRouter.prototype.GetActiveView = function () {
                return this.ViewsStack[this.ViewsStack.length - 1];
            };
            CustomRouter.prototype.RemoveViewFromIsDirtyList = function (view) {
                var val = this._isViewDirty.firstOrDefault(function (f) { return f.view == view; });
                if (val) {
                    this._isViewDirty.remove(val);
                }
            };
            CustomRouter.prototype.IsPageDirty = function () {
                var _this = this;
                if (this._isViewDirty.firstOrDefault(function (f) { return f.view == _this.GetActiveView(); }) != null) {
                    return this._isViewDirty.firstOrDefault(function (f) { return f.view == _this.GetActiveView(); }).isDirty;
                }
                return false;
            };
            CustomRouter.prototype.SetPageDirty = function (isDirty) {
                var _this = this;
                if (isDirty) {
                    $(window).on("beforeunload", function () { return "Resources.sUnsavedChanges"; });
                }
                else {
                    $(window).off("beforeunload");
                }
                //this.entryPoint.viewModel.IsFormDirty = isDirty; MAYBE USELESS
                if (this._isViewDirty.firstOrDefault(function (f) { return f.view == _this.GetActiveView(); }) == null) {
                    this._isViewDirty.push({ view: this.GetActiveView(), isDirty: isDirty });
                }
                else {
                    this._isViewDirty.firstOrDefault(function (f) { return f.view == _this.GetActiveView(); }).isDirty = isDirty;
                }
            };
            Object.defineProperty(CustomRouter.prototype, "CurrentModalUrl", {
                get: function () {
                    return this._currentModalUrl;
                },
                set: function (url) {
                    this._currentModalUrl = url;
                },
                enumerable: true,
                configurable: true
            });
            CustomRouter.prototype.SetModalHistory = function (url) {
                if (this._modalUrlHistory == null) {
                    this._modalUrlHistory = [];
                }
                this._modalUrlHistory.push(url);
            };
            CustomRouter.prototype.GetModalHistory = function () {
                return this._modalUrlHistory[this._modalUrlHistory.length - 1];
            };
            CustomRouter.prototype.SetModal = function (id) {
                this._modalIDs.push(id);
            };
            CustomRouter.prototype.RemoveModal = function (id) {
                this._modalIDs.pop();
            };
            CustomRouter.prototype.GetActiveModalId = function () {
                return this._modalIDs[this._modalIDs.length - 1];
            };
            CustomRouter.prototype.isInModal = function () {
                return this.GetActiveView() != null && this.GetActiveView().IsModal != null && this.GetActiveView().IsModal == true;
            };
            CustomRouter.prototype.getAndShowViewOnPage = function (controller, action, id) {
                return __awaiter(this, void 0, void 0, function () {
                    var url, downloadedView;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
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
                                url = "/" + controller + "/" + action;
                                if (id != null) {
                                    url = url + "/" + id;
                                }
                                downloadedView = "<h1>View not Found</h1>";
                                return [4 /*yield*/, this.entryPoint.AjaxCall({
                                        url: url,
                                        headers: { 'viewtype': 'partials' },
                                        method: "GET",
                                    })];
                            case 1:
                                downloadedView = _a.sent();
                                if (downloadedView.success == false) {
                                    helpers.HideLoaderOverElement($(".m-wrapper"));
                                    helpers.AlertError(downloadedView.messages);
                                    return [2 /*return*/];
                                }
                                this._view = new kendo.View(downloadedView);
                                this.SetPageDirty(false);
                                helpers.HideLoaderOverElement($(".m-wrapper"));
                                $("#partialViewWrapper").text("");
                                this._view.render("#partialViewWrapper");
                                return [2 /*return*/];
                        }
                    });
                });
            };
            return CustomRouter;
        }(kendo.Router));
        Common.CustomRouter = CustomRouter;
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var ViewModels;
    (function (ViewModels) {
        var EntryPointVM = /** @class */ (function () {
            function EntryPointVM(_observable) {
                this._observable = _observable;
            }
            Object.defineProperty(EntryPointVM.prototype, "SessionId", {
                get: function () {
                    return this._observable.get("SessionId");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EntryPointVM.prototype, "PropertyName", {
                set: function (theValue) {
                    this._observable.set("SessionId", theValue);
                },
                enumerable: true,
                configurable: true
            });
            ;
            return EntryPointVM;
        }());
        ViewModels.EntryPointVM = EntryPointVM;
    })(ViewModels = ClientScripts.ViewModels || (ClientScripts.ViewModels = {}));
})(ClientScripts || (ClientScripts = {}));
/// <reference path="../Views/IView.ts" />
/// <reference path="../Typings/kendo/index.d.ts"/>
/// <reference path="../ViewModels/EntryPointVM.ts" />
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var helpers = ClientScripts.Common;
        var EntryPoint = /** @class */ (function () {
            function EntryPoint(_viewModelObject) {
                this._viewModelObject = _viewModelObject;
                this._lastHttpActivityTimestamp = new Date();
                console.log('Entry Point');
            }
            EntryPoint.prototype.OnInit = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var self;
                    return __generator(this, function (_a) {
                        self = this;
                        this._session = helpers.GetUrlParams()["session"]; //initialise session from Url
                        this.Router = new Common.CustomRouter();
                        this.Router.entryPoint = this;
                        if (self._viewModelObject != null) {
                            this._observableObject = kendo.observable(this._viewModelObject);
                            this._viewModel = new ClientScripts.ViewModels.EntryPointVM(this._observableObject);
                        }
                        else {
                            // When we have not _viewModelObject this is the Case EntryPoint is instantiated in login Index page 
                            //so in this case we set in SessionStorage a sessionKey a unique Identifier for this current Session.
                            sessionStorage.setItem("sessionKey", helpers.NewGuid());
                        }
                        $(function () {
                            self.Router.start();
                            var pathName = location.pathname;
                            if (self._viewModelObject) {
                                self.Router.navigate("/");
                                self.Router.navigate(pathName);
                            }
                        });
                        return [2 /*return*/];
                    });
                });
            };
            EntryPoint.prototype.Logout = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.AjaxCall({
                                    url: "/Login/Logout",
                                    method: "POST"
                                })];
                            case 1:
                                result = _a.sent();
                                window.location.href = "/login/index";
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EntryPoint.prototype.Login = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var $form, self, postPromise;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                $form = $(".m-login__form");
                                self = this;
                                return [4 /*yield*/, this.ajaxCall({
                                        url: "/Login/Index",
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
                                    })];
                            case 1:
                                postPromise = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EntryPoint.prototype.ajaxCall = function (ajaxOptions) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, promise;
                    return __generator(this, function (_a) {
                        self = this;
                        promise = new Promise(function (resolve, reject) {
                            $.ajax(ajaxOptions).done(function (data, textStatus, jqXHR) {
                                var cookie = jqXHR.getResponseHeader("midas_cookie");
                                if (cookie != null) {
                                    self._session = cookie;
                                }
                                resolve(data);
                            }).fail(function (xhr, textStatus, errorThrown) {
                                console.log(textStatus);
                                console.log(errorThrown);
                                reject({ xhr: xhr, textStatus: textStatus, errorThrown: errorThrown });
                            });
                        });
                        return [2 /*return*/, promise];
                    });
                });
            };
            EntryPoint.prototype.addSessionToUrl = function (url) {
                var session = this._session;
                if (session && session != "") {
                    if (url.indexOf('?') > -1) {
                        var hashes = url.slice(url.indexOf('?') + 1).split('&');
                        var hasSessionIdDefined = false;
                        for (var i = 0; i < hashes.length; i++) {
                            var hash = hashes[i].split('=');
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
            };
            EntryPoint.prototype.AjaxCall = function (ajaxOptions) {
                return __awaiter(this, void 0, void 0, function () {
                    var ajaxCallResponse, exc_1, msg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                ajaxOptions.url = this.addSessionToUrl(ajaxOptions.url);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.ajaxCall(ajaxOptions)];
                            case 2:
                                ajaxCallResponse = _a.sent();
                                this._lastHttpActivityTimestamp = new Date;
                                return [2 /*return*/, ajaxCallResponse];
                            case 3:
                                exc_1 = _a.sent();
                                if (exc_1.errorThrown == "Unauthorized" || exc_1.errorThrown == "Forbidden") {
                                    msg = "Resources.sSessionExpiredMessage";
                                    //msg = msg + ".<br/> User logged in at: " + EntryPoint.viewModel.LoginTimeStamp.toLocaleTimeString();
                                    //miClientScripts.Libs.Helpers.Alert(powClientScripts.System.powActionLoggerItemKind.Warning, Resources.sSessionExpiredTitle, msg, null, () => {
                                    //this._CronusLogout();
                                    //});
                                    return [2 /*return*/, new Promise(function (resolve, reject) { return { success: false }; })];
                                }
                                else {
                                    console.log(exc_1);
                                    //miClientScripts.Libs.Helpers.Alert(powClientScripts.System.powActionLoggerItemKind.Exception, Resources.sUnhandledExceptionInHttpCall, exc.xhr.responseText, null, () => { });
                                    return [2 /*return*/, new Promise(function (resolve, reject) { return { success: false }; })];
                                }
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            return EntryPoint;
        }());
        Common.EntryPoint = EntryPoint;
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        function NewGuid() {
            if (window.crypto) {
                //better randomizer
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
                    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
                });
            }
            else {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
        }
        Common.NewGuid = NewGuid;
        ;
        function ShowLoaderOverElement(targetElement, backgroundColor, opacity) {
            var loaderBackgroundColor;
            if (typeof backgroundColor === "undefined" || backgroundColor === null) {
                loaderBackgroundColor = "#ffffff";
            }
            else {
                loaderBackgroundColor = backgroundColor;
            }
            var loaderBackgroundTransparency;
            if (typeof opacity === "undefined" || opacity === null) {
                loaderBackgroundTransparency = 1;
            }
            else {
                loaderBackgroundTransparency = opacity;
            }
            var rgbaBackgroundColor = "rgba(" + parseInt(loaderBackgroundColor.slice(-6, -4), 16)
                + "," + parseInt(loaderBackgroundColor.slice(-4, -2), 16)
                + "," + parseInt(loaderBackgroundColor.slice(-2), 16)
                + "," + loaderBackgroundTransparency + ")";
            targetElement.css("position", "relative");
            targetElement.append('<div class="h-loader-container" style="background-color:' + rgbaBackgroundColor + '"><div class="m-loader m-loader--brand"></div></div>');
        }
        Common.ShowLoaderOverElement = ShowLoaderOverElement;
        ;
        function HideLoaderOverElement(targetElement) {
            var $loaderWrapper = targetElement.find(".h-loader-container");
            $loaderWrapper.fadeOut(200, function () {
                $(this).remove();
            });
        }
        Common.HideLoaderOverElement = HideLoaderOverElement;
        ;
        function GetUrlParams() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        Common.GetUrlParams = GetUrlParams;
        function AlertError(messages) {
            // TODO
            alert(messages.firstOrDefault().Message);
            //Alert(ClientScripts.Common.ActionLoggerItemKind.Exception, "Resources.sError", messages.firstOrDefault().Message);
        }
        Common.AlertError = AlertError;
        function Dialog(dialogTitle, dialogMessage, buttonYes, buttonNo, callBackOnYes, callBackOnNo) {
        }
        Common.Dialog = Dialog;
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var ActionLoggerItemKind;
        (function (ActionLoggerItemKind) {
            ActionLoggerItemKind[ActionLoggerItemKind["Info"] = 0] = "Info";
            ActionLoggerItemKind[ActionLoggerItemKind["Warning"] = 1] = "Warning";
            ActionLoggerItemKind[ActionLoggerItemKind["Exception"] = 2] = "Exception";
        })(ActionLoggerItemKind = Common.ActionLoggerItemKind || (Common.ActionLoggerItemKind = {}));
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var ViewModels;
    (function (ViewModels) {
        var AnotherVM = /** @class */ (function () {
            function AnotherVM(_observable) {
                this._observable = _observable;
            }
            Object.defineProperty(AnotherVM.prototype, "Info", {
                get: function () {
                    return this._observable.get("Info");
                },
                set: function (theValue) {
                    this._observable.set("Info", theValue);
                },
                enumerable: true,
                configurable: true
            });
            ;
            return AnotherVM;
        }());
        ViewModels.AnotherVM = AnotherVM;
    })(ViewModels = ClientScripts.ViewModels || (ClientScripts.ViewModels = {}));
})(ClientScripts || (ClientScripts = {}));
/// <reference path="../ViewModels/AnotherVM.ts" />
var ClientScripts;
(function (ClientScripts) {
    var Views;
    (function (Views) {
        var AnotherView = /** @class */ (function () {
            function AnotherView(_viewModelObject, _controllerName, _pageTitle) {
                this._viewModelObject = _viewModelObject;
                this._controllerName = _controllerName;
                this._pageTitle = _pageTitle;
            }
            AnotherView.prototype.OnInit = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this._observableObject = kendo.observable(this._viewModelObject);
                        this._viewModel = new ClientScripts.ViewModels.AnotherVM(this._observableObject);
                        return [2 /*return*/];
                    });
                });
            };
            AnotherView.prototype.destroy = function () {
            };
            return AnotherView;
        }());
        Views.AnotherView = AnotherView;
    })(Views = ClientScripts.Views || (ClientScripts.Views = {}));
})(ClientScripts || (ClientScripts = {}));
var ClientScripts;
(function (ClientScripts) {
    var Views;
    (function (Views) {
        var View = /** @class */ (function () {
            function View() {
            }
            return View;
        }());
        Views.View = View;
    })(Views = ClientScripts.Views || (ClientScripts.Views = {}));
})(ClientScripts || (ClientScripts = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbW1vbi9BcnJheUV4dGVuc2lvbnMudHMiLCIuLi9Db21tb24vQ3VzdG9tUm91dGVyLnRzIiwiLi4vVmlld3MvSVZpZXcudHMiLCIuLi9WaWV3TW9kZWxzL0VudHJ5UG9pbnRWTS50cyIsIi4uL0NvbW1vbi9FbnRyeVBvaW50LnRzIiwiLi4vQ29tbW9uL0hlbHBlcnMudHMiLCIuLi9Db21tb24vSW50ZXJmYWNlcy50cyIsIi4uL1ZpZXdNb2RlbHMvQW5vdGhlclZNLnRzIiwiLi4vVmlld3MvQW5vdGhlclZpZXcudHMiLCIuLi9WaWV3cy9maWxlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBYSxHQUF5QjtJQUN4RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxJQUFJLEdBQUcsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNsRSxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFhLEdBQXlCO0lBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFF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QUp1QixLQUFLLEdBQUwsbUJBQUssS0FBTCxtQkFBSyxRQUk1QjtBQUFELENBQUMsRUFKUyxhQUFhLEtBQWIsYUFBYSxRQUl0QiIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBcnJheTxUPiB7XHJcbiAgICBzdW06IChleHA/OiAoaXRlbTogVCkgPT4gbnVtYmVyKSA9PiBudW1iZXI7XHJcbiAgICBtYXg6IChleHA/OiAoaXRlbTogVCkgPT4gbnVtYmVyKSA9PiBudW1iZXI7XHJcbiAgICBtaW46IChleHA/OiAoaXRlbTogVCkgPT4gbnVtYmVyKSA9PiBudW1iZXI7XHJcbiAgICBhZGRSYW5nZTogKGFycjogVFtdKSA9PiBudW1iZXI7XHJcbiAgICB3aGVyZTogKGV4cD86IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBUW107XHJcbiAgICBhbGw6IChleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikgPT4gYm9vbGVhbjtcclxuICAgIGFueTogKGV4cD86IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBib29sZWFuO1xyXG4gICAgb3JkZXJCeTogPEs+IChleHA/OiAoaXRlbTogVCkgPT4gSykgPT4gVFtdO1xyXG4gICAgb3JkZXJCeURlc2NlbmRpbmc6IDxLPiAoZXhwPzogKGl0ZW06IFQpID0+IEspID0+IFRbXTtcclxuICAgIGZpcnN0T3JEZWZhdWx0OiAoZXhwPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IFQ7XHJcbiAgICBncm91cEJ5OiA8Sz4gKGV4cD86IChpdGVtOiBUKSA9PiBLKSA9PiBDbGllbnRTY3JpcHRzLkNvbW1vbi5BcnJheUV4dGVuc2lvbnMuR3JvdXBpbmc8VCwgSz5bXTtcclxuICAgIHJlbW92ZUF0OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHJlbW92ZUFsbDogKCkgPT4gdm9pZDtcclxuICAgIHJlbW92ZVJhbmdlV2hlcmU6IChleHA6IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBudW1iZXI7XHJcbiAgICByZW1vdmVSYW5nZTogKGFycjogVFtdKSA9PiBudW1iZXI7XHJcbiAgICByZW1vdmU6IChpdGVtOiBUKSA9PiB2b2lkO1xyXG4gICAgb25SZW1vdmU6IChleHA/OiAoaXRlbTogVCwgYXI6IEFycmF5PFQ+KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgYWRkOiAoaXRlbTogVCkgPT4gdm9pZDtcclxuICAgIG9uQWRkOiAoZXhwPzogKGl0ZW06IFQsIGFyOiBBcnJheTxUPikgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIGNvbnRhaW5zOiAoaXRlbTogVCkgPT4gYm9vbGVhbjtcclxuICAgIC8qKkludGVyc2VjdHMgd2l0aCBvdGhlciBhcnJheTogXHJcbiAgICAgKiBbMSwyLDNdLmludGVyc2VjdChbMiwzLDQsNV0pID09PiBbMiwgM10gKi9cclxuICAgIGludGVyc2VjdDogKG90aGVyQXJyYXk6IFRbXSkgPT4gVFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhjZXB0cyB3aXRoIG90aGVyIGFycmF5OlxyXG4gICAgICogWzEsMiwzXS5leGNlcHQoWzIsMyw0LDVdKSA9PT4gWzFdXHJcbiAgICAgKiBAcGFyYW0gb3RoZXJBcnJheVxyXG4gICAgICovXHJcbiAgICBleGNlcHQ6IChvdGhlckFycmF5OiBUW10pID0+IFRbXTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gbnVtYmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIHRoaXMubWFwKGV4cCB8fCAoKGl0ZW0pID0+IGl0ZW0pKS5mb3JFYWNoKCh2YWwpID0+IHJlc3VsdCArPSB2YWwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IG51bWJlcikge1xyXG4gICAgbGV0IGFyciA9IHRoaXMubWFwKGV4cCB8fCAoKGl0ZW0pID0+IGl0ZW0pKTtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBhcnIpO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24gPFQ+KGV4cD86IChpdGVtOiBUKSA9PiBudW1iZXIpIHtcclxuICAgIGxldCBhcnIgPSB0aGlzLm1hcChleHAgfHwgKChpdGVtKSA9PiBpdGVtKSk7XHJcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgYXJyKTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLmFkZFJhbmdlID0gZnVuY3Rpb24gPFQ+KGFycjogVFtdKTogbnVtYmVyIHtcclxuICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGpRdWVyeS5lYWNoKGFyciwgKGksIGVsKSA9PiB7XHJcbiAgICAgICAgbGVuZ3RoID0gc2VsZi5wdXNoKGVsKTtcclxuICAgICAgICBpZiAoc2VsZi5hZGRFdmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmFkZEV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGRFdmVudHNbaV0oZWwsIHNlbGYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGVuZ3RoO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUucmVtb3ZlUmFuZ2UgPSBmdW5jdGlvbiA8VD4oYXJyOiBUW10pOiBudW1iZXIge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgalF1ZXJ5LmVhY2goYXJyLCAoaSwgZWwpID0+IHtcclxuICAgICAgICBzZWxmLnJlbW92ZShlbCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICByZXR1cm4gbGVuZ3RoO1xyXG59XHJcbkFycmF5LnByb3RvdHlwZS5yZW1vdmVSYW5nZVdoZXJlID0gZnVuY3Rpb24gPFQ+KGV4cDogKGl0ZW06IFQpID0+IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGFyciA9IHRoaXMud2hlcmUoZXhwKTtcclxuICAgIGpRdWVyeS5lYWNoKGFyciwgKGksIGVsKSA9PiB7XHJcbiAgICAgICAgc2VsZi5yZW1vdmUoZWwpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICByZXR1cm4gbGVuZ3RoO1xyXG59XHJcbkFycmF5LnByb3RvdHlwZS53aGVyZSA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgbGV0IGFyciA9IGpRdWVyeS5ncmVwKHRoaXMsIGV4cCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbkFycmF5LnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pIHtcclxuXHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICBqUXVlcnkuZWFjaCh0aGlzLCAoaSwgZWwpID0+IHtcclxuICAgICAgICBpZiAoIWV4cChlbCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuXHJcbn1cclxuQXJyYXkucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChleHApIHtcclxuICAgICAgICBqUXVlcnkuZWFjaCh0aGlzLCAoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV4cChlbCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLm9yZGVyQnkgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IGFueSkge1xyXG4gICAgbGV0IHNvcnRBciA9IG5ldyBBcnJheTxUPigpO1xyXG4gICAgc29ydEFyLmFkZFJhbmdlKHRoaXMpO1xyXG4gICAgaWYgKGV4cCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRBci5zb3J0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc29ydEFyLnNvcnQoKG4xLCBuMikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUxID0gZXhwKG4xKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlMiA9IGV4cChuMik7XHJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHZhbHVlMSkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPnZhbHVlMSAtIDxudW1iZXI+dmFsdWUyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlMSA+IHZhbHVlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxIDwgdmFsdWUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUub3JkZXJCeURlc2NlbmRpbmcgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IGFueSkge1xyXG4gICAgbGV0IHNvcnRBciA9IG5ldyBBcnJheTxUPigpO1xyXG4gICAgc29ydEFyLmFkZFJhbmdlKHRoaXMpO1xyXG4gICAgaWYgKCFleHApIHtcclxuICAgICAgICByZXR1cm4gc29ydEFyLnNvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzb3J0QXIuc29ydCgobjEsIG4yKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTEgPSBleHAobjEpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUyID0gZXhwKG4yKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUxKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+dmFsdWUyIC0gPG51bWJlcj52YWx1ZTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUyID4gdmFsdWUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZTIgPCB2YWx1ZTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIDxUPihpdGVtOiBUKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleE9mKGl0ZW0pID49IDA7XHJcbn1cclxuXHJcblxyXG5BcnJheS5wcm90b3R5cGUuZmlyc3RPckRlZmF1bHQgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pIHtcclxuICAgIGlmIChleHApIHtcclxuICAgICAgICBsZXQgYXJyID0galF1ZXJ5LmdyZXAodGhpcywgZXhwKTtcclxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA/IGFyclswXSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyB0aGlzWzBdIDogbnVsbDtcclxuICAgIH1cclxufVxyXG5BcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gPFQ+KGl0ZW06IFQpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVtb3ZlRXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50c1tpXShpdGVtLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5BcnJheS5wcm90b3R5cGUucmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXNbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5yZW1vdmVFdmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlbW92ZUV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHNbaV0oaXRlbSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQXJyYXkucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gPFQ+KGV4cD86IChpdGVtOiBULCBhcjogQXJyYXk8VD4pID0+IHZvaWQpIHtcclxuICAgIGlmICghdGhpcy5yZW1vdmVFdmVudHMpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVFdmVudHMucHVzaChleHApO1xyXG59O1xyXG5cclxuQXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIDxUPihpdGVtOiBUKSB7XHJcbiAgICB0aGlzLnB1c2goaXRlbSk7XHJcbiAgICBpZiAodGhpcy5hZGRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWRkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRzW2ldKGl0ZW0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5BcnJheS5wcm90b3R5cGUub25BZGQgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQsIGFyOiBBcnJheTxUPikgPT4gdm9pZCkge1xyXG4gICAgaWYgKCF0aGlzLmFkZEV2ZW50cykge1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEV2ZW50cy5wdXNoKGV4cCk7XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24gPFQsIEs+KGV4cD86IChpdGVtOiBUKSA9PiBLKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBBcnJheTxDbGllbnRTY3JpcHRzLkNvbW1vbi5BcnJheUV4dGVuc2lvbnMuR3JvdXBpbmc8VCwgSz4+ID0gPEFycmF5PENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPj4+XHJcbiAgICAgICAgKHRoaXMucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXhwKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoIShncm91cHMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwcyA9IG5ldyBBcnJheTxDbGllbnRTY3JpcHRzLkNvbW1vbi5BcnJheUV4dGVuc2lvbnMuR3JvdXBpbmc8VCwgSz4+KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gZ3JvdXBzLmZpcnN0T3JEZWZhdWx0KHggPT4geC5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgICAgIGlmICghZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPihrZXkpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyb3VwLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3Vwc1xyXG4gICAgICAgIH0sIHt9KSk7XHJcbiAgICBpZiAoIShyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5PENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPj4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcblxyXG5BcnJheS5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gPFQ+KG90aGVyQXJyYXk6IFRbXSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKChuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyQXJyYXkuaW5kZXhPZihuKSAhPT0gLTFcclxuICAgIH0pO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuZXhjZXB0ID0gZnVuY3Rpb24gPFQ+KG90aGVyQXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gc2VsZi5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbnRlcnNlY3Qob3RoZXJBcnJheSkuaW5kZXhPZihuKSA9PT0gLTFcclxuICAgIH0pO1xyXG59O1xyXG5cclxubmFtZXNwYWNlIENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucyB7XHJcbiAgICBleHBvcnQgY2xhc3MgR3JvdXBpbmc8VCwgSz4gZXh0ZW5kcyBBcnJheTxUPiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobXlLZXk6IEspIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXkgPSBteUtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBrZXk6IEs7XHJcblxyXG4gICAgfVxyXG5cclxufSIsIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLkNvbW1vbiB7XHJcbiAgICBpbXBvcnQgaGVscGVycyA9IENsaWVudFNjcmlwdHMuQ29tbW9uO1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbVJvdXRlciBleHRlbmRzIGtlbmRvLlJvdXRlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBfdmlldzoga2VuZG8uVmlldztcclxuICAgICAgICBwcml2YXRlIF9pc1ZpZXdEaXJ0eTogQXJyYXk8eyB2aWV3OiBDbGllbnRTY3JpcHRzLlZpZXdzLklWaWV3LCBpc0RpcnR5OiBib29sZWFuIH0+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSBfbW9kYWxVcmxIaXN0b3J5OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSBWaWV3c1N0YWNrOiBBcnJheTxDbGllbnRTY3JpcHRzLlZpZXdzLklWaWV3PiA9IFtdO1xyXG4gICAgICAgIHByaXZhdGUgX2lzS2VuZG9Sb3V0ZXJOYXZpZ2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIF9tb2RhbElEczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICAgIHByaXZhdGUgX2N1cnJlbnRNb2RhbFVybDogc3RyaW5nO1xyXG5cclxuICAgICAgICBwdWJsaWMgZW50cnlQb2ludDogRW50cnlQb2ludDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0aW9ucz86IGtlbmRvLlJvdXRlck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICAgICAgcHVzaFN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcm9vdDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZU1pc3Npbmc6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtaXNzaW5nZSByb3V0ZVwiLCBlLnVybCwgZS5wYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iaW5kKCdjaGFuZ2UnLCAoY2hhbmdlRXZlbnQ6IGtlbmRvLlJvdXRlckNoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlIHJvdXRlIGV2ZW50XCIsIGNoYW5nZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9pc0tlbmRvUm91dGVyTmF2aWdhdGVkID09IGZhbHNlICYmIGNoYW5nZUV2ZW50LmJhY2tCdXR0b25QcmVzc2VkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB0aGlzIGluIGNhc2Ugb2YgcGFnZSBmdWxsIHJlbG9hZCAoc28gbmF2aWdhdGlvbiB3YXMgbm90IHRyaWdnZXJlZCBieSByb3V0ZXIgKHVzZXIgdHJpZ2dlcmVkKSkgZS5nLiB3aGVuIHlvdSBkbyB3aW5kb3cubG9jYXRpb24oJy8nKSBvciBlbnRlciBhIHNwZWNpZmljIHVybCBpbiBicm93c2VyIGFuZCBwcmVzcyBlbnRlciBvciBwYWdlIHJyZWZyZXNoIHZpYSBGNVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoaXMgZG9lcyBub3RoaW5nIG90aGVyd2lzZSBnb2VzIGluIGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFdmVudC5iYWNrQnV0dG9uUHJlc3NlZCAmJiB0aGlzLmlzSW5Nb2RhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5Jc1BhZ2VEaXJ0eSgpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ByZXZlbnQgZGVmYXVsdCBjaGFuZ2UgYW5kIGFzayBmb3IgdW5zYXZlZCBjaGFuZ2VzIGluIGNhbGxiYWNrIGNoYW5nZSBwYWdlIGRpcnRhYmlsaXR5IGFuZCBuYXZpZ2F0ZSBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBGaXggdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaGVscGVycy5EaWFsb2coXCJSZXNvdXJjZXMuc1Vuc2F2ZWRDaGFuZ2VzXCIsIFwiUmVzb3VyY2VzLnNMZWF2ZUNoYW5nZXNcIiwgbnVsbCwgbnVsbCwgKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBzZWxmLlNldFBhZ2VEaXJ0eShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgc2VsZi5uYXZpZ2F0ZShjaGFuZ2VFdmVudC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iaW5kKFwiYmFja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImJhY2sgcm91dGUgZXZlbnRcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc0luTW9kYWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGNhc2Ugb2YgaGlzdG9yeS5iYWNrIGFuZCBpcyBpbiBtb2RhbCB0aGVuIG5hdmlnYXRlIHRvIHRoZSBtb2RhbEhpc3RvcnlVcmwgKGtlZXBzIHRoZSBiYWNrIHVybCBpbiBjYXNlIG9mIG1vZGFscylcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsSGlzdG9yeVVybCA9IHNlbGYuR2V0TW9kYWxIaXN0b3J5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0ZShtb2RhbEhpc3RvcnlVcmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZShcIjpjb250cm9sbGVyKC86YWN0aW9uKSgvOmlkKVwiLCBhc3luYyBmdW5jdGlvbiAoY29udHJvbGxlciwgYWN0aW9uLCBpZCkgeyBzZWxmLmdldEFuZFNob3dWaWV3T25QYWdlKGNvbnRyb2xsZXIsIGFjdGlvbiwgaWQpOyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdmlnYXRlKHJvdXRlOiBzdHJpbmcsIHNpbGVudD86IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgcm91dGUgPSB0aGlzLmVudHJ5UG9pbnQuYWRkU2Vzc2lvblRvVXJsKHJvdXRlKTtcclxuICAgICAgICAgICAgLy9pZiAoRW50cnlQb2ludC5DbnRybElzUHJlc3NlZCkge1xyXG4gICAgICAgICAgICAvLyAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgIEVudHJ5UG9pbnQuQ250cmxJc1ByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgIGxldCBteVdpbmRvdyA9IHdpbmRvdy5vcGVuKHJvdXRlLCBcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgIG15V2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIC8vICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzS2VuZG9Sb3V0ZXJOYXZpZ2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luTW9kYWwoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsSWQgPSB0aGlzLkdldEFjdGl2ZU1vZGFsSWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Jc1BhZ2VEaXJ0eSgpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2FzayBpZiB2aWV3IElzIERpcnR5IGJlZm9yZSBuYXZpZ2F0ZSB0byBhbm90aGVyIG1vZGFsIHdpbmRvdyB0aGlzIG1vZGFsIGNhc2UgaXMgbm90IGdvaW5nIHRob3J1Z2ggY2hhbmdlIGV2ZW50IG9mIFJvdXRlciBzbyB0aGlzIGlzIG5lZWRlIGFnYWluIGhlcmUgdG8gYXNrIGZvciB1bnNhdmVkIGNoYW5nZXMgaW4gbW9kYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVycy5EaWFsb2coXCJSZXNvdXJjZXMuc1Vuc2F2ZWRDaGFuZ2VzXCIsIFwiUmVzb3VyY2VzLnNMZWF2ZUNoYW5nZXNcIiwgbnVsbCwgbnVsbCwgKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5TZXRQYWdlRGlydHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNldE1vZGFsSGlzdG9yeSh0aGlzLkN1cnJlbnRNb2RhbFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5Mb2FkTW9kYWxQYXJ0aWFsKHJvdXRlLCBgIyR7bW9kYWxJZH0gI01vZGFsUGxhY2VIb2xkZXJgLCBgIyR7bW9kYWxJZH0gI01vZGFsUGxhY2VIb2xkZXIgLmgtbW9kYWwtY29udGVudGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldE1vZGFsSGlzdG9yeSh0aGlzLkN1cnJlbnRNb2RhbFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLkxvYWRNb2RhbFBhcnRpYWwocm91dGUsIGAjJHttb2RhbElkfSAjTW9kYWxQbGFjZUhvbGRlcmAsIGAjJHttb2RhbElkfSAjTW9kYWxQbGFjZUhvbGRlciAuaC1tb2RhbC1jb250ZW50YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlKHJvdXRlLCBzaWxlbnQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBVblJlZ2lzdGVyVmlldyhpc01vZGFsPzogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuVmlld3NTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKHZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZW1vdmVWaWV3RnJvbUlzRGlydHlMaXN0KHZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyVmlldyhwYXJ0aWFsVmlldzogQ2xpZW50U2NyaXB0cy5WaWV3cy5JVmlldywgaXNNb2RhbD86IGJvb2xlYW4pOiBDbGllbnRTY3JpcHRzLlZpZXdzLklWaWV3IHtcclxuICAgICAgICAgICAgaWYgKGlzTW9kYWwgIT0gbnVsbCAmJiBpc01vZGFsID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxWaWV3LklzTW9kYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaWV3c1N0YWNrLmFkZChwYXJ0aWFsVmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVmlldy5Jc01vZGFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5WaWV3c1N0YWNrLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5WaWV3c1N0YWNrLmFkZChwYXJ0aWFsVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlZpZXdzU3RhY2tbdGhpcy5WaWV3c1N0YWNrLmxlbmd0aCAtIDFdID0gcGFydGlhbFZpZXc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcnRpYWxWaWV3LkVudHJ5UG9pbnQgPSB0aGlzLmVudHJ5UG9pbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aWFsVmlldztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRBY3RpdmVWaWV3KCk6IENsaWVudFNjcmlwdHMuVmlld3MuSVZpZXcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5WaWV3c1N0YWNrW3RoaXMuVmlld3NTdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZW1vdmVWaWV3RnJvbUlzRGlydHlMaXN0KHZpZXc6IENsaWVudFNjcmlwdHMuVmlld3MuSVZpZXcpIHtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuX2lzVmlld0RpcnR5LmZpcnN0T3JEZWZhdWx0KGYgPT4gZi52aWV3ID09IHZpZXcpO1xyXG4gICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eS5yZW1vdmUodmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzUGFnZURpcnR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNWaWV3RGlydHkuZmlyc3RPckRlZmF1bHQoZiA9PiBmLnZpZXcgPT0gdGhpcy5HZXRBY3RpdmVWaWV3KCkpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1ZpZXdEaXJ0eS5maXJzdE9yRGVmYXVsdChmID0+IGYudmlldyA9PSB0aGlzLkdldEFjdGl2ZVZpZXcoKSkuaXNEaXJ0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0UGFnZURpcnR5KGlzRGlydHk6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKGlzRGlydHkpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vbihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiB7IHJldHVybiBcIlJlc291cmNlcy5zVW5zYXZlZENoYW5nZXNcIjsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKFwiYmVmb3JldW5sb2FkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vdGhpcy5lbnRyeVBvaW50LnZpZXdNb2RlbC5Jc0Zvcm1EaXJ0eSA9IGlzRGlydHk7IE1BWUJFIFVTRUxFU1NcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVmlld0RpcnR5LmZpcnN0T3JEZWZhdWx0KGYgPT4gZi52aWV3ID09IHRoaXMuR2V0QWN0aXZlVmlldygpKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eS5wdXNoKHsgdmlldzogdGhpcy5HZXRBY3RpdmVWaWV3KCksIGlzRGlydHk6IGlzRGlydHkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eS5maXJzdE9yRGVmYXVsdChmID0+IGYudmlldyA9PSB0aGlzLkdldEFjdGl2ZVZpZXcoKSkuaXNEaXJ0eSA9IGlzRGlydHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgQ3VycmVudE1vZGFsVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNb2RhbFVybCA9IHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ3VycmVudE1vZGFsVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TW9kYWxVcmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0TW9kYWxIaXN0b3J5KHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2RhbFVybEhpc3RvcnkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxVcmxIaXN0b3J5ID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxVcmxIaXN0b3J5LnB1c2godXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNb2RhbEhpc3RvcnkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFsVXJsSGlzdG9yeVt0aGlzLl9tb2RhbFVybEhpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0TW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbElEcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZW1vdmVNb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsSURzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEFjdGl2ZU1vZGFsSWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RhbElEc1t0aGlzLl9tb2RhbElEcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNJbk1vZGFsKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRBY3RpdmVWaWV3KCkgIT0gbnVsbCAmJiB0aGlzLkdldEFjdGl2ZVZpZXcoKS5Jc01vZGFsICE9IG51bGwgJiYgdGhpcy5HZXRBY3RpdmVWaWV3KCkuSXNNb2RhbCA9PSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhc3luYyBnZXRBbmRTaG93Vmlld09uUGFnZShjb250cm9sbGVyOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBpZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IFwiSW5kZXhcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pZiAoY29udHJvbGxlci50b0xvd2VyQ2FzZSgpICE9IFwibG9naW5cIiAmJiBzaWRlYmFyTWVudSkge1xyXG4gICAgICAgICAgICAvLyAgICBsZXQgbWVudUl0ZW0gPSAkKGBhW2RhdGEtY29udHJvbGxlcj0ke2NvbnRyb2xsZXIudG9Mb3dlckNhc2UoKX1dYCk7XHJcbiAgICAgICAgICAgIC8vICAgIHNpZGViYXJNZW51LnNldEFjdGl2ZUl0ZW0obWVudUl0ZW0pO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIGhlbHBlcnMuU2hvd0xvYWRlck92ZXJFbGVtZW50KCQoXCIubS13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVuUmVnaXN0ZXJWaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgLyR7Y29udHJvbGxlcn0vJHthY3Rpb259YDtcclxuICAgICAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGAke3VybH0vJHtpZH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZG93bmxvYWRlZFZpZXc6IGFueSA9IFwiPGgxPlZpZXcgbm90IEZvdW5kPC9oMT5cIjtcclxuICAgICAgICAgICAgZG93bmxvYWRlZFZpZXcgPSBhd2FpdCB0aGlzLmVudHJ5UG9pbnQuQWpheENhbGw8QWpheFJlc3VsdDxzdHJpbmc+Pih7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3ZpZXd0eXBlJzogJ3BhcnRpYWxzJyB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRvd25sb2FkZWRWaWV3LnN1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGhlbHBlcnMuSGlkZUxvYWRlck92ZXJFbGVtZW50KCQoXCIubS13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgICAgIGhlbHBlcnMuQWxlcnRFcnJvcihkb3dubG9hZGVkVmlldy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBuZXcga2VuZG8uVmlldyhkb3dubG9hZGVkVmlldyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNldFBhZ2VEaXJ0eShmYWxzZSk7XHJcbiAgICAgICAgICAgIGhlbHBlcnMuSGlkZUxvYWRlck92ZXJFbGVtZW50KCQoXCIubS13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgJChcIiNwYXJ0aWFsVmlld1dyYXBwZXJcIikudGV4dChcIlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5yZW5kZXIoXCIjcGFydGlhbFZpZXdXcmFwcGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLlZpZXdzIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElWaWV3IHtcclxuICAgICAgICBPbkluaXQoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgICAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbiAgICAgICAgRW50cnlQb2ludDogQ2xpZW50U2NyaXB0cy5Db21tb24uRW50cnlQb2ludDtcclxuICAgICAgICBJc01vZGFsOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIENsaWVudFNjcmlwdHMuVmlld01vZGVscyB7XHJcbiAgICBleHBvcnQgY2xhc3MgRW50cnlQb2ludFZNIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYnNlcnZhYmxlOiBrZW5kby5PYnNlcnZhYmxlKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2Vzc2lvbklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fb2JzZXJ2YWJsZSBhcyBhbnkpLmdldChcIlNlc3Npb25JZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHNldCBQcm9wZXJ0eU5hbWUodGhlVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAodGhpcy5fb2JzZXJ2YWJsZSBhcyBhbnkpLnNldChcIlNlc3Npb25JZFwiLCB0aGVWYWx1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmlld3MvSVZpZXcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVHlwaW5ncy9rZW5kby9pbmRleC5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmlld01vZGVscy9FbnRyeVBvaW50Vk0udHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIENsaWVudFNjcmlwdHMuQ29tbW9uIHtcclxuICAgIGltcG9ydCBoZWxwZXJzID0gQ2xpZW50U2NyaXB0cy5Db21tb247XHJcbiAgICBleHBvcnQgY2xhc3MgRW50cnlQb2ludCB7XHJcbiAgICAgICAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgX29ic2VydmFibGVPYmplY3Q6IGtlbmRvLk9ic2VydmFibGU7XHJcbiAgICAgICAgcHJpdmF0ZSBfbGFzdEh0dHBBY3Rpdml0eVRpbWVzdGFtcDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld01vZGVsOiBDbGllbnRTY3JpcHRzLlZpZXdNb2RlbHMuRW50cnlQb2ludFZNO1xyXG4gICAgICAgIHB1YmxpYyBSb3V0ZXI6IEN1c3RvbVJvdXRlcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld01vZGVsT2JqZWN0OiBvYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VudHJ5IFBvaW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbiA9IGhlbHBlcnMuR2V0VXJsUGFyYW1zKClbXCJzZXNzaW9uXCJdOyAvL2luaXRpYWxpc2Ugc2Vzc2lvbiBmcm9tIFVybFxyXG5cclxuICAgICAgICAgICAgdGhpcy5Sb3V0ZXIgPSBuZXcgQ3VzdG9tUm91dGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuUm91dGVyLmVudHJ5UG9pbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuX3ZpZXdNb2RlbE9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlT2JqZWN0ID0gKGtlbmRvLm9ic2VydmFibGUodGhpcy5fdmlld01vZGVsT2JqZWN0KSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld01vZGVsID0gbmV3IENsaWVudFNjcmlwdHMuVmlld01vZGVscy5FbnRyeVBvaW50Vk0odGhpcy5fb2JzZXJ2YWJsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHdlIGhhdmUgbm90IF92aWV3TW9kZWxPYmplY3QgdGhpcyBpcyB0aGUgQ2FzZSBFbnRyeVBvaW50IGlzIGluc3RhbnRpYXRlZCBpbiBsb2dpbiBJbmRleCBwYWdlIFxyXG4gICAgICAgICAgICAgICAgLy9zbyBpbiB0aGlzIGNhc2Ugd2Ugc2V0IGluIFNlc3Npb25TdG9yYWdlIGEgc2Vzc2lvbktleSBhIHVuaXF1ZSBJZGVudGlmaWVyIGZvciB0aGlzIGN1cnJlbnQgU2Vzc2lvbi5cclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uS2V5XCIsIGhlbHBlcnMuTmV3R3VpZCgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlJvdXRlci5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYXRoTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl92aWV3TW9kZWxPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlJvdXRlci5uYXZpZ2F0ZShcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5Sb3V0ZXIubmF2aWdhdGUocGF0aE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgTG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5BamF4Q2FsbDxBamF4UmVzdWx0PHsgc3VjY2VzczogYm9vbGVhbiB9Pj4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9Mb2dpbi9Mb2dvdXRcIixcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW4vaW5kZXhcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBMb2dpbigpIHtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJChcIi5tLWxvZ2luX19mb3JtXCIpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBwb3N0UHJvbWlzZTogQWpheFJlc3VsdCA9IGF3YWl0IHRoaXMuYWpheENhbGw8QWpheFJlc3VsdD4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgL0xvZ2luL0luZGV4YCxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnc2Vzc2lvbktleSc6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJzZXNzaW9uS2V5XCIpLCAnaXNOZXcnOiBcInRydWVcIiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFzeW5jIGFqYXhDYWxsPFRSZXN1bHQ+KGFqYXhPcHRpb25zOiBKUXVlcnlBamF4U2V0dGluZ3MpOiBQcm9taXNlPFRSZXN1bHQ+IHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICQuYWpheChhamF4T3B0aW9ucykuZG9uZSgoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29va2llID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJtaWRhc19jb29raWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb2tpZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Nlc3Npb24gPSBjb29raWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KS5mYWlsKCh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFkZFNlc3Npb25Ub1VybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBzZXNzaW9uID0gdGhpcy5fc2Vzc2lvbjtcclxuICAgICAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2hlcyA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzU2Vzc2lvbklkRGVmaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNoWzBdID09IFwic2Vzc2lvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNTZXNzaW9uSWREZWZpbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1Nlc3Npb25JZERlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsICsgXCImc2Vzc2lvbj1cIiArIHNlc3Npb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsICsgXCI/c2Vzc2lvbj1cIiArIHNlc3Npb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBBamF4Q2FsbDxUUmVzdWx0PihhamF4T3B0aW9uczogSlF1ZXJ5QWpheFNldHRpbmdzKTogUHJvbWlzZTxUUmVzdWx0PiB7XHJcbiAgICAgICAgICAgIGFqYXhPcHRpb25zLnVybCA9IHRoaXMuYWRkU2Vzc2lvblRvVXJsKGFqYXhPcHRpb25zLnVybCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFqYXhDYWxsUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFqYXhDYWxsPFRSZXN1bHQ+KGFqYXhPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RIdHRwQWN0aXZpdHlUaW1lc3RhbXAgPSBuZXcgRGF0ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhamF4Q2FsbFJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleGMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGMuZXJyb3JUaHJvd24gPT0gXCJVbmF1dGhvcml6ZWRcIiB8fCBleGMuZXJyb3JUaHJvd24gPT0gXCJGb3JiaWRkZW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBcIlJlc291cmNlcy5zU2Vzc2lvbkV4cGlyZWRNZXNzYWdlXCI7Ly8rIFwiLjxici8+IExhc3QgbmV0d29yayBhY3Rpb24gcmVwb3J0ZWQgYXQ6IFwiICsgdGhpcy5fbGFzdEh0dHBBY3Rpdml0eVRpbWVzdGFtcC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL21zZyA9IG1zZyArIFwiLjxici8+IFVzZXIgbG9nZ2VkIGluIGF0OiBcIiArIEVudHJ5UG9pbnQudmlld01vZGVsLkxvZ2luVGltZVN0YW1wLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWlDbGllbnRTY3JpcHRzLkxpYnMuSGVscGVycy5BbGVydChwb3dDbGllbnRTY3JpcHRzLlN5c3RlbS5wb3dBY3Rpb25Mb2dnZXJJdGVtS2luZC5XYXJuaW5nLCBSZXNvdXJjZXMuc1Nlc3Npb25FeHBpcmVkVGl0bGUsIG1zZywgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX0Nyb251c0xvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4Yyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9taUNsaWVudFNjcmlwdHMuTGlicy5IZWxwZXJzLkFsZXJ0KHBvd0NsaWVudFNjcmlwdHMuU3lzdGVtLnBvd0FjdGlvbkxvZ2dlckl0ZW1LaW5kLkV4Y2VwdGlvbiwgUmVzb3VyY2VzLnNVbmhhbmRsZWRFeGNlcHRpb25Jbkh0dHBDYWxsLCBleGMueGhyLnJlc3BvbnNlVGV4dCwgbnVsbCwgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4geyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIE5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAod2luZG93LmNyeXB0bykge1xyXG4gICAgICAgICAgICAvL2JldHRlciByYW5kb21pemVyXHJcbiAgICAgICAgICAgIHJldHVybiAoKDxhbnk+WzFlN10pICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cclxuICAgICAgICAgICAgICAgIChjIF4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNob3dMb2FkZXJPdmVyRWxlbWVudCh0YXJnZXRFbGVtZW50LCBiYWNrZ3JvdW5kQ29sb3I/LCBvcGFjaXR5Pykge1xyXG4gICAgICAgIHZhciBsb2FkZXJCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiYWNrZ3JvdW5kQ29sb3IgPT09IFwidW5kZWZpbmVkXCIgfHwgYmFja2dyb3VuZENvbG9yID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxvYWRlckJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvYWRlckJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsb2FkZXJCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3BhY2l0eSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvcGFjaXR5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxvYWRlckJhY2tncm91bmRUcmFuc3BhcmVuY3kgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvYWRlckJhY2tncm91bmRUcmFuc3BhcmVuY3kgPSBvcGFjaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJnYmFCYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoXCIgKyBwYXJzZUludChsb2FkZXJCYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoLTYsIC00KSwgMTYpXHJcbiAgICAgICAgICAgICsgXCIsXCIgKyBwYXJzZUludChsb2FkZXJCYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoLTQsIC0yKSwgMTYpXHJcbiAgICAgICAgICAgICsgXCIsXCIgKyBwYXJzZUludChsb2FkZXJCYWNrZ3JvdW5kQ29sb3Iuc2xpY2UoLTIpLCAxNilcclxuICAgICAgICAgICAgKyBcIixcIiArIGxvYWRlckJhY2tncm91bmRUcmFuc3BhcmVuY3kgKyBcIilcIjtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jc3MoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpO1xyXG4gICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaC1sb2FkZXItY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgKyByZ2JhQmFja2dyb3VuZENvbG9yICsgJ1wiPjxkaXYgY2xhc3M9XCJtLWxvYWRlciBtLWxvYWRlci0tYnJhbmRcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEhpZGVMb2FkZXJPdmVyRWxlbWVudCh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyICRsb2FkZXJXcmFwcGVyID0gdGFyZ2V0RWxlbWVudC5maW5kKFwiLmgtbG9hZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAkbG9hZGVyV3JhcHBlci5mYWRlT3V0KDIwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0VXJsUGFyYW1zKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XHJcbiAgICAgICAgdmFyIGhhc2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XHJcbiAgICAgICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWxlcnRFcnJvcihtZXNzYWdlczogQ2xpZW50U2NyaXB0cy5Db21tb24uQWN0aW9uTG9nZ2VySXRlbVtdKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2VzLmZpcnN0T3JEZWZhdWx0KCkuTWVzc2FnZSk7XHJcbiAgICAgICAgLy9BbGVydChDbGllbnRTY3JpcHRzLkNvbW1vbi5BY3Rpb25Mb2dnZXJJdGVtS2luZC5FeGNlcHRpb24sIFwiUmVzb3VyY2VzLnNFcnJvclwiLCBtZXNzYWdlcy5maXJzdE9yRGVmYXVsdCgpLk1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBEaWFsb2coZGlhbG9nVGl0bGU6IHN0cmluZywgZGlhbG9nTWVzc2FnZTogc3RyaW5nLCBidXR0b25ZZXM/OiBzdHJpbmcsIGJ1dHRvbk5vPzogc3RyaW5nLCBjYWxsQmFja09uWWVzPzogYW55LCBjYWxsQmFja09uTm8/OiBhbnkpIHtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgQ2xpZW50U2NyaXB0cy5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBamF4UmVzdWx0PFREYXRhID0ge30+IHtcclxuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xyXG4gICAgICAgIG1vZGVsOiBURGF0YTtcclxuICAgICAgICBtZXNzYWdlczogQWN0aW9uTG9nZ2VySXRlbVtdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTG9nZ2VySXRlbSB7XHJcbiAgICAgICAgS2luZDogQWN0aW9uTG9nZ2VySXRlbUtpbmQ7XHJcbiAgICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEFjdGlvbkxvZ2dlckl0ZW1LaW5kIHtcclxuICAgICAgICBJbmZvID0gMCxcclxuICAgICAgICBXYXJuaW5nID0gMSxcclxuICAgICAgICBFeGNlcHRpb24gPSAyXHJcbiAgICB9XHJcblxyXG59IiwibmFtZXNwYWNlIENsaWVudFNjcmlwdHMuVmlld01vZGVscyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQW5vdGhlclZNIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYnNlcnZhYmxlOiBrZW5kby5PYnNlcnZhYmxlKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX29ic2VydmFibGUgYXMgYW55KS5nZXQoXCJJbmZvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc2V0IEluZm8odGhlVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICAodGhpcy5fb2JzZXJ2YWJsZSBhcyBhbnkpLnNldChcIkluZm9cIiwgdGhlVmFsdWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZpZXdNb2RlbHMvQW5vdGhlclZNLnRzXCIgLz5cclxubmFtZXNwYWNlIENsaWVudFNjcmlwdHMuVmlld3Mge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFub3RoZXJWaWV3IGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgICAgIHByaXZhdGUgX3ZpZXdNb2RlbDogQ2xpZW50U2NyaXB0cy5WaWV3TW9kZWxzLkFub3RoZXJWTTtcclxuICAgICAgICBwcml2YXRlIF9vYnNlcnZhYmxlT2JqZWN0OiBrZW5kby5PYnNlcnZhYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdNb2RlbE9iamVjdDogb2JqZWN0LCBwcm90ZWN0ZWQgX2NvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIHByaXZhdGUgX3BhZ2VUaXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmFibGVPYmplY3QgPSAoa2VuZG8ub2JzZXJ2YWJsZSh0aGlzLl92aWV3TW9kZWxPYmplY3QpIGFzIGFueSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdNb2RlbCA9IG5ldyBDbGllbnRTY3JpcHRzLlZpZXdNb2RlbHMuQW5vdGhlclZNKHRoaXMuX29ic2VydmFibGVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFbnRyeVBvaW50OiBDb21tb24uRW50cnlQb2ludDtcclxuICAgICAgICBJc01vZGFsOiBib29sZWFuO1xyXG5cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLlZpZXdzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBWaWV3IHtcclxuXHJcbiAgICB9XHJcbn0iXX0=