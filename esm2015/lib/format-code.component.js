/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FormatCodeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    login() {
        console.log(this.childMessage);
        if (this.childMessage == true) {
            console.log("Child Component Login function Called");
            alert("Login from child");
        }
        else {
        }
    }
}
FormatCodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-format-code',
                template: "<div class=\"form-control\">\r\nLogin Component\r\n<br><br>Username: <br>\r\n<input id=\"username\" type=\"text\">\r\n<br>\r\nPassword : <br>\r\n<input class=\"inputClass\" type=\"password\" id=\"password\" >\r\n<br>\r\n<input type=\"submit\" value=\"Login\" (click)=\"login()\">\r\n</div>",
                styles: [".inputClass{-webkit-appearance:textfield;background-color:#00f;-webkit-rtl-ordering:logical;cursor:text;padding:1px;-o-border-image:initial;border-image:initial;font-size:25px;border:12px inset initial}"]
            }] }
];
/** @nocollapse */
FormatCodeComponent.ctorParameters = () => [];
FormatCodeComponent.propDecorators = {
    childMessage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormatCodeComponent.prototype.childMessage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybWF0LWNvZGUvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0LWNvZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU94RCxNQUFNO0lBRUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7OztJQUlELEtBQUs7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUvQixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUUsSUFBSSxFQUMxQjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMzQjthQUVEO1NBRUM7S0FDRjs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2U0FBMkM7O2FBRTVDOzs7OzsyQkFRRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZvcm1hdC1jb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1hdC1jb2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybWF0LWNvZGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBjaGlsZE1lc3NhZ2U6IGJvb2xlYW47XG5cbiAgbG9naW4oKVxuICB7XG4gICAgY29uc29sZS5sb2codGhpcy5jaGlsZE1lc3NhZ2UpO1xuICAgIFxuICAgIGlmKHRoaXMuY2hpbGRNZXNzYWdlPT10cnVlKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGQgQ29tcG9uZW50IExvZ2luIGZ1bmN0aW9uIENhbGxlZFwiKTtcbiAgICAgIGFsZXJ0KFwiTG9naW4gZnJvbSBjaGlsZFwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgIH1cbiAgfVxuXG59XG4iXX0=