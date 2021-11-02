   
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {HttpClientModule} from '@angular/common/http'
import { StoreModule } from '@ngrx/store';  
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { AppRoutingModule } from './app-routing.module';  
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module'; 

import * as fromApp from './store/app.reducer'; 
import { environment } from '../environments/environment'; 
import { EmojiGameModule } from './emoji-game/emoji-game.module';
 
 

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    CoreModule,
    EmojiGameModule,
    StoreDevtoolsModule.instrument({logOnly:environment.production})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }