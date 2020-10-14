import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  public AddUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddUserForm = new FormGroup({
     
      email: new FormControl(
        this.data?.data ? this.data.data.email : ""  ,  Validators.required),
      password: new FormControl({
       value: this.data?.data ? this.data.data.password : "",disabled:isdisaybled},  Validators.required),
      phone: new FormControl( this.data?.data? this.data.data.phone : 0,  Validators.required),
      Role: new FormControl({
        value: this.data?.data ? this.data.data.Role : "",disabled:isdisaybled},),
  });
}

adduser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}


Edituser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}

}
