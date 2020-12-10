import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { CrudComponent } from './components/templates/crud/crud.component';

import { CrudService } from './components/templates/crud/crud.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrudComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
