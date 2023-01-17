import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  showAudit=false;
  showConfig=false;
  constructor() { }

  ngOnInit() {
  }
  show(tab){
    if(tab=="audit"){
      this.showAudit = true;
      this.showConfig=false;
    }
    else if(tab=="none"){
      this.showAudit = false;
      this.showConfig=false;
    }
    else{
      this.showAudit = false;
      this.showConfig=true;
    }
  }
}
