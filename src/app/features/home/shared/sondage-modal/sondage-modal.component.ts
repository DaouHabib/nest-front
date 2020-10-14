import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sondage-modal',
  templateUrl: './sondage-modal.component.html',
  styleUrls: ['./sondage-modal.component.scss']
})
export class SondageModalComponent implements OnInit {
  public AddSondageForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SondageModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddSondageForm = new FormGroup({
     
      question: new FormControl(
        this.data?.data ? this.data.data.question : ""  ,  Validators.required),
     
  });
}

addSondage(): void {
  this.dialogRef.close(this.AddSondageForm.value);
}


EditSondage(): void {
  this.dialogRef.close(this.AddSondageForm.value);
}

}
