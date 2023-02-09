import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './Components/list/list.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeServiceService } from './services/home-service.service';
import { AddComponent } from './Components/add/add.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogComponent } from './Components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    AddComponent,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule

  ],
  providers: [{ provide: "apiurl", useValue: "https://localhost:7140/" }, HomeServiceService,
  { provide: MAT_DIALOG_DATA, useValue: {} },
  { provide: MatDialogRef, useValue: {} }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
