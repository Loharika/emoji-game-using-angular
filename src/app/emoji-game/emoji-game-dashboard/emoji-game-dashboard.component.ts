import { Component } from "@angular/core";
import { EmojiService } from "../emoji-game.service";

@Component({
    selector:'emoji-game-dashboard',
    templateUrl:'./emoji-game-dashboard.component.html',
    styleUrls:['./emoji-game-dashboard.component.css']
})
export class EmojiGameDashboardComponent {
    gameOver:boolean
    constructor(public emojiService:EmojiService){
        this.gameOver=this.emojiService.gameOver
    }
}