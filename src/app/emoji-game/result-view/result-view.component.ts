import { Component, OnInit } from "@angular/core";
import { EmojiService } from "../emoji-game.service"; 

@Component({
    selector:'result-view',
    templateUrl:'./result-view.component.html',
    styleUrls:['./result-view.component.css']
})
export class ResultViewComponent {
     public gameStatus:string
     public score:number
     public topScore:number
    constructor(public emojiService:EmojiService){
         this.gameStatus=this.emojiService.gameStatus
         this.score=this.emojiService.score
         this.topScore=this.emojiService.topScore
    }
    
}