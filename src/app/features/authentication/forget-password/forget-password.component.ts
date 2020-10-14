import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService : AuthenticationService,private router: Router,    private route: ActivatedRoute ,
    ) { }

  ngOnInit(): void {
   
  
  this.route.paramMap.subscribe((routes:any)=>{
    this.authService.saveToken(routes.params.token);
    this.router.navigate( ['/authentication/changePassword'] );
        
    })
  }
}
