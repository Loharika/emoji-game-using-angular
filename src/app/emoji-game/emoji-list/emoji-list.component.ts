import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { EmojiService } from "../emoji-game.service";

import * as fromApp from '../../app.reducer'
import * as EmojiGameActions from '../store/emoji-game.actions'
import { EmojiModel } from "../emoji.model";
@Component({
    selector:'emoji-list',
    templateUrl:'./emoji-list.component.html',
    styleUrls:['./emoji-list.component.css']
})
export class EmojiListComponent implements OnInit,OnDestroy{
    subscription:Subscription
    emojis:EmojiModel[]
    constructor(public emojiService:EmojiService,private store:Store<fromApp.AppState>){
        this.emojis=[]
        
    }
    ngOnInit(){
        this.emojis=this.emojiService.emojis
        console.log("initial") 
        this.subscription=this.store.select('emojiGame') 

        .pipe(map(m=> {
            console.log(m)
            // return emojisState.emojis
            return []
        }))
        .subscribe((emojis:EmojiModel[])=>{
            console.log('emojis',emojis)
            this.emojis=emojis
        }) 
        console.log(this.emojis)
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
      }
    
    
}