import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventorComponent } from './inventor/inventor.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InventorComponent,
    ModalPopupComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports:[
    MatTableModule,
  ],
  entryComponents: [ModalPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
