
import { EmojiModel } from "../emoji.model";
import * as  EmojiGameActions  from "./emoji-game.actions";
const data=[
    {
        id:0,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
        checked:false,
    },
    {
        id:1,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
        checked:false
    },
    {
        id:2,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
        checked:false
    },
    {
        id:3,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
        checked:false
    },
    {
        id:4,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
        checked:false
    },
    {
        id:5,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
        checked:false
    },
    {
        id:6,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
        checked:false
    },
    {
        id:7,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
        checked:false
    },
    {
        id:8,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
        checked:false
    },
    {
        id:9,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
        checked:false
    },
    {
        id:10,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
        checked:false
    },
    {
        id:11,
        imgUrl:'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
        checked:false
    },
    
]
export interface State{
    emojis:EmojiModel[],  
    score:number
    topScore:number
    gameStatus:string  //WON LOSE DRAW
    gameOver:boolean
}

const initialState={
    emojis:[...data.map(emoji=>new EmojiModel(emoji.id,emoji.imgUrl,emoji.checked))],
    score:0,
    topScore:0,
    gameOver:false,
    gameStatus:'WON' //WON LOSE DRAW
} 

const shuffleEmojis=(array)=>{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function emojiGameReducer(state=initialState,action:EmojiGameActions.EmojiGameActions){
    switch(action.type){
        case EmojiGameActions.EMOJI_STATUS:
            const clickedEmojiId=action.payload.id
            const clickedEmoji=state.emojis.find(emoji=>emoji.id===clickedEmojiId)
            const clickedEmojiIndex=state.emojis.findIndex(emoji=>emoji.id===clickedEmojiId)
            if(!clickedEmoji.checked){
                const updatedEmoji=new EmojiModel(clickedEmojiId,clickedEmoji.imgUrl,true)
                const updatedEmojis=[...state.emojis]
                updatedEmojis[clickedEmojiIndex]=updatedEmoji
                shuffleEmojis(this.emojis)
                return {
                    ...state,
                    emojis:[...updatedEmojis],
                    score:state.score+1
                }
            }
            else{ 
                const updatedGameStatus=(state.score>state.topScore)?'WON':(state.score===state.topScore?'DRAW':'LOSE')
                return {
                    ...state,
                    topScore:state.score>=state.topScore?state.score:state.topScore,
                    gameOver:true,
                    gameStatus:updatedGameStatus,
                    score:0,
                    emojis:[...data.map(emoji=>new EmojiModel(emoji.id,emoji.imgUrl,emoji.checked))]
                }    
            }
        default:
            return state  
    }
}