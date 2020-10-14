import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fuseAnimations } from '../../../../@fuse/animations';
import { ToastService } from '../../../shared/services/toast.service';
import { UserService } from '../../../shared/services/user.service';
import { UserModalComponent } from '../shared/components/user-modal/user-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProfileComponent implements OnInit {
  isImageLoading=false;

  constructor(public dialog: MatDialog, 
    private userService: UserService,
    private toastService: ToastService,
     ) { }
    user : any;
  ngOnInit(): void {
    this.getConnected();
  
  }
  public  getConnected(){
   let id = localStorage.getItem('connectedId') ;
    this.userService.getuserByid(id).subscribe(data=>{
    this.user = data;
    console.log(data);
  });
 
 }

 openEditUserModal(data): void {
  const dialogRef = this.dialog.open(UserModalComponent, {
      width: '590px',
      height: '490px',
      data: { data: data }

  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(data);
      if (result) {
          this.userService.edit(result, data.id).subscribe(
              user => {
                  this.toastService.success("User Edited", "Sucess");
                this.getConnected();
              },
              err => {
                  this.toastService.error("error", "check informations");
              }
          );
      }
  });
}

}
