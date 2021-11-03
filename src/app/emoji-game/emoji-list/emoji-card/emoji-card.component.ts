import { Component, Input } from "@angular/core"; 
import { EmojiService } from "../../emoji-game.service";
import { EmojiModel } from "../../emoji.model"; 

@Component({
    selector:'emoji-card',
    templateUrl:'./emoji-card.component.html',
    styleUrls:['./emoji-card.component.css']
})
export class EmojiCardComponent {
    @Input() emoji: EmojiModel;
  @Input() id:number

  constructor(private emojiService: EmojiService) { }

  ngOnInit() {
  }

  onClickEmoji(id:number ){
    this.emojiService.updateEmojiStatus(id)

  }

}