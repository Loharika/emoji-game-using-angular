   
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
  gameOver:boolean
  displayTopScore:boolean
  displayScore:boolean
  gameStatus:string
  constructor(private emojiService:EmojiService){
    this.score=this.emojiService.score
    this.topScore=this.emojiService.topScore
    this.gameOver=this.emojiService.gameOver
    this.gameStatus=this.emojiService.gameStatus
    this.displayTopScore=!this.gameOver || (this.gameOver && this.gameStatus!=='WON')

  }

  ngOnInit(){ 

  }
  ngOnDestroy(){
     
  }
}