import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { AppComponent } from 'app/app.component';
import { environment } from '../environments/environment';
import { fuseConfig } from './shared/fuse-config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import {  SimpleNotificationsModule } from 'angular2-notifications';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HighchartsChartModule,
        SimpleNotificationsModule.forRoot(),
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        // TODO translation
        TranslateModule.forRoot(),
        MatCardModule,
        FlexLayoutModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
