import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                "CoreModule has already been loaded. You should only import Core modules in the AppModule only."
            );
        }
    }
}
