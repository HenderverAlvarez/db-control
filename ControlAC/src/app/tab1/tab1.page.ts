import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { enviroment } from 'src/environments/enviroment';
import { UserServiceService } from '../services/user-service.service';
import { LocalstorageService } from '../services/localstorage.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  env = enviroment;
  constructor(private FormsModule: FormsModule, 
    private userService: UserServiceService, 
    private localStorage: LocalstorageService) {}
  ngOnInit(){
    this.getUsers()
  }
  getUsers(){
   let data = {
      user: "henderver",
      pass: "pass"
    }
    this.userService.auth(data).subscribe((resp)=>{
    console.log(resp)
    }, 
    (error)=>{
      console.log(error)
    })
  }
}
