import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustumersRoutingModule } from "./custumers-routing.module";
import { MatSliderModule } from "@angular/material/slider";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { FormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseSidebarModule, FuseWidgetModule } from "@fuse/components";
import { MatTabsModule } from "@angular/material/tabs";
import { ConfirmationModalModule } from "app/shared/components/confirmation-modal/confirmation-modal.module";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { MatStepperModule } from "@angular/material/stepper";
import { UserListComponent } from './user-list/user-list.component';
import { UserModalComponent } from './shared/components/user-modal/user-modal.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        
    UserListComponent,
        
    UserModalComponent,
        
    ProfileComponent],
    imports: [
        HttpClientModule,
        ConfirmationModalModule,
        MatDialogModule,
        MatSliderModule,
        FormsModule,
        CommonModule,
        CustumersRoutingModule,
        MatInputModule,
        MatStepperModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatTabsModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,
        MatFormFieldModule,
        MatMenuModule
    ],
    providers: [],
    entryComponents: [],
})
export class CustumersModule {}
