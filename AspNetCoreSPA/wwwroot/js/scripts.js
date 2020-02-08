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
var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var EntryPoint = /** @class */ (function () {
            function EntryPoint(_viewModelObject) {
                this._viewModelObject = _viewModelObject;
                this._lastHttpActivityTimestamp = new Date();
                console.log('Entry Point');
            }
            EntryPoint.prototype.OnInit = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        $(function () {
                        });
                        return [2 /*return*/];
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
        var ActionLoggerItemKind;
        (function (ActionLoggerItemKind) {
            ActionLoggerItemKind[ActionLoggerItemKind["Info"] = 0] = "Info";
            ActionLoggerItemKind[ActionLoggerItemKind["Warning"] = 1] = "Warning";
            ActionLoggerItemKind[ActionLoggerItemKind["Exception"] = 2] = "Exception";
        })(ActionLoggerItemKind = Common.ActionLoggerItemKind || (Common.ActionLoggerItemKind = {}));
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbW1vbi9FbnRyeVBvaW50LnRzIiwiLi4vQ29tbW9uL0ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFVLGFBQWEsQ0FxR3RCO0FBckdELFdBQVUsYUFBYTtJQUFDLElBQUEsTUFBTSxDQXFHN0I7SUFyR3VCLFdBQUEsTUFBTTtRQUMxQjtZQUlJLG9CQUFvQixnQkFBd0I7Z0JBQXhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtnQkFGcEMsK0JBQTBCLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFHbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBQ1ksMkJBQU0sR0FBbkI7Ozt3QkFDSSxDQUFDLENBQUM7d0JBQ0YsQ0FBQyxDQUFDLENBQUM7Ozs7YUFDTjtZQUdZLDBCQUFLLEdBQWxCOzs7Ozs7Z0NBQ1EsS0FBSyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDO2dDQUNjLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQWE7d0NBQzFELEdBQUcsRUFBRSxjQUFjO3dDQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRTt3Q0FDdkIsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTt3Q0FDaEYsSUFBSSxFQUFFLE1BQU07d0NBQ1osT0FBTyxFQUFFLFVBQVUsUUFBUTs0Q0FDdkIsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO2dEQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQzs2Q0FDbEM7aURBQ0k7Z0RBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOzZDQUV0Qzt3Q0FDTCxDQUFDO3FDQUNKLENBQUMsRUFBQTs7Z0NBZEUsV0FBVyxHQUFlLFNBYzVCOzs7OzthQUNMO1lBRWEsNkJBQVEsR0FBdEIsVUFBZ0MsV0FBK0I7Ozs7d0JBQ3ZELElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ1osT0FBTyxHQUFHLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLO2dDQUM3QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7Z0NBQ3JELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtvQ0FDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7aUNBQzFCO2dDQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXO2dDQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dDQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUN6QixNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUM7NEJBQzdDLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNILHNCQUFPLE9BQU8sRUFBQzs7O2FBQ2xCO1lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsR0FBVztnQkFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUN2QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLG1CQUFtQixHQUFZLEtBQUssQ0FBQzt3QkFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3BDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2hDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQ0FDdEIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDOzZCQUM5Qjt5QkFDSjt3QkFDRCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7NEJBQ3RCLEdBQUcsR0FBRyxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQzt5QkFDckM7cUJBQ0o7eUJBQ0k7d0JBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDO3FCQUNyQztpQkFDSjtnQkFDRCxPQUFPLEdBQUcsQ0FBQztZQUNmLENBQUM7WUFFWSw2QkFBUSxHQUFyQixVQUErQixXQUErQjs7Ozs7O2dDQUMxRCxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O2dDQUc3QixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFVLFdBQVcsQ0FBQyxFQUFBOztnQ0FBNUQsZ0JBQWdCLEdBQUcsU0FBeUM7Z0NBQ2hFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLElBQUksQ0FBQztnQ0FDM0Msc0JBQU8sZ0JBQWdCLEVBQUM7OztnQ0FHeEIsSUFBSSxLQUFHLENBQUMsV0FBVyxJQUFJLGNBQWMsSUFBSSxLQUFHLENBQUMsV0FBVyxJQUFJLFdBQVcsRUFBRTtvQ0FDakUsR0FBRyxHQUFHLGtDQUFrQyxDQUFDO29DQUM3QyxzR0FBc0c7b0NBQ3RHLGdKQUFnSjtvQ0FDNUksdUJBQXVCO29DQUMzQixLQUFLO29DQUNMLHNCQUFPLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBTyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUM7aUNBQ25GO3FDQUNJO29DQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxDQUFDLENBQUM7b0NBQ2pCLGdMQUFnTDtvQ0FDaEwsc0JBQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFPLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsRUFBQztpQ0FDbkY7Ozs7OzthQUVSO1lBRUwsaUJBQUM7UUFBRCxDQUFDLEFBbkdELElBbUdDO1FBbkdZLGlCQUFVLGFBbUd0QixDQUFBO0lBQ0wsQ0FBQyxFQXJHdUIsTUFBTSxHQUFOLG9CQUFNLEtBQU4sb0JBQU0sUUFxRzdCO0FBQUQsQ0FBQyxFQXJHUyxhQUFhLEtBQWIsYUFBYSxRQXFHdEI7QUNyR0QsSUFBVSxhQUFhLENBa0J0QjtBQWxCRCxXQUFVLGFBQWE7SUFBQyxJQUFBLE1BQU0sQ0FrQjdCO0lBbEJ1QixXQUFBLE1BQU07UUFZMUIsSUFBWSxvQkFJWDtRQUpELFdBQVksb0JBQW9CO1lBQzVCLCtEQUFRLENBQUE7WUFDUixxRUFBVyxDQUFBO1lBQ1gseUVBQWEsQ0FBQTtRQUNqQixDQUFDLEVBSlcsb0JBQW9CLEdBQXBCLDJCQUFvQixLQUFwQiwyQkFBb0IsUUFJL0I7SUFFTCxDQUFDLEVBbEJ1QixNQUFNLEdBQU4sb0JBQU0sS0FBTixvQkFBTSxRQWtCN0I7QUFBRCxDQUFDLEVBbEJTLGFBQWEsS0FBYixhQUFhLFFBa0J0QiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBDbGllbnRTY3JpcHRzLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgRW50cnlQb2ludCB7XHJcbiAgICAgICAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgX2xhc3RIdHRwQWN0aXZpdHlUaW1lc3RhbXA6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3TW9kZWxPYmplY3Q6IG9iamVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRW50cnkgUG9pbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGFzeW5jIE9uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgTG9naW4oKSB7XHJcbiAgICAgICAgICAgIHZhciAkZm9ybSA9ICQoXCIubS1sb2dpbl9fZm9ybVwiKTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgcG9zdFByb21pc2U6IEFqYXhSZXN1bHQgPSBhd2FpdCB0aGlzLmFqYXhDYWxsPEFqYXhSZXN1bHQ+KHtcclxuICAgICAgICAgICAgICAgIHVybDogYC9Mb2dpbi9JbmRleGAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3Nlc3Npb25LZXknOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwic2Vzc2lvbktleVwiKSwgJ2lzTmV3JzogXCJ0cnVlXCIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhc3luYyBhamF4Q2FsbDxUUmVzdWx0PihhamF4T3B0aW9uczogSlF1ZXJ5QWpheFNldHRpbmdzKTogUHJvbWlzZTxUUmVzdWx0PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZTxUUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoYWpheE9wdGlvbnMpLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb2tpZSA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwibWlkYXNfY29va2llXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29raWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZXNzaW9uID0gY29va2llO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSkuZmFpbCgoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoeyB4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhZGRTZXNzaW9uVG9VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHRoaXMuX3Nlc3Npb247XHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNoZXMgPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc1Nlc3Npb25JZERlZmluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFswXSA9PSBcInNlc3Npb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2Vzc2lvbklkRGVmaW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNTZXNzaW9uSWREZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCArIFwiJnNlc3Npb249XCIgKyBzZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCArIFwiP3Nlc3Npb249XCIgKyBzZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgQWpheENhbGw8VFJlc3VsdD4oYWpheE9wdGlvbnM6IEpRdWVyeUFqYXhTZXR0aW5ncyk6IFByb21pc2U8VFJlc3VsdD4ge1xyXG4gICAgICAgICAgICBhamF4T3B0aW9ucy51cmwgPSB0aGlzLmFkZFNlc3Npb25Ub1VybChhamF4T3B0aW9ucy51cmwpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBhamF4Q2FsbFJlc3BvbnNlID0gYXdhaXQgdGhpcy5hamF4Q2FsbDxUUmVzdWx0PihhamF4T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0SHR0cEFjdGl2aXR5VGltZXN0YW1wID0gbmV3IERhdGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheENhbGxSZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXhjKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhjLmVycm9yVGhyb3duID09IFwiVW5hdXRob3JpemVkXCIgfHwgZXhjLmVycm9yVGhyb3duID09IFwiRm9yYmlkZGVuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gXCJSZXNvdXJjZXMuc1Nlc3Npb25FeHBpcmVkTWVzc2FnZVwiOy8vKyBcIi48YnIvPiBMYXN0IG5ldHdvcmsgYWN0aW9uIHJlcG9ydGVkIGF0OiBcIiArIHRoaXMuX2xhc3RIdHRwQWN0aXZpdHlUaW1lc3RhbXAudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tc2cgPSBtc2cgKyBcIi48YnIvPiBVc2VyIGxvZ2dlZCBpbiBhdDogXCIgKyBFbnRyeVBvaW50LnZpZXdNb2RlbC5Mb2dpblRpbWVTdGFtcC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL21pQ2xpZW50U2NyaXB0cy5MaWJzLkhlbHBlcnMuQWxlcnQocG93Q2xpZW50U2NyaXB0cy5TeXN0ZW0ucG93QWN0aW9uTG9nZ2VySXRlbUtpbmQuV2FybmluZywgUmVzb3VyY2VzLnNTZXNzaW9uRXhwaXJlZFRpdGxlLCBtc2csIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLl9Dcm9udXNMb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleGMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWlDbGllbnRTY3JpcHRzLkxpYnMuSGVscGVycy5BbGVydChwb3dDbGllbnRTY3JpcHRzLlN5c3RlbS5wb3dBY3Rpb25Mb2dnZXJJdGVtS2luZC5FeGNlcHRpb24sIFJlc291cmNlcy5zVW5oYW5kbGVkRXhjZXB0aW9uSW5IdHRwQ2FsbCwgZXhjLnhoci5yZXNwb25zZVRleHQsIG51bGwsICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgQ2xpZW50U2NyaXB0cy5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBamF4UmVzdWx0PFREYXRhID0ge30+IHtcclxuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xyXG4gICAgICAgIG1vZGVsOiBURGF0YTtcclxuICAgICAgICBtZXNzYWdlczogQWN0aW9uTG9nZ2VySXRlbVtdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTG9nZ2VySXRlbSB7XHJcbiAgICAgICAgS2luZDogQWN0aW9uTG9nZ2VySXRlbUtpbmQ7XHJcbiAgICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEFjdGlvbkxvZ2dlckl0ZW1LaW5kIHtcclxuICAgICAgICBJbmZvID0gMCxcclxuICAgICAgICBXYXJuaW5nID0gMSxcclxuICAgICAgICBFeGNlcHRpb24gPSAyXHJcbiAgICB9XHJcblxyXG59Il19