   
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store'; 
import { EmojiService } from '../emoji-game/emoji-game.service';
import * as fromApp from '../store/app.reducer' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  score:number
  topScore:number
  constructor(private emojiService:EmojiService){
    this.score=this.emojiService.score
    this.topScore=this.emojiService.topScore

  }

  ngOnInit(){
     console.log(this.score)
  }
  ngOnDestroy(){
     
  }
}