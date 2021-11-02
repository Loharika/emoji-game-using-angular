import { Component, Input, OnInit } from "@angular/core"; 
import { EmojiService } from "../../emoji-game.service";

@Component({
    selector:'game-draw-page',
    templateUrl:'./game-draw-page.component.html',
    styleUrls:['./game-draw-page.component.css']
})
export class GameDrawComponent implements OnInit{
    @Input() score:number
    constructor(private emojiService: EmojiService){
    }
    ngOnInit(){
         
    }
    
}