import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { EmojiModel } from './emoji.model';

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

@Injectable()
export class EmojiService implements OnInit{
  emojissChanged =new Subject<EmojiModel[]>();
  scoreChanged= new Subject<number>()
  topScoreCanged=new Subject<number>()
    gameStatusChanged=new Subject<boolean>()
    gameOverChanged=new Subject<boolean>()
  public emojis:EmojiModel[] 
  public score:number
  public topScore:number
    public gameStatus:string  //WON LOSE DRAW
    public gameOver:boolean
    constructor(){
        this.emojis=[...data.map(emoji=>new EmojiModel(emoji.id,emoji.imgUrl,emoji.checked))]
        this.score=0
        this.topScore=1000
        this.gameOver=false
        this.gameStatus='WON' //WON LOSE DRAW
    }
    ngOnInit(){
        
    }
    shuffleEmojis=(array)=>{
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    updateEmojiStatus=(id:number)=>{
        const clickedEmoji=this.emojis.find(emoji=>emoji.id===id)
        const clickedEmojiIndex=this.emojis.findIndex(emoji=>emoji.id===id)
        if(!clickedEmoji.checked){
            const updatedEmoji=new EmojiModel(id,clickedEmoji.imgUrl,true)
            this.emojis.splice(clickedEmojiIndex,1,updatedEmoji)
            this.shuffleEmojis(this.emojis)
            this.incrementScore()
        }
        else{ 
            this.gameOver=true
            this.gameOverChanged.next(this.gameOver)
            console.log(this.gameOver)
            this.updateGameStatus()
        }
    }

    updateGameStatus=()=>{
        if(this.score>this.topScore){
            this.gameStatus='WON'
            this.updateTopScore()
        }
        else{
            
            if(this.score===this.topScore){
                this.gameStatus='DRAW'
            }
            else {
                this.gameStatus='LOSE'
            }
            this.intializeScore()
        }
        
    }

    incrementScore=()=>{
        this.score+=1
    }
   
    intializeScore=()=>{
        this.score=0
    }

    updateTopScore=()=>{
        this.topScore=this.score
        this.intializeScore()
    }

}
