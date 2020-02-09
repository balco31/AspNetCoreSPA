namespace ClientScripts.Common {

    export function ShowLoaderOverElement(targetElement, backgroundColor?, opacity?) {
        var loaderBackgroundColor;
        if (typeof backgroundColor === "undefined" || backgroundColor === null) {
            loaderBackgroundColor = "#ffffff";
        } else {
            loaderBackgroundColor = backgroundColor;
        }

        var loaderBackgroundTransparency;
        if (typeof opacity === "undefined" || opacity === null) {
            loaderBackgroundTransparency = 1;
        } else {
            loaderBackgroundTransparency = opacity;
        }

        var rgbaBackgroundColor = "rgba(" + parseInt(loaderBackgroundColor.slice(-6, -4), 16)
            + "," + parseInt(loaderBackgroundColor.slice(-4, -2), 16)
            + "," + parseInt(loaderBackgroundColor.slice(-2), 16)
            + "," + loaderBackgroundTransparency + ")";

        targetElement.css("position", "relative");
        targetElement.append('<div class="h-loader-container" style="background-color:' + rgbaBackgroundColor + '"><div class="m-loader m-loader--brand"></div></div>');
    };

    export function HideLoaderOverElement(targetElement) {
        var $loaderWrapper = targetElement.find(".h-loader-container");
        $loaderWrapper.fadeOut(200, function () {
            $(this).remove();
        });
    };

    export function GetUrlParams() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    export function AlertError(messages: ClientScripts.Common.ActionLoggerItem[]) {
        // TODO
        alert(messages.firstOrDefault().Message);
        //Alert(ClientScripts.Common.ActionLoggerItemKind.Exception, "Resources.sError", messages.firstOrDefault().Message);
    }

    export function Dialog(dialogTitle: string, dialogMessage: string, buttonYes?: string, buttonNo?: string, callBackOnYes?: any, callBackOnNo?: any) {
    }
}
