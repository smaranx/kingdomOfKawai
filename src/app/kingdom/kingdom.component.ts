import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from "ngx-simple-modal";
import { AlertComponent } from '../alert.component';
@Component({
  selector: 'app-kingdom',
  templateUrl: './kingdom.component.html',
  styleUrls: ['./kingdom.component.css']
})
export class KingdomComponent implements OnInit {

  constructor(private SimpleModalService : SimpleModalService) { }

  ngOnInit(): void {
  }
  showAlert(){
    this.SimpleModalService.addModal(AlertComponent, {title:'Releasing Soon', message :'Alert'})
  }
}
