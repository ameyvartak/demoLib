import { Component, Input, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'lib-format-code',
                    template: "<div class=\"form-control\">\r\nLogin Component\r\n<br><br>Username: <br>\r\n<input id=\"username\" type=\"text\">\r\n<br>\r\nPassword : <br>\r\n<input class=\"inputClass\" type=\"password\" id=\"password\" >\r\n<br>\r\n<input type=\"submit\" value=\"Login\" (click)=\"login()\">\r\n</div>",
                    styles: [".inputClass{-webkit-appearance:textfield;background-color:#00f;-webkit-rtl-ordering:logical;cursor:text;padding:1px;-o-border-image:initial;border-image:initial;font-size:25px;border:12px inset initial}"]
                }] }
    ];
    /** @nocollapse */
    FormatCodeComponent.ctorParameters = function () { return []; };
    FormatCodeComponent.propDecorators = {
        childMessage: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { FormatCodeComponent, FormatCodeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zvcm1hdC1jb2RlL2xpYi9mb3JtYXQtY29kZS5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1hdC1jb2RlL2xpYi9mb3JtYXQtY29kZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZvcm1hdC1jb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1hdC1jb2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybWF0LWNvZGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBjaGlsZE1lc3NhZ2U6IGJvb2xlYW47XG5cbiAgbG9naW4oKVxuICB7XG4gICAgY29uc29sZS5sb2codGhpcy5jaGlsZE1lc3NhZ2UpO1xuICAgIFxuICAgIGlmKHRoaXMuY2hpbGRNZXNzYWdlPT10cnVlKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGQgQ29tcG9uZW50IExvZ2luIGZ1bmN0aW9uIENhbGxlZFwiKTtcbiAgICAgIGFsZXJ0KFwiTG9naW4gZnJvbSBjaGlsZFwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWF0Q29kZUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LWNvZGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtYXRDb2RlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zvcm1hdENvZGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFTRTtLQUFpQjs7OztJQUVqQixzQ0FBUTs7O0lBQVI7S0FDQzs7OztJQUlELG1DQUFLOzs7SUFBTDtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9CLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBRSxJQUFJLEVBQzFCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNCLEFBSUE7S0FDRjs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw2U0FBMkM7O2lCQUU1Qzs7Ozs7K0JBUUUsS0FBSzs7OEJBZFI7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7MkJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==