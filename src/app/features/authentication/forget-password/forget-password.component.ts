import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: any;
  constructor(private authService : AuthenticationService,private router: Router,    private route: ActivatedRoute ,
    ) { }

  ngOnInit(): void {
   
  
  this.route.paramMap.subscribe((routes:any)=>{
    this.authService.saveToken(routes.params.token);
    this.decodedToken = this.helper.decodeToken(routes.params.token);
    localStorage.setItem('connectedId',this.decodedToken.payload.sub);
    this.router.navigate( ['/authentication/changePassword/'+routes.params.token] );
        
    })
  }
}
