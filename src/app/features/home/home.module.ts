import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import * as HighchartsMore from "highcharts/highcharts-more.js";
import * as HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { FuseSidebarModule, FuseWidgetModule } from '../../../@fuse/components';
import { SondageModalComponent } from './shared/sondage-modal/sondage-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

const materialModules = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [HomeComponent, SondageModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HighchartsChartModule,
    ChartModule,
    ...materialModules,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatTabsModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    MatDialogModule
  ],
  providers: [
  ]
})
export class HomeModule { }
