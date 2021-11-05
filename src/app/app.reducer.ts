import { ActionReducerMap } from '@ngrx/store' 
import * as fromEmojiGame from '../app/emoji-game/store/emoji-game.reducer'


export interface AppState{
     
    emojiGame:fromEmojiGame.State
}
export const appReducer:ActionReducerMap<AppState>={
    emojiGame:fromEmojiGame.emojiGameReducer

}