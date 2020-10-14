import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { QuickPanelModule } from './components/quick-panel/quick-panel.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';


@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ]
})
export class FeaturesModule { }
