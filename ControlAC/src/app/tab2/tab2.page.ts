import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { UserServiceService } from '../services/user-service.service';
import { Navigation } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sourceURL="https://www.pngmart.com/files/10/Qr-Code-PNG-HD.png";
  code:any;
  data: any;
  noData:boolean=true;
  error=null;
  constructor(private barcodeScanner: BarcodeScanner, private UserServiceService: UserServiceService){}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      let data ={
        code: this.code
      }
      this.UserServiceService.getByCode(data).subscribe((resp:any)=>{
        if(resp.length > 0){this.data = resp[0]; this.noData=!this.noData}
        else this.error="Este Codigo no corresponde a ningun invitado"
      },
      (error)=>{
        console.log(error)

      })
      console.log(this.code)
     }).catch(err => {
         console.log('Error', err);
     });
  }

  emule(){
    let data ={
      code: "qrdsasodjhasdoadoa"
    }
    this.UserServiceService.getByCode(data).subscribe((resp:any)=>{
      if(resp.length > 0){this.data = resp[0]; this.noData=false}
      else this.error="Este Codigo no corresponde a ningun invitado"
    },
    (error)=>{
      console.log(error)
    })
  }
}
