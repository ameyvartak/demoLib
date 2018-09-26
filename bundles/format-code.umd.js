(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('format-code', ['exports', '@angular/core'], factory) :
    (factory((global['format-code'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormatCodeComponent = /** @class */ (function () {
        function FormatCodeComponent() {
        }
        /**
         * @return {?}
         */
        FormatCodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        FormatCodeComponent.prototype.login = /**
         * @return {?}
         */
            function () {
                console.log(this.childMessage);
                if (this.childMessage == true) {
                    console.log("Child Component Login function Called");
                    alert("Login from child");
                }
            };
        FormatCodeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-format-code',
                        template: "<div class=\"form-control\">\r\nLogin Component\r\n<br><br>Username: <br>\r\n<input id=\"username\" type=\"text\">\r\n<br>\r\nPassword : <br>\r\n<input class=\"inputClass\" type=\"password\" id=\"password\" >\r\n<br>\r\n<input type=\"submit\" value=\"Login\" (click)=\"login()\">\r\n</div>",
                        styles: [".inputClass{-webkit-appearance:textfield;background-color:#00f;-webkit-rtl-ordering:logical;cursor:text;padding:1px;-o-border-image:initial;border-image:initial;font-size:25px;border:12px inset initial}"]
                    }] }
        ];
        /** @nocollapse */
        FormatCodeComponent.ctorParameters = function () { return []; };
        FormatCodeComponent.propDecorators = {
            childMessage: [{ type: core.Input }]
        };
        return FormatCodeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormatCodeModule = /** @class */ (function () {
        function FormatCodeModule() {
        }
        FormatCodeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [FormatCodeComponent],
                        exports: [FormatCodeComponent]
                    },] }
        ];
        return FormatCodeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.FormatCodeComponent = FormatCodeComponent;
    exports.FormatCodeModule = FormatCodeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mb3JtYXQtY29kZS9saWIvZm9ybWF0LWNvZGUuY29tcG9uZW50LnRzIiwibmc6Ly9mb3JtYXQtY29kZS9saWIvZm9ybWF0LWNvZGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mb3JtYXQtY29kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtYXQtY29kZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm1hdC1jb2RlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgY2hpbGRNZXNzYWdlOiBib29sZWFuO1xuXG4gIGxvZ2luKClcbiAge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2hpbGRNZXNzYWdlKTtcbiAgICBcbiAgICBpZih0aGlzLmNoaWxkTWVzc2FnZT09dHJ1ZSlcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoaWxkIENvbXBvbmVudCBMb2dpbiBmdW5jdGlvbiBDYWxsZWRcIik7XG4gICAgICBhbGVydChcIkxvZ2luIGZyb20gY2hpbGRcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdENvZGVDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC1jb2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWF0Q29kZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGb3JtYXRDb2RlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRDb2RlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFO1NBQWlCOzs7O1FBRWpCLHNDQUFROzs7WUFBUjthQUNDOzs7O1FBSUQsbUNBQUs7OztZQUFMO2dCQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUUvQixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUUsSUFBSSxFQUMxQjtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7b0JBQ3JELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUMzQixBQUlBO2FBQ0Y7O29CQTNCRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLDZTQUEyQzs7cUJBRTVDOzs7OzttQ0FRRUMsVUFBSzs7a0NBZFI7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDL0I7OytCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=