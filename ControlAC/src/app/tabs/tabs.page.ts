import { Component } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isAuth;
  constructor(private localStorage: LocalstorageService) {}
  
  ngOnInit(){
    this.isAuth =  this.localStorage.auth();
  }
}
