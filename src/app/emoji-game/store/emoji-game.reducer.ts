
import { EmojiModel } from "../emoji.model";
import * as  EmojiGameActions  from "./emoji-game.actions";

export interface State{
    emojis:EmojiModel[]
}

const initialState={
    emojis:[]
}
export function authReducer(state=initialState,action:EmojiGameActions.EmojiGameActions){
    switch(action.type){
        case EmojiGameActions.EMOJI_STATUS:
            const clickedEmojiId=action.payload.id
            const clickedEmoji=this.emojis.find(emoji=>emoji.id===clickedEmojiId)
            const clickedEmojiIndex=this.emojis.findIndex(emoji=>emoji.id===clickedEmojiId)
            if(!clickedEmoji.checked){
                const updatedEmoji=new EmojiModel(clickedEmojiId,clickedEmoji.imgUrl,true)
                this.emojis.splice(clickedEmojiIndex,1,updatedEmoji)
                this.shuffleEmojis(this.emojis)
                this.incrementScore()
                // return {
                //     ...state,
                //     user:user,
                //     authError:null,
                //     loading:false
                // }
            }
            else{ 
                this.gameOver=true
                this.gameOverChanged.next(this.gameOver)
                console.log(this.gameOver)
                this.updateGameStatus()
            }
            
            
        // case AuthActions.LOGOUT:
        //     return {
        //         ...state,
        //         user:null
        //     }
        // case AuthActions.SIGNUP_START:
        // case AuthActions.LOGIN_START:
        //     return {
        //         ...state,
        //         authError:null,
        //         loading:true
        //     }
        
        // case AuthActions.AUTHENTICATE_FAIL:
        //        return {
        //         ...state,
        //         authError:action.payload,
        //         user:null,
        //         loading:false
                    
        //     }
        // case AuthActions.CLEAR_ERROR:
        //     return {
        //         ...state,
        //         authError:null,
        //         loading:false
        //     }
        default:
            return state  
    }
}