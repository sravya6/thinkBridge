import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginClass } from './login-class';
import {Router} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('lf',{static:false}) loginForm:any;
  loginData=new LoginClass("","");
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
login(){
console.log("entered")
this.route.navigate(['inventor'])

}
}
