import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private Storage: Storage) { }

  async checkAuth(){
    await this.Storage.create();
    return this.Storage.get("auth");
  }
  async setAuth(){
    await this.Storage.create();
    this.Storage.set("Auth", true)
  }
  async exit(){
    await this.Storage.create();
    this.Storage.clear()
  }
}
