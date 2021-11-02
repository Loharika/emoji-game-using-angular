import { Component, Input, OnInit } from "@angular/core"; 
import { EmojiService } from "../../emoji-game.service";

@Component({
    selector:'game-lose-page',
    templateUrl:'./game-lose-page.component.html',
    styleUrls:['./game-lose-page.component.css']
})
export class GameLoseComponent implements OnInit{
     @Input() score:number
    constructor(private emojiService: EmojiService){
    }
    ngOnInit(){
         
    }
    
}