import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  providers:[
    HttpClient,
    HttpClientModule,
    provideHttpClient()
  ],
  imports: [
    CommonModule,
    HttpClient,
    RouterModule
  ]
})
export class AppModule { }
