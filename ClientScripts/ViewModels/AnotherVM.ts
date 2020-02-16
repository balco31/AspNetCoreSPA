namespace ClientScripts.ViewModels {
    export class AnotherVM {
        constructor(private _observable: kendo.Observable) {

        }


        public get Info(): string {
            return (this._observable as any).get("Info");
        }
        public set Info(theValue: string) {
            (this._observable as any).set("Info", theValue);
        };

    }
}