import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjsZGhlPdhD2KztbS6YvPb3dK8f1PGE1s",
  authDomain: "recipe-book-rahul.firebaseapp.com",
  databaseURL: "https://recipe-book-rahul-default-rtdb.firebaseio.com",
  projectId: "recipe-book-rahul",
  storageBucket: "recipe-book-rahul.appspot.com",
  messagingSenderId: "709743792443",
  appId: "1:709743792443:web:161aeb6b23b115640ce71e",
  measurementId: "G-VMNNBZ2WWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
