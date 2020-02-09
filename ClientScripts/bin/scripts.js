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
/// <reference path="../Views/IView.ts" />
/// <reference path="../Typings/kendo/index.d.ts"/>
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
                        //this.Router.start();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbW1vbi9BcnJheUV4dGVuc2lvbnMudHMiLCIuLi9Db21tb24vQ3VzdG9tUm91dGVyLnRzIiwiLi4vVmlld3MvSVZpZXcudHMiLCIuLi9Db21tb24vRW50cnlQb2ludC50cyIsIi4uL0NvbW1vbi9IZWxwZXJzLnRzIiwiLi4vQ29tbW9uL0ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQWEsR0FBeUI7SUFDeEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sSUFBSSxHQUFHLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDbEUsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBYSxHQUF5QjtJQUN4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBO0FBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBYSxHQUF5QjtJQUN4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQUMsSUFB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QUMsQ0FBQyxDQUFDLENBQUM7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBVGUsbUJBQVksZUFTM0IsQ0FBQTtRQUVELFNBQWdCLFVBQVUsQ0FBQyxRQUFpRDtZQUN4RSxPQUFPO1lBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxvSEFBb0g7UUFDeEgsQ0FBQztRQUplLGlCQUFVLGFBSXpCLENBQUE7UUFFRCxTQUFnQixNQUFNLENBQUMsV0FBbUIsRUFBRSxhQUFxQixFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxhQUFtQixFQUFFLFlBQWtCO1FBQ2pKLENBQUM7UUFEZSxhQUFNLFNBQ3JCLENBQUE7SUFDTCxDQUFDLEVBcER1QixNQUFNLEdBQU4sb0JBQU0sS0FBTixvQkFBTSxRQW9EN0I7QUFBRCxDQUFDLEVBcERTLGFBQWEsS0FBYixhQUFhLFFBb0R0QjtBQ3BERCxJQUFVLGFBQWEsQ0FrQnRCO0FBbEJELFdBQVUsYUFBYTtJQUFDLElBQUEsTUFBTSxDQWtCN0I7SUFsQnVCLFdBQUEsTUFBTTtRQVkxQixJQUFZLG9CQUlYO1FBSkQsV0FBWSxvQkFBb0I7WUFDNUIsK0RBQVEsQ0FBQTtZQUNSLHFFQUFXLENBQUE7WUFDWCx5RUFBYSxDQUFBO1FBQ2pCLENBQUMsRUFKVyxvQkFBb0IsR0FBcEIsMkJBQW9CLEtBQXBCLDJCQUFvQixRQUkvQjtJQUVMLENBQUMsRUFsQnVCLE1BQU0sR0FBTixvQkFBTSxLQUFOLG9CQUFNLFFBa0I3QjtBQUFELENBQUMsRUFsQlMsYUFBYSxLQUFiLGFBQWEsUUFrQnRCIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEFycmF5PFQ+IHtcclxuICAgIHN1bTogKGV4cD86IChpdGVtOiBUKSA9PiBudW1iZXIpID0+IG51bWJlcjtcclxuICAgIG1heDogKGV4cD86IChpdGVtOiBUKSA9PiBudW1iZXIpID0+IG51bWJlcjtcclxuICAgIG1pbjogKGV4cD86IChpdGVtOiBUKSA9PiBudW1iZXIpID0+IG51bWJlcjtcclxuICAgIGFkZFJhbmdlOiAoYXJyOiBUW10pID0+IG51bWJlcjtcclxuICAgIHdoZXJlOiAoZXhwPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IFRbXTtcclxuICAgIGFsbDogKGV4cD86IChpdGVtOiBUKSA9PiBib29sZWFuKSA9PiBib29sZWFuO1xyXG4gICAgYW55OiAoZXhwPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IGJvb2xlYW47XHJcbiAgICBvcmRlckJ5OiA8Sz4gKGV4cD86IChpdGVtOiBUKSA9PiBLKSA9PiBUW107XHJcbiAgICBvcmRlckJ5RGVzY2VuZGluZzogPEs+IChleHA/OiAoaXRlbTogVCkgPT4gSykgPT4gVFtdO1xyXG4gICAgZmlyc3RPckRlZmF1bHQ6IChleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikgPT4gVDtcclxuICAgIGdyb3VwQnk6IDxLPiAoZXhwPzogKGl0ZW06IFQpID0+IEspID0+IENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPltdO1xyXG4gICAgcmVtb3ZlQXQ6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgcmVtb3ZlQWxsOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVtb3ZlUmFuZ2VXaGVyZTogKGV4cDogKGl0ZW06IFQpID0+IGJvb2xlYW4pID0+IG51bWJlcjtcclxuICAgIHJlbW92ZVJhbmdlOiAoYXJyOiBUW10pID0+IG51bWJlcjtcclxuICAgIHJlbW92ZTogKGl0ZW06IFQpID0+IHZvaWQ7XHJcbiAgICBvblJlbW92ZTogKGV4cD86IChpdGVtOiBULCBhcjogQXJyYXk8VD4pID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBhZGQ6IChpdGVtOiBUKSA9PiB2b2lkO1xyXG4gICAgb25BZGQ6IChleHA/OiAoaXRlbTogVCwgYXI6IEFycmF5PFQ+KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgY29udGFpbnM6IChpdGVtOiBUKSA9PiBib29sZWFuO1xyXG4gICAgLyoqSW50ZXJzZWN0cyB3aXRoIG90aGVyIGFycmF5OiBcclxuICAgICAqIFsxLDIsM10uaW50ZXJzZWN0KFsyLDMsNCw1XSkgPT0+IFsyLCAzXSAqL1xyXG4gICAgaW50ZXJzZWN0OiAob3RoZXJBcnJheTogVFtdKSA9PiBUW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGNlcHRzIHdpdGggb3RoZXIgYXJyYXk6XHJcbiAgICAgKiBbMSwyLDNdLmV4Y2VwdChbMiwzLDQsNV0pID09PiBbMV1cclxuICAgICAqIEBwYXJhbSBvdGhlckFycmF5XHJcbiAgICAgKi9cclxuICAgIGV4Y2VwdDogKG90aGVyQXJyYXk6IFRbXSkgPT4gVFtdO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24gPFQ+KGV4cD86IChpdGVtOiBUKSA9PiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgdGhpcy5tYXAoZXhwIHx8ICgoaXRlbSkgPT4gaXRlbSkpLmZvckVhY2goKHZhbCkgPT4gcmVzdWx0ICs9IHZhbCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gbnVtYmVyKSB7XHJcbiAgICBsZXQgYXJyID0gdGhpcy5tYXAoZXhwIHx8ICgoaXRlbSkgPT4gaXRlbSkpO1xyXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGFycik7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQpID0+IG51bWJlcikge1xyXG4gICAgbGV0IGFyciA9IHRoaXMubWFwKGV4cCB8fCAoKGl0ZW0pID0+IGl0ZW0pKTtcclxuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCBhcnIpO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuYWRkUmFuZ2UgPSBmdW5jdGlvbiA8VD4oYXJyOiBUW10pOiBudW1iZXIge1xyXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgalF1ZXJ5LmVhY2goYXJyLCAoaSwgZWwpID0+IHtcclxuICAgICAgICBsZW5ndGggPSBzZWxmLnB1c2goZWwpO1xyXG4gICAgICAgIGlmIChzZWxmLmFkZEV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuYWRkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFkZEV2ZW50c1tpXShlbCwgc2VsZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5yZW1vdmVSYW5nZSA9IGZ1bmN0aW9uIDxUPihhcnI6IFRbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBqUXVlcnkuZWFjaChhcnIsIChpLCBlbCkgPT4ge1xyXG4gICAgICAgIHNlbGYucmVtb3ZlKGVsKTtcclxuXHJcbiAgICB9KTtcclxuICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbn1cclxuQXJyYXkucHJvdG90eXBlLnJlbW92ZVJhbmdlV2hlcmUgPSBmdW5jdGlvbiA8VD4oZXhwOiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgYXJyID0gdGhpcy53aGVyZShleHApO1xyXG4gICAgalF1ZXJ5LmVhY2goYXJyLCAoaSwgZWwpID0+IHtcclxuICAgICAgICBzZWxmLnJlbW92ZShlbCk7XHJcbiAgICB9KTtcclxuICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbn1cclxuQXJyYXkucHJvdG90eXBlLndoZXJlID0gZnVuY3Rpb24gPFQ+KGV4cD86IChpdGVtOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBsZXQgYXJyID0galF1ZXJ5LmdyZXAodGhpcywgZXhwKTtcclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuQXJyYXkucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG5cclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG5cclxuICAgIGpRdWVyeS5lYWNoKHRoaXMsIChpLCBlbCkgPT4ge1xyXG4gICAgICAgIGlmICghZXhwKGVsKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG5cclxufVxyXG5BcnJheS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gPFQ+KGV4cD86IChpdGVtOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGV4cCkge1xyXG4gICAgICAgIGpRdWVyeS5lYWNoKHRoaXMsIChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXhwKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUub3JkZXJCeSA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYW55KSB7XHJcbiAgICBsZXQgc29ydEFyID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICBzb3J0QXIuYWRkUmFuZ2UodGhpcyk7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gc29ydEFyLnNvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzb3J0QXIuc29ydCgobjEsIG4yKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTEgPSBleHAobjEpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUyID0gZXhwKG4yKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUxKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+dmFsdWUxIC0gPG51bWJlcj52YWx1ZTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUxID4gdmFsdWUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZTEgPCB2YWx1ZTIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5vcmRlckJ5RGVzY2VuZGluZyA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYW55KSB7XHJcbiAgICBsZXQgc29ydEFyID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICBzb3J0QXIuYWRkUmFuZ2UodGhpcyk7XHJcbiAgICBpZiAoIWV4cCkge1xyXG4gICAgICAgIHJldHVybiBzb3J0QXIuc29ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRBci5zb3J0KChuMSwgbjIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlMSA9IGV4cChuMSk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTIgPSBleHAobjIpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWx1ZTEpID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj52YWx1ZTIgLSA8bnVtYmVyPnZhbHVlMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTIgPiB2YWx1ZTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlMiA8IHZhbHVlMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gPFQ+KGl0ZW06IFQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4T2YoaXRlbSkgPj0gMDtcclxufVxyXG5cclxuXHJcbkFycmF5LnByb3RvdHlwZS5maXJzdE9yRGVmYXVsdCA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgaWYgKGV4cCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBqUXVlcnkuZ3JlcCh0aGlzLCBleHApO1xyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID8gYXJyWzBdIDogbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA/IHRoaXNbMF0gOiBudWxsO1xyXG4gICAgfVxyXG59XHJcbkFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiA8VD4oaXRlbTogVCkge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZW1vdmVFdmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRzW2ldKGl0ZW0sIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkFycmF5LnByb3RvdHlwZS5yZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVtb3ZlRXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50c1tpXShpdGVtLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5BcnJheS5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiA8VD4oZXhwPzogKGl0ZW06IFQsIGFyOiBBcnJheTxUPikgPT4gdm9pZCkge1xyXG4gICAgaWYgKCF0aGlzLnJlbW92ZUV2ZW50cykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50cy5wdXNoKGV4cCk7XHJcbn07XHJcblxyXG5BcnJheS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gPFQ+KGl0ZW06IFQpIHtcclxuICAgIHRoaXMucHVzaChpdGVtKTtcclxuICAgIGlmICh0aGlzLmFkZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hZGRFdmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudHNbaV0oaXRlbSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkFycmF5LnByb3RvdHlwZS5vbkFkZCA9IGZ1bmN0aW9uIDxUPihleHA/OiAoaXRlbTogVCwgYXI6IEFycmF5PFQ+KSA9PiB2b2lkKSB7XHJcbiAgICBpZiAoIXRoaXMuYWRkRXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudHMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkRXZlbnRzLnB1c2goZXhwKTtcclxufTtcclxuQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbiA8VCwgSz4oZXhwPzogKGl0ZW06IFQpID0+IEspIHtcclxuICAgIGxldCByZXN1bHQ6IEFycmF5PENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPj4gPSA8QXJyYXk8Q2xpZW50U2NyaXB0cy5Db21tb24uQXJyYXlFeHRlbnNpb25zLkdyb3VwaW5nPFQsIEs+Pj5cclxuICAgICAgICAodGhpcy5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBleHAoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmICghKGdyb3VwcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBzID0gbmV3IEFycmF5PENsaWVudFNjcmlwdHMuQ29tbW9uLkFycmF5RXh0ZW5zaW9ucy5Hcm91cGluZzxULCBLPj4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSBncm91cHMuZmlyc3RPckRlZmF1bHQoeCA9PiB4LmtleSA9PT0ga2V5KTtcclxuICAgICAgICAgICAgaWYgKCFncm91cCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgQ2xpZW50U2NyaXB0cy5Db21tb24uQXJyYXlFeHRlbnNpb25zLkdyb3VwaW5nPFQsIEs+KGtleSk7XHJcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChncm91cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JvdXAucHVzaChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pKTtcclxuICAgIGlmICghKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXk8Q2xpZW50U2NyaXB0cy5Db21tb24uQXJyYXlFeHRlbnNpb25zLkdyb3VwaW5nPFQsIEs+PigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbkFycmF5LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiA8VD4ob3RoZXJBcnJheTogVFtdKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoKG4pID0+IHtcclxuICAgICAgICByZXR1cm4gb3RoZXJBcnJheS5pbmRleE9mKG4pICE9PSAtMVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5leGNlcHQgPSBmdW5jdGlvbiA8VD4ob3RoZXJBcnJheTogVFtdKTogVFtdIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBzZWxmLmZpbHRlcihmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmludGVyc2VjdChvdGhlckFycmF5KS5pbmRleE9mKG4pID09PSAtMVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5uYW1lc3BhY2UgQ2xpZW50U2NyaXB0cy5Db21tb24uQXJyYXlFeHRlbnNpb25zIHtcclxuICAgIGV4cG9ydCBjbGFzcyBHcm91cGluZzxULCBLPiBleHRlbmRzIEFycmF5PFQ+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihteUtleTogSykge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmtleSA9IG15S2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGtleTogSztcclxuXHJcbiAgICB9XHJcblxyXG59IiwibmFtZXNwYWNlIENsaWVudFNjcmlwdHMuQ29tbW9uIHtcclxuICAgIGltcG9ydCBoZWxwZXJzID0gQ2xpZW50U2NyaXB0cy5Db21tb247XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tUm91dGVyIGV4dGVuZHMga2VuZG8uUm91dGVyIHtcclxuICAgICAgICBwcml2YXRlIF92aWV3OiBrZW5kby5WaWV3O1xyXG4gICAgICAgIHByaXZhdGUgX2lzVmlld0RpcnR5OiBBcnJheTx7IHZpZXc6IENsaWVudFNjcmlwdHMuVmlld3MuSVZpZXcsIGlzRGlydHk6IGJvb2xlYW4gfT4gPSBbXTtcclxuICAgICAgICBwcml2YXRlIF9tb2RhbFVybEhpc3Rvcnk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICBwcml2YXRlIFZpZXdzU3RhY2s6IEFycmF5PENsaWVudFNjcmlwdHMuVmlld3MuSVZpZXc+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSBfaXNLZW5kb1JvdXRlck5hdmlnYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgX21vZGFsSURzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSBfY3VycmVudE1vZGFsVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBlbnRyeVBvaW50OiBFbnRyeVBvaW50O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzoga2VuZG8uUm91dGVyT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgICAgICBwdXNoU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByb290OiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHJvdXRlTWlzc2luZzogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pc3NpbmdlIHJvdXRlXCIsIGUudXJsLCBlLnBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmQoJ2NoYW5nZScsIChjaGFuZ2VFdmVudDoga2VuZG8uUm91dGVyQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2Ugcm91dGUgZXZlbnRcIiwgY2hhbmdlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX2lzS2VuZG9Sb3V0ZXJOYXZpZ2F0ZWQgPT0gZmFsc2UgJiYgY2hhbmdlRXZlbnQuYmFja0J1dHRvblByZXNzZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHRoaXMgaW4gY2FzZSBvZiBwYWdlIGZ1bGwgcmVsb2FkIChzbyBuYXZpZ2F0aW9uIHdhcyBub3QgdHJpZ2dlcmVkIGJ5IHJvdXRlciAodXNlciB0cmlnZ2VyZWQpKSBlLmcuIHdoZW4geW91IGRvIHdpbmRvdy5sb2NhdGlvbignLycpIG9yIGVudGVyIGEgc3BlY2lmaWMgdXJsIGluIGJyb3dzZXIgYW5kIHByZXNzIGVudGVyIG9yIHBhZ2UgcnJlZnJlc2ggdmlhIEY1XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gdGhpcyBkb2VzIG5vdGhpbmcgb3RoZXJ3aXNlIGdvZXMgaW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV2ZW50LmJhY2tCdXR0b25QcmVzc2VkICYmIHRoaXMuaXNJbk1vZGFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLklzUGFnZURpcnR5KCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldmVudCBkZWZhdWx0IGNoYW5nZSBhbmQgYXNrIGZvciB1bnNhdmVkIGNoYW5nZXMgaW4gY2FsbGJhY2sgY2hhbmdlIHBhZ2UgZGlydGFiaWxpdHkgYW5kIG5hdmlnYXRlIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IEZpeCB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oZWxwZXJzLkRpYWxvZyhcIlJlc291cmNlcy5zVW5zYXZlZENoYW5nZXNcIiwgXCJSZXNvdXJjZXMuc0xlYXZlQ2hhbmdlc1wiLCBudWxsLCBudWxsLCAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHNlbGYuU2V0UGFnZURpcnR5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBzZWxmLm5hdmlnYXRlKGNoYW5nZUV2ZW50LnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmQoXCJiYWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmFjayByb3V0ZSBldmVudFwiLCBlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzSW5Nb2RhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gY2FzZSBvZiBoaXN0b3J5LmJhY2sgYW5kIGlzIGluIG1vZGFsIHRoZW4gbmF2aWdhdGUgdG8gdGhlIG1vZGFsSGlzdG9yeVVybCAoa2VlcHMgdGhlIGJhY2sgdXJsIGluIGNhc2Ugb2YgbW9kYWxzKVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxIaXN0b3J5VXJsID0gc2VsZi5HZXRNb2RhbEhpc3RvcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlKG1vZGFsSGlzdG9yeVVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlKFwiOmNvbnRyb2xsZXIoLzphY3Rpb24pKC86aWQpXCIsIGFzeW5jIGZ1bmN0aW9uIChjb250cm9sbGVyLCBhY3Rpb24sIGlkKSB7IHNlbGYuZ2V0QW5kU2hvd1ZpZXdPblBhZ2UoY29udHJvbGxlciwgYWN0aW9uLCBpZCk7IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2aWdhdGUocm91dGU6IHN0cmluZywgc2lsZW50PzogYm9vbGVhbikge1xyXG4gICAgICAgICAgICByb3V0ZSA9IHRoaXMuZW50cnlQb2ludC5hZGRTZXNzaW9uVG9Vcmwocm91dGUpO1xyXG4gICAgICAgICAgICAvL2lmIChFbnRyeVBvaW50LkNudHJsSXNQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIC8vICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgRW50cnlQb2ludC5DbnRybElzUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgbGV0IG15V2luZG93ID0gd2luZG93Lm9wZW4ocm91dGUsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgbXlXaW5kb3cuZm9jdXMoKTtcclxuICAgICAgICAgICAgLy8gICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgLy8gICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5faXNLZW5kb1JvdXRlck5hdmlnYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5Nb2RhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxJZCA9IHRoaXMuR2V0QWN0aXZlTW9kYWxJZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklzUGFnZURpcnR5KCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGlmIHZpZXcgSXMgRGlydHkgYmVmb3JlIG5hdmlnYXRlIHRvIGFub3RoZXIgbW9kYWwgd2luZG93IHRoaXMgbW9kYWwgY2FzZSBpcyBub3QgZ29pbmcgdGhvcnVnaCBjaGFuZ2UgZXZlbnQgb2YgUm91dGVyIHNvIHRoaXMgaXMgbmVlZGUgYWdhaW4gaGVyZSB0byBhc2sgZm9yIHVuc2F2ZWQgY2hhbmdlcyBpbiBtb2RhbHNcclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJzLkRpYWxvZyhcIlJlc291cmNlcy5zVW5zYXZlZENoYW5nZXNcIiwgXCJSZXNvdXJjZXMuc0xlYXZlQ2hhbmdlc1wiLCBudWxsLCBudWxsLCAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlNldFBhZ2VEaXJ0eShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0TW9kYWxIaXN0b3J5KHRoaXMuQ3VycmVudE1vZGFsVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLkxvYWRNb2RhbFBhcnRpYWwocm91dGUsIGAjJHttb2RhbElkfSAjTW9kYWxQbGFjZUhvbGRlcmAsIGAjJHttb2RhbElkfSAjTW9kYWxQbGFjZUhvbGRlciAuaC1tb2RhbC1jb250ZW50YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0TW9kYWxIaXN0b3J5KHRoaXMuQ3VycmVudE1vZGFsVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuTG9hZE1vZGFsUGFydGlhbChyb3V0ZSwgYCMke21vZGFsSWR9ICNNb2RhbFBsYWNlSG9sZGVyYCwgYCMke21vZGFsSWR9ICNNb2RhbFBsYWNlSG9sZGVyIC5oLW1vZGFsLWNvbnRlbnRgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGUocm91dGUsIHNpbGVudCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFVuUmVnaXN0ZXJWaWV3KGlzTW9kYWw/OiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5WaWV3c1N0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAodmlldyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZVZpZXdGcm9tSXNEaXJ0eUxpc3Qodmlldyk7XHJcbiAgICAgICAgICAgICAgICB2aWV3LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJWaWV3KHBhcnRpYWxWaWV3OiBDbGllbnRTY3JpcHRzLlZpZXdzLklWaWV3LCBpc01vZGFsPzogYm9vbGVhbik6IENsaWVudFNjcmlwdHMuVmlld3MuSVZpZXcge1xyXG4gICAgICAgICAgICBpZiAoaXNNb2RhbCAhPSBudWxsICYmIGlzTW9kYWwgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpZXcuSXNNb2RhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXdzU3RhY2suYWRkKHBhcnRpYWxWaWV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxWaWV3LklzTW9kYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlZpZXdzU3RhY2subGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlZpZXdzU3RhY2suYWRkKHBhcnRpYWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVmlld3NTdGFja1t0aGlzLlZpZXdzU3RhY2subGVuZ3RoIC0gMV0gPSBwYXJ0aWFsVmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFydGlhbFZpZXcuRW50cnlQb2ludCA9IHRoaXMuZW50cnlQb2ludDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRpYWxWaWV3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEFjdGl2ZVZpZXcoKTogQ2xpZW50U2NyaXB0cy5WaWV3cy5JVmlldyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlZpZXdzU3RhY2tbdGhpcy5WaWV3c1N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlbW92ZVZpZXdGcm9tSXNEaXJ0eUxpc3QodmlldzogQ2xpZW50U2NyaXB0cy5WaWV3cy5JVmlldykge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5faXNWaWV3RGlydHkuZmlyc3RPckRlZmF1bHQoZiA9PiBmLnZpZXcgPT0gdmlldyk7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVmlld0RpcnR5LnJlbW92ZSh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSXNQYWdlRGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1ZpZXdEaXJ0eS5maXJzdE9yRGVmYXVsdChmID0+IGYudmlldyA9PSB0aGlzLkdldEFjdGl2ZVZpZXcoKSkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlld0RpcnR5LmZpcnN0T3JEZWZhdWx0KGYgPT4gZi52aWV3ID09IHRoaXMuR2V0QWN0aXZlVmlldygpKS5pc0RpcnR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXRQYWdlRGlydHkoaXNEaXJ0eTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHsgcmV0dXJuIFwiUmVzb3VyY2VzLnNVbnNhdmVkQ2hhbmdlc1wiOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJiZWZvcmV1bmxvYWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmVudHJ5UG9pbnQudmlld01vZGVsLklzRm9ybURpcnR5ID0gaXNEaXJ0eTsgTUFZQkUgVVNFTEVTU1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNWaWV3RGlydHkuZmlyc3RPckRlZmF1bHQoZiA9PiBmLnZpZXcgPT0gdGhpcy5HZXRBY3RpdmVWaWV3KCkpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVmlld0RpcnR5LnB1c2goeyB2aWV3OiB0aGlzLkdldEFjdGl2ZVZpZXcoKSwgaXNEaXJ0eTogaXNEaXJ0eSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVmlld0RpcnR5LmZpcnN0T3JEZWZhdWx0KGYgPT4gZi52aWV3ID09IHRoaXMuR2V0QWN0aXZlVmlldygpKS5pc0RpcnR5ID0gaXNEaXJ0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBDdXJyZW50TW9kYWxVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudE1vZGFsVXJsID0gdXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDdXJyZW50TW9kYWxVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRNb2RhbFVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXRNb2RhbEhpc3RvcnkodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZGFsVXJsSGlzdG9yeSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFVybEhpc3RvcnkgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFVybEhpc3RvcnkucHVzaCh1cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1vZGFsSGlzdG9yeSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kYWxVcmxIaXN0b3J5W3RoaXMuX21vZGFsVXJsSGlzdG9yeS5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXRNb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsSURzLnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlbW92ZU1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxJRHMucG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0QWN0aXZlTW9kYWxJZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFsSURzW3RoaXMuX21vZGFsSURzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc0luTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldEFjdGl2ZVZpZXcoKSAhPSBudWxsICYmIHRoaXMuR2V0QWN0aXZlVmlldygpLklzTW9kYWwgIT0gbnVsbCAmJiB0aGlzLkdldEFjdGl2ZVZpZXcoKS5Jc01vZGFsID09IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNob3dWaWV3T25QYWdlKGNvbnRyb2xsZXI6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGlkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJJbmRleFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2lmIChjb250cm9sbGVyLnRvTG93ZXJDYXNlKCkgIT0gXCJsb2dpblwiICYmIHNpZGViYXJNZW51KSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBtZW51SXRlbSA9ICQoYGFbZGF0YS1jb250cm9sbGVyPSR7Y29udHJvbGxlci50b0xvd2VyQ2FzZSgpfV1gKTtcclxuICAgICAgICAgICAgLy8gICAgc2lkZWJhck1lbnUuc2V0QWN0aXZlSXRlbShtZW51SXRlbSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgaGVscGVycy5TaG93TG9hZGVyT3ZlckVsZW1lbnQoJChcIi5tLXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92aWV3LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVW5SZWdpc3RlclZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IGAvJHtjb250cm9sbGVyfS8ke2FjdGlvbn1gO1xyXG4gICAgICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gYCR7dXJsfS8ke2lkfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBkb3dubG9hZGVkVmlldzogYW55ID0gXCI8aDE+VmlldyBub3QgRm91bmQ8L2gxPlwiO1xyXG4gICAgICAgICAgICBkb3dubG9hZGVkVmlldyA9IGF3YWl0IHRoaXMuZW50cnlQb2ludC5BamF4Q2FsbDxBamF4UmVzdWx0PHN0cmluZz4+KHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAndmlld3R5cGUnOiAncGFydGlhbHMnIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZG93bmxvYWRlZFZpZXcuc3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaGVscGVycy5IaWRlTG9hZGVyT3ZlckVsZW1lbnQoJChcIi5tLXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgaGVscGVycy5BbGVydEVycm9yKGRvd25sb2FkZWRWaWV3Lm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IG5ldyBrZW5kby5WaWV3KGRvd25sb2FkZWRWaWV3KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU2V0UGFnZURpcnR5KGZhbHNlKTtcclxuICAgICAgICAgICAgaGVscGVycy5IaWRlTG9hZGVyT3ZlckVsZW1lbnQoJChcIi5tLXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAkKFwiI3BhcnRpYWxWaWV3V3JhcHBlclwiKS50ZXh0KFwiXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LnJlbmRlcihcIiNwYXJ0aWFsVmlld1dyYXBwZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIENsaWVudFNjcmlwdHMuVmlld3Mge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZpZXcge1xyXG4gICAgICAgIE9uSW5pdCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgICAgIGRlc3Ryb3koKTogdm9pZDtcclxuICAgICAgICBFbnRyeVBvaW50OiBDbGllbnRTY3JpcHRzLkNvbW1vbi5FbnRyeVBvaW50O1xyXG4gICAgICAgIElzTW9kYWw6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmlld3MvSVZpZXcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVHlwaW5ncy9rZW5kby9pbmRleC5kLnRzXCIvPlxyXG5cclxubmFtZXNwYWNlIENsaWVudFNjcmlwdHMuQ29tbW9uIHtcclxuICAgIGltcG9ydCBoZWxwZXJzID0gQ2xpZW50U2NyaXB0cy5Db21tb247XHJcbiAgICBleHBvcnQgY2xhc3MgRW50cnlQb2ludCB7XHJcbiAgICAgICAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgX2xhc3RIdHRwQWN0aXZpdHlUaW1lc3RhbXA6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHB1YmxpYyBSb3V0ZXI6IEN1c3RvbVJvdXRlcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld01vZGVsT2JqZWN0OiBvYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VudHJ5IFBvaW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbiA9IGhlbHBlcnMuR2V0VXJsUGFyYW1zKClbXCJzZXNzaW9uXCJdOyAvL2luaXRpYWxpc2Ugc2Vzc2lvbiBmcm9tIFVybFxyXG5cclxuICAgICAgICAgICAgdGhpcy5Sb3V0ZXIgPSBuZXcgQ3VzdG9tUm91dGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuUm91dGVyLmVudHJ5UG9pbnQgPSB0aGlzO1xyXG4gICAgICAgICAgICAvL3RoaXMuUm91dGVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuUm91dGVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhdGhOYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX3ZpZXdNb2RlbE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuUm91dGVyLm5hdmlnYXRlKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlJvdXRlci5uYXZpZ2F0ZShwYXRoTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBMb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLkFqYXhDYWxsPEFqYXhSZXN1bHQ8eyBzdWNjZXNzOiBib29sZWFuIH0+Pih7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL0xvZ2luL0xvZ291dFwiLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpbi9pbmRleFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIExvZ2luKCkge1xyXG4gICAgICAgICAgICB2YXIgJGZvcm0gPSAkKFwiLm0tbG9naW5fX2Zvcm1cIik7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHBvc3RQcm9taXNlOiBBamF4UmVzdWx0ID0gYXdhaXQgdGhpcy5hamF4Q2FsbDxBamF4UmVzdWx0Pih7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAvTG9naW4vSW5kZXhgLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdzZXNzaW9uS2V5Jzogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNlc3Npb25LZXlcIiksICdpc05ldyc6IFwidHJ1ZVwiIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYXN5bmMgYWpheENhbGw8VFJlc3VsdD4oYWpheE9wdGlvbnM6IEpRdWVyeUFqYXhTZXR0aW5ncyk6IFByb21pc2U8VFJlc3VsdD4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2U8VFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KGFqYXhPcHRpb25zKS5kb25lKChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29raWUgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIm1pZGFzX2Nvb2tpZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29va2llICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2Vzc2lvbiA9IGNvb2tpZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pLmZhaWwoKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkU2Vzc2lvblRvVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IHNlc3Npb24gPSB0aGlzLl9zZXNzaW9uO1xyXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaGVzID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNTZXNzaW9uSWREZWZpbmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hbMF0gPT0gXCJzZXNzaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Nlc3Npb25JZERlZmluZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzU2Vzc2lvbklkRGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyBcIiZzZXNzaW9uPVwiICsgc2Vzc2lvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyBcIj9zZXNzaW9uPVwiICsgc2Vzc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIEFqYXhDYWxsPFRSZXN1bHQ+KGFqYXhPcHRpb25zOiBKUXVlcnlBamF4U2V0dGluZ3MpOiBQcm9taXNlPFRSZXN1bHQ+IHtcclxuICAgICAgICAgICAgYWpheE9wdGlvbnMudXJsID0gdGhpcy5hZGRTZXNzaW9uVG9VcmwoYWpheE9wdGlvbnMudXJsKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWpheENhbGxSZXNwb25zZSA9IGF3YWl0IHRoaXMuYWpheENhbGw8VFJlc3VsdD4oYWpheE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdEh0dHBBY3Rpdml0eVRpbWVzdGFtcCA9IG5ldyBEYXRlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFqYXhDYWxsUmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4Yykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4Yy5lcnJvclRocm93biA9PSBcIlVuYXV0aG9yaXplZFwiIHx8IGV4Yy5lcnJvclRocm93biA9PSBcIkZvcmJpZGRlblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiUmVzb3VyY2VzLnNTZXNzaW9uRXhwaXJlZE1lc3NhZ2VcIjsvLysgXCIuPGJyLz4gTGFzdCBuZXR3b3JrIGFjdGlvbiByZXBvcnRlZCBhdDogXCIgKyB0aGlzLl9sYXN0SHR0cEFjdGl2aXR5VGltZXN0YW1wLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbXNnID0gbXNnICsgXCIuPGJyLz4gVXNlciBsb2dnZWQgaW4gYXQ6IFwiICsgRW50cnlQb2ludC52aWV3TW9kZWwuTG9naW5UaW1lU3RhbXAudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9taUNsaWVudFNjcmlwdHMuTGlicy5IZWxwZXJzLkFsZXJ0KHBvd0NsaWVudFNjcmlwdHMuU3lzdGVtLnBvd0FjdGlvbkxvZ2dlckl0ZW1LaW5kLldhcm5pbmcsIFJlc291cmNlcy5zU2Vzc2lvbkV4cGlyZWRUaXRsZSwgbXNnLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5fQ3JvbnVzTG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4geyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXhjKTtcclxuICAgICAgICAgICAgICAgICAgICAvL21pQ2xpZW50U2NyaXB0cy5MaWJzLkhlbHBlcnMuQWxlcnQocG93Q2xpZW50U2NyaXB0cy5TeXN0ZW0ucG93QWN0aW9uTG9nZ2VySXRlbUtpbmQuRXhjZXB0aW9uLCBSZXNvdXJjZXMuc1VuaGFuZGxlZEV4Y2VwdGlvbkluSHR0cENhbGwsIGV4Yy54aHIucmVzcG9uc2VUZXh0LCBudWxsLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIENsaWVudFNjcmlwdHMuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2hvd0xvYWRlck92ZXJFbGVtZW50KHRhcmdldEVsZW1lbnQsIGJhY2tncm91bmRDb2xvcj8sIG9wYWNpdHk/KSB7XHJcbiAgICAgICAgdmFyIGxvYWRlckJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBpZiAodHlwZW9mIGJhY2tncm91bmRDb2xvciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBiYWNrZ3JvdW5kQ29sb3IgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9hZGVyQmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9hZGVyQmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxvYWRlckJhY2tncm91bmRUcmFuc3BhcmVuY3k7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcGFjaXR5ID09PSBcInVuZGVmaW5lZFwiIHx8IG9wYWNpdHkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9hZGVyQmFja2dyb3VuZFRyYW5zcGFyZW5jeSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9hZGVyQmFja2dyb3VuZFRyYW5zcGFyZW5jeSA9IG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmdiYUJhY2tncm91bmRDb2xvciA9IFwicmdiYShcIiArIHBhcnNlSW50KGxvYWRlckJhY2tncm91bmRDb2xvci5zbGljZSgtNiwgLTQpLCAxNilcclxuICAgICAgICAgICAgKyBcIixcIiArIHBhcnNlSW50KGxvYWRlckJhY2tncm91bmRDb2xvci5zbGljZSgtNCwgLTIpLCAxNilcclxuICAgICAgICAgICAgKyBcIixcIiArIHBhcnNlSW50KGxvYWRlckJhY2tncm91bmRDb2xvci5zbGljZSgtMiksIDE2KVxyXG4gICAgICAgICAgICArIFwiLFwiICsgbG9hZGVyQmFja2dyb3VuZFRyYW5zcGFyZW5jeSArIFwiKVwiO1xyXG5cclxuICAgICAgICB0YXJnZXRFbGVtZW50LmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJoLWxvYWRlci1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JyArIHJnYmFCYWNrZ3JvdW5kQ29sb3IgKyAnXCI+PGRpdiBjbGFzcz1cIm0tbG9hZGVyIG0tbG9hZGVyLS1icmFuZFwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSGlkZUxvYWRlck92ZXJFbGVtZW50KHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgJGxvYWRlcldyYXBwZXIgPSB0YXJnZXRFbGVtZW50LmZpbmQoXCIuaC1sb2FkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgICRsb2FkZXJXcmFwcGVyLmZhZGVPdXQoMjAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRVcmxQYXJhbXMoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSBbXSwgaGFzaDtcclxuICAgICAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcclxuICAgICAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBbGVydEVycm9yKG1lc3NhZ2VzOiBDbGllbnRTY3JpcHRzLkNvbW1vbi5BY3Rpb25Mb2dnZXJJdGVtW10pIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgYWxlcnQobWVzc2FnZXMuZmlyc3RPckRlZmF1bHQoKS5NZXNzYWdlKTtcclxuICAgICAgICAvL0FsZXJ0KENsaWVudFNjcmlwdHMuQ29tbW9uLkFjdGlvbkxvZ2dlckl0ZW1LaW5kLkV4Y2VwdGlvbiwgXCJSZXNvdXJjZXMuc0Vycm9yXCIsIG1lc3NhZ2VzLmZpcnN0T3JEZWZhdWx0KCkuTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIERpYWxvZyhkaWFsb2dUaXRsZTogc3RyaW5nLCBkaWFsb2dNZXNzYWdlOiBzdHJpbmcsIGJ1dHRvblllcz86IHN0cmluZywgYnV0dG9uTm8/OiBzdHJpbmcsIGNhbGxCYWNrT25ZZXM/OiBhbnksIGNhbGxCYWNrT25Obz86IGFueSkge1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFqYXhSZXN1bHQ8VERhdGEgPSB7fT4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgICAgICAgbW9kZWw6IFREYXRhO1xyXG4gICAgICAgIG1lc3NhZ2VzOiBBY3Rpb25Mb2dnZXJJdGVtW107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Mb2dnZXJJdGVtIHtcclxuICAgICAgICBLaW5kOiBBY3Rpb25Mb2dnZXJJdGVtS2luZDtcclxuICAgICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gQWN0aW9uTG9nZ2VySXRlbUtpbmQge1xyXG4gICAgICAgIEluZm8gPSAwLFxyXG4gICAgICAgIFdhcm5pbmcgPSAxLFxyXG4gICAgICAgIEV4Y2VwdGlvbiA9IDJcclxuICAgIH1cclxuXHJcbn0iXX0=