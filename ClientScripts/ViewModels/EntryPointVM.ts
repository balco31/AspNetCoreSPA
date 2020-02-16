namespace ClientScripts.ViewModels {
    export class EntryPointVM {
        constructor(private _observable: kendo.Observable) {

        }


        public get SessionId(): string {
            return (this._observable as any).get("SessionId");
        }
        public set PropertyName(theValue: string) {
            (this._observable as any).set("SessionId", theValue);
        };

    }
}