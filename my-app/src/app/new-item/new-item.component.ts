import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  addItem(){

  }
  back(){
    this.route.navigate(['inventor'])
  }
}
