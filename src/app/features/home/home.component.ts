import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { ToastService } from 'app/shared/services/toast.service';
import { SondageService } from '../../shared/services/sondage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { fuseAnimations } from '../../../@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { SondageModalComponent } from './shared/sondage-modal/sondage-modal.component';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class HomeComponent implements OnInit {
    connectedUser =localStorage.getItem('connectedId'); 
    sondageDataSource: any;
    @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();
  
  
    constructor( private sondageService: SondageService, public dialog: MatDialog,
      private toastService: ToastService) { }
  
    ngOnInit(): void {
        this.getallSondages();
    }
  
  
    getallSondages(): void {
      this.sondageService
          .getAll()
          .subscribe(
              (data) =>{
                  (this.sondageDataSource = new MatTableDataSource<any>(data))
              console.log(data);});
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = [
     
      "question",
      "oui",
      "non",
      "actions"
  ];
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes["sondageDataSource"].currentValue != undefined) {
          this.sondageDataSource.paginator = this.paginator;
      }
  };
  
  openAddSondageModal(): void {
    const dialogRef = this.dialog.open(SondageModalComponent, {
        width: '590px',
        height: '490px',
    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          result.userId = localStorage.getItem('connectedId');
            this.sondageService.AddSondage(result).subscribe(
                sondage => {
                    if (sondage) {
                        this.toastService.success("Sondage added", "Sucess");
                        this.getallSondages();
                    }
                },
                error => {
                    this.toastService.error("error", "You passed the limits try later");
                }
            );
        }
    });
}
  

openEditSondageModal(data): void {
  const dialogRef = this.dialog.open(SondageModalComponent, {
      width: '590px',
      height: '490px',
      data: { data: data }

  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(data);
      if (result) {
          this.sondageService.edit(result, data.id).subscribe(
              user => {
                  this.toastService.success("Sondage Edited", "Sucess");
                this.getallSondages();
              },
              err => {
                  this.toastService.error("error", "check informations");
              }
          );
      }
  });
}

voteOui(id:string){
let oui=1;
let non=0;
this.sondageService.updateVote(id,oui,non,this.connectedUser).subscribe(res=>{
  if(res){
console.log(res);
this.toastService.success("Vote added", "Sucess");

this.getallSondages();
}
else{
  this.toastService.error("Error","You have already voted")
}
});

}

voteNon(id:string){
  let oui=0;
  let non=1;
  this.sondageService.updateVote(id,oui,non,this.connectedUser).subscribe(res=>{
    if(res){
  console.log(res);
  this.toastService.success("Vote added", "Sucess");

  this.getallSondages();
  }
  else{
    this.toastService.error("Error","You have already voted")
  }
  });
  }
  
  delete(data)
  {
      Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            this.sondageService.delete(data.id).subscribe(res=>{this.getallSondages() ;console.log('deleted')})
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
  }
 

}
