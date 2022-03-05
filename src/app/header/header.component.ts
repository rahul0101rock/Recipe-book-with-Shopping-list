import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  user: auth.User | null = null;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {

    if (this.user) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        this.user = user;
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
  }
  
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogOut(){
    auth.signOut(auth.getAuth());
  }
}
