import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "app/shared/services/authentication.service";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { UserService } from 'app/shared/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from '../../../shared/services/toast.service';
import { UserModalComponent } from '../../custumers/shared/components/user-modal/user-modal.component';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private userService: UserService,
        public dialog: MatDialog,
        private toastService: ToastService
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }

    ngOnInit() {}

    login() {
        this.authService.login(this.loginForm.value).subscribe(
            (data) => {
                this.authService.saveToken(data.accessToken);

                    localStorage.setItem('connectedId',data._id);
                    this.router.navigate( ['/features/home'] );
               
                
            },
            (error) => {
            }
        );
    }
    openAddUserModal(): void {
        const dialogRef = this.dialog.open(UserModalComponent, {
            width: '590px',
            height: '490px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if (result) {
  
                this.userService.Adduser(result).subscribe(
                    user => {
                        if (user) {
                            this.toastService.success("User added", "Sucess");
                        }
                    },
                    error => {
                        console.log(error);
                        this.toastService.error("error", "check informations");
                    }
                );
            }
        });
    }
}
