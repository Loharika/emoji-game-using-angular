import { NgModule } from '@angular/core'; 
import { EmojiService } from './emoji-game/emoji-game.service';

@NgModule({
  providers: [
     EmojiService
  ]
})
export class CoreModule {}