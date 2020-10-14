import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavbarVerticalStyle1Module } from './vertical/style-1/style-1.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        FuseSharedModule,
        NavbarVerticalStyle1Module,
        RouterModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
