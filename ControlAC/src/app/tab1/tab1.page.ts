import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { enviroment } from 'src/environments/enviroment';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  env = enviroment;
  constructor(private FormsModule: FormsModule, private userService: UserServiceService) {}
  ngOnInit(){
    this.getUsers()
  }
  getUsers(){
    this.userService.getAllUser().subscribe((resp)=>{
    console.log(resp)
    
    }, 
    (error)=>{
      console.log(error)
    })
  }
}
