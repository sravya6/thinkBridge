import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<ModalPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit(): void {
    }
   update(){
     
   }
}
