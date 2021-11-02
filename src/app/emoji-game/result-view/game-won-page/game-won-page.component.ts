import { Component, Input, OnInit } from "@angular/core"; 
import { EmojiService } from "../../emoji-game.service";

@Component({
    selector:'game-won-page',
    templateUrl:'./game-won-page.component.html',
    styleUrls:['./game-won-page.component.css']
})
export class GameWonComponent implements OnInit{
     
    @Input() topScore:number
    constructor(private emojiService: EmojiService){
    }
    ngOnInit(){
         
    }
    
}