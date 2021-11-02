import { Component, OnInit } from "@angular/core";
import { EmojiService } from "../emoji-game.service";
import { EmojiModel } from "../emoji.model";

@Component({
    selector:'emoji-list',
    templateUrl:'./emoji-list.component.html',
    styleUrls:['./emoji-list.component.css']
})
export class EmojiListComponent implements OnInit{
    emojis:EmojiModel[]
    constructor(public emojiService:EmojiService){
        this.emojis=[]
        
    }
    ngOnInit(){
        this.emojis=this.emojiService.emojis
    }
    
}