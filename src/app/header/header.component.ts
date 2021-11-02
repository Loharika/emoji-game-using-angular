   
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store'; 
import * as fromApp from '../store/app.reducer' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated=false
 
  constructor( 
    private store:Store<fromApp.AppState>){

  }

  ngOnInit(){
     
  }
  ngOnDestroy(){
     
  }
}