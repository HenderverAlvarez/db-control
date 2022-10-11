import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enviroment } from 'src/environments/enviroment';
import { UserServiceService } from '../services/user-service.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  env = enviroment;
  private form : FormGroup;
  valid = false;
  errors=null;
  constructor(
    private userService: UserServiceService, 
    private localStorage: LocalstorageService,
    private formBuilder: FormBuilder,
    private Router: Router) {}

  ngOnInit(){
    this.startForm();
  }
  startForm(){
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getUsers(data){
    this.userService.auth(data).subscribe((resp:any)=>{
      console.log(resp)
      if(resp.length <= 0){
        this.errors="Usuario Incorrecto"
      }
      else if(resp[0].password != data.password){
        this.errors="Contraseña Incorrecta"
      }
      else{
        this.errors=null;
        this.localStorage.setAuth();
        this.Router.navigate(["/tabs/tab2"])
      }
    }, 
    (error)=>{
      console.log(error)
      this.errors="Error inesperado intente nuevamente mas tarde"
    })
  }
  check(){
    if(this.form.value.password != "" && this.form.value.user != ""){this.valid=true}else{this.valid=false}
  }
  onSubmit(event){ 
    console.log(this.form.value)
    this.getUsers(this.form.value)
  }
}
