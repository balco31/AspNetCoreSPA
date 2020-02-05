var ClientScripts;
(function (ClientScripts) {
    var Common;
    (function (Common) {
        var EntryPoint = /** @class */ (function () {
            function EntryPoint(_viewModelObject) {
                this._viewModelObject = _viewModelObject;
                console.log('Entry Point');
            }
            return EntryPoint;
        }());
        Common.EntryPoint = EntryPoint;
    })(Common = ClientScripts.Common || (ClientScripts.Common = {}));
})(ClientScripts || (ClientScripts = {}));
//# sourceMappingURL=EntryPoint.js.map