namespace ClientScripts.Common {

    export function NewGuid(): string {
        if (window.crypto) {
            //better randomizer
            return ((<any>[1e7]) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        else {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    };

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
