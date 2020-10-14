import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { UserService } from 'app/shared/services/user.service';
import { fuseAnimations } from '@fuse/animations';
import { ToastService } from 'app/shared/services/toast.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ForgetPasswordFormComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private _fuseConfigService: FuseConfigService,
    private userservice: UserService
    , private toastService: ToastService,
    private router: Router,
    private authService: AuthenticationService,


  ) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
    this.forgotPasswordForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      })

  }

  ngOnInit(): void {
    localStorage.setItem('connectedId', null);
    this.authService.saveToken(null);


  }

  sendEmail() {
    console.log(this.forgotPasswordForm.value.email);

    this.userservice.sendEmail(this.forgotPasswordForm.value).subscribe(res => {
      this.toastService.success("Email Sent", "Sucess");
      this.router.navigate(['/authentication/login']);
      console.log(res);
    },
      err => {
        this.toastService.error("error", "Check your Email");
        this.forgotPasswordForm.reset();
      }

    );
  }
}
