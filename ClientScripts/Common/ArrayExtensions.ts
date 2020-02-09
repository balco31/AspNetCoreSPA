interface Array<T> {
    sum: (exp?: (item: T) => number) => number;
    max: (exp?: (item: T) => number) => number;
    min: (exp?: (item: T) => number) => number;
    addRange: (arr: T[]) => number;
    where: (exp?: (item: T) => boolean) => T[];
    all: (exp?: (item: T) => boolean) => boolean;
    any: (exp?: (item: T) => boolean) => boolean;
    orderBy: <K> (exp?: (item: T) => K) => T[];
    orderByDescending: <K> (exp?: (item: T) => K) => T[];
    firstOrDefault: (exp?: (item: T) => boolean) => T;
    groupBy: <K> (exp?: (item: T) => K) => ClientScripts.Common.ArrayExtensions.Grouping<T, K>[];
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

Array.prototype.sum = function <T>(exp?: (item: T) => number) {
    let result = 0;
    this.map(exp || ((item) => item)).forEach((val) => result += val);
    return result;
};

Array.prototype.max = function <T>(exp?: (item: T) => number) {
    let arr = this.map(exp || ((item) => item));
    return Math.max.apply(null, arr);
}

Array.prototype.min = function <T>(exp?: (item: T) => number) {
    let arr = this.map(exp || ((item) => item));
    return Math.min.apply(null, arr);
}

Array.prototype.addRange = function <T>(arr: T[]): number {
    let length = this.length;
    let self = this;
    jQuery.each(arr, (i, el) => {
        length = self.push(el);
        if (self.addEvents) {
            for (let i = 0; i < self.addEvents.length; i++) {
                self.addEvents[i](el, self);
            }
        }
    });
    return length;
}

Array.prototype.removeAll = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        this.removeAt(i);
    }
}

Array.prototype.removeRange = function <T>(arr: T[]): number {
    let self = this;
    jQuery.each(arr, (i, el) => {
        self.remove(el);

    });
    let length = this.length;
    return length;
}
Array.prototype.removeRangeWhere = function <T>(exp: (item: T) => boolean): number {
    let self = this;
    let arr = this.where(exp);
    jQuery.each(arr, (i, el) => {
        self.remove(el);
    });
    let length = this.length;
    return length;
}
Array.prototype.where = function <T>(exp?: (item: T) => boolean) {
    let arr = jQuery.grep(this, exp);
    return arr;
}
Array.prototype.all = function <T>(exp?: (item: T) => boolean) {

    if (this.length === 0) {
        return false;
    }
    let result = true;

    jQuery.each(this, (i, el) => {
        if (!exp(el)) {
            result = false;
        }
    });
    return result;


}
Array.prototype.any = function <T>(exp?: (item: T) => boolean) {
    let result = false;

    if (exp) {
        jQuery.each(this, (i, el) => {
            if (exp(el)) {
                result = true;
            }
        });
    }

    else {
        result = this.length > 0;
    }

    return result;
}

Array.prototype.orderBy = function <T>(exp?: (item: T) => any) {
    let sortAr = new Array<T>();
    sortAr.addRange(this);
    if (exp == null) {
        return sortAr.sort();
    }
    else {
        return sortAr.sort((n1, n2) => {
            let value1 = exp(n1);
            let value2 = exp(n2);
            if ((typeof value1) === "number") {
                return <number>value1 - <number>value2;
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

}

Array.prototype.orderByDescending = function <T>(exp?: (item: T) => any) {
    let sortAr = new Array<T>();
    sortAr.addRange(this);
    if (!exp) {
        return sortAr.sort();
    }
    else {
        return sortAr.sort((n1, n2) => {
            let value1 = exp(n1);
            let value2 = exp(n2);
            if ((typeof value1) === "number") {
                return <number>value2 - <number>value1;
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

}

Array.prototype.contains = function <T>(item: T): boolean {
    return this.indexOf(item) >= 0;
}


Array.prototype.firstOrDefault = function <T>(exp?: (item: T) => boolean) {
    if (exp) {
        let arr = jQuery.grep(this, exp);
        return arr.length ? arr[0] : null;
    }
    else {
        return this.length ? this[0] : null;
    }
}
Array.prototype.remove = function <T>(item: T) {
    let index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        if (this.removeEvents) {
            for (let i = 0; i < this.removeEvents.length; i++) {
                this.removeEvents[i](item, this);
            }
        }
    }
}
Array.prototype.removeAt = function (index: number) {
    if (index >= 0) {
        let item = this[index];
        this.splice(index, 1);
        if (this.removeEvents) {
            for (let i = 0; i < this.removeEvents.length; i++) {
                this.removeEvents[i](item, this);
            }
        }
    }
}
Array.prototype.onRemove = function <T>(exp?: (item: T, ar: Array<T>) => void) {
    if (!this.removeEvents) {
        this.removeEvents = [];
    }
    this.removeEvents.push(exp);
};

Array.prototype.add = function <T>(item: T) {
    this.push(item);
    if (this.addEvents) {
        for (let i = 0; i < this.addEvents.length; i++) {
            this.addEvents[i](item, this);
        }
    }
}
Array.prototype.onAdd = function <T>(exp?: (item: T, ar: Array<T>) => void) {
    if (!this.addEvents) {
        this.addEvents = [];
    }
    this.addEvents.push(exp);
};
Array.prototype.groupBy = function <T, K>(exp?: (item: T) => K) {
    let result: Array<ClientScripts.Common.ArrayExtensions.Grouping<T, K>> = <Array<ClientScripts.Common.ArrayExtensions.Grouping<T, K>>>
        (this.reduce(function (groups, item) {
            const key = exp(item);
            if (!(groups instanceof Array)) {
                groups = new Array<ClientScripts.Common.ArrayExtensions.Grouping<T, K>>();
            }
            let group = groups.firstOrDefault(x => x.key === key);
            if (!group) {
                group = new ClientScripts.Common.ArrayExtensions.Grouping<T, K>(key);
                groups.push(group);
            }
            group.push(item)
            return groups
        }, {}));
    if (!(result instanceof Array)) {
        return new Array<ClientScripts.Common.ArrayExtensions.Grouping<T, K>>();
    }
    return result;
}


Array.prototype.intersect = function <T>(otherArray: T[]) {
    return this.filter((n) => {
        return otherArray.indexOf(n) !== -1
    });
}

Array.prototype.except = function <T>(otherArray: T[]): T[] {
    let self = this;
    return self.filter(function (n) {
        return self.intersect(otherArray).indexOf(n) === -1
    });
};

namespace ClientScripts.Common.ArrayExtensions {
    export class Grouping<T, K> extends Array<T> {
        constructor(myKey: K) {
            super();
            this.key = myKey;
        }

        public key: K;

    }

}