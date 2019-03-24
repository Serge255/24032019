    Array.prototype.delete = function () {
        var L, a, ax, what;
        what = void 0;
        a = arguments;
        L = a.length;
        ax = void 0;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
