import { Component } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isAuth;
  constructor(private localStorage: LocalstorageService, private Router: Router) {}
  
  ngOnInit(){
    this.isAuth =  this.localStorage.checkAuth();

    console.log(this.isAuth)
  }
  exit(){
    this.localStorage.exit();
    this.Router.navigate(["tabs/tab1"]);
  }
  
}
