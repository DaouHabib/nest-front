import { Component, EventEmitter, Inject, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '../../../../@fuse/animations';
import { ToastService } from '../../../shared/services/toast.service';
import { UserService } from '../../../shared/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class UserListComponent implements OnInit {
  userDataSource: any;
  @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(public dialog: MatDialog, private userService: UserService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.getallcustumers();
  }


  getallcustumers(): void {
    this.userService
      .getAll()
      .subscribe(
        (data) => {
          (this.userDataSource = new MatTableDataSource<any>(data))
     
        });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [

    "email",
    "phone",
    "actions",
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["userDataSource"].currentValue != undefined) {
      this.userDataSource.paginator = this.paginator;
    }
  };



  notif() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
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
