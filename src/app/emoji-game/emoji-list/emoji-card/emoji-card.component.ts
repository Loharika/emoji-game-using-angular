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

  onUpdateTodoCheckbox(index:number,event){
    // this.todoService.updateTodoCheckbox(index,event.target.checked)

  }

  onUpdateTodoTitle(index,event){
    // console.log(event.target.value)
    // this.todoService.updateTodoTitle(index,event.target.value)
  }

  onDeleteTodo(index){
    // this.todoService.deleteTodo(index)
  }
}