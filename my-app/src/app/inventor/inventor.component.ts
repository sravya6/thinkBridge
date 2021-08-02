import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  price: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', description: '1.0079', price: 123},
  {position: 2, name: 'Helium', description: '.00264', price: 233},
  {position: 3, name: 'Lithium', description: '6.941', price: 123},
  {position: 4, name: 'Beryllium', description: '9.0122', price: 123},
  {position: 5, name: 'Boron', description: '10.811', price: 12}
];
@Component({
  selector: 'app-inventor',
  templateUrl: './inventor.component.html',
  styleUrls: ['./inventor.component.css']
})
export class InventorComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'price','edit','delete'];
  dataSource = ELEMENT_DATA;
addingItemTag:boolean=false;


animal1: string="sravya";
name1: string="dsff";

  constructor(public dialog:MatDialog,public route:Router) { }

  ngOnInit(): void {
  }
  add(){
    console.log("entered in add")
    this.addingItemTag=true;
    this.route.navigate(['newItem']);

  }
  // editItems(index: any){
    openEditDialog(index:any): void {
      console.log("edit popup",index)
      const dialogRef = this.dialog.open(ModalPopupComponent, {
        
        height: '400px',
        width: '600px',
        data: {name1: this.name1, position:this.animal1}
      });
      console.log(dialogRef)
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed',result);
      });
  }
  
  deleteItems(index1:any)
  {
    console.log("data")
  }

}
