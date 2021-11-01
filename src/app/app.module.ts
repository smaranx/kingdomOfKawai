import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {SimpleModalModule} from 'ngx-simple-modal'
import { AppComponent } from './app.component';
import { KingdomComponent } from './kingdom/kingdom.component';
import {AlertComponent} from '../../src/app/alert.component'
@NgModule({
  declarations: [
    AppComponent,
    KingdomComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleModalModule
  ],
  exports:[
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
