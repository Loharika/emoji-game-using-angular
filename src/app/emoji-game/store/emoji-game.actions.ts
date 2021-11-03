import { Action } from "@ngrx/store"

export const EMOJI_STATUS='[emoji-game] Emoji Status'
export const GAME_START='[emoji-game] Game Start'
export const GAME_OVER='[emoji-game] Game Over'
export const INTIALIZE_SCORE='[emoji-game] Intialize Score'
export const INTIALIZE_TOP_SCORE='[emoji-game] Intialize Top Score'
export const INCREMENT_SCORE='[emoji-game] Increment Score'
export const UPDATE_TOP_SCORE='[emoji-game] Update Top Score'
export const UPDATE_GAME_STATUS='[emoji-game] Update Game Status'

export class EmojiStatus implements Action{
    readonly type=EMOJI_STATUS
    constructor(public payload:{id:number}){}
}
export class GameStart implements Action{
    readonly type=GAME_START
}
export class GameOver implements Action{
    readonly type=GAME_OVER
}
export class IncrementScore implements Action{
    readonly type=INCREMENT_SCORE
}
export class UpdateTopScore implements Action{
    readonly type=UPDATE_TOP_SCORE
}
export class UpdateGameStatus implements Action{
    readonly type=UPDATE_GAME_STATUS
}

export type EmojiGameActions=EmojiStatus
| GameStart
| GameOver
| IncrementScore
| UpdateTopScore
| UpdateGameStatus



// export const LOGIN_START='[Auth] Login Start'
// export const AUTHENTICATE_SUCCESS='[Auth] Login'
// export const LOGOUT='[Auth] Logout'
// export const AUTHENTICATE_FAIL='[Auth] Login Fail'
// export const SIGNUP_START='[Auth] Signup Start'
// export const CLEAR_ERROR='[Auth] Clear Error'
// export const AUTO_LOGIN='[Auth] Auto Login'

// export class AuthenticateSuccess implements Action{
//     readonly type=AUTHENTICATE_SUCCESS

//     constructor(public payload:{email:string,
//         userId:string,
//         token:string,
//         expirationDate:Date,
//         redirect:boolean}){

//     }
// }

// export class Logout implements Action{
//     readonly type=LOGOUT
// }

// export class LoginStart implements Action{
//     readonly type=LOGIN_START
//     constructor(public payload:{email:string,password:string}){}
// }

// export class AuthenticateFail implements Action{
//     readonly type=AUTHENTICATE_FAIL
//     constructor(public payload:string){}
// }

// export class SignupStart implements Action{
//     readonly type=SIGNUP_START
//     constructor(public payload:{email:string,password:string}){}
// }
// export class ClearError implements Action{
//     readonly type=CLEAR_ERROR
// }
// export class AutoLogin implements Action{
//     readonly type=AUTO_LOGIN
// }

// export type AuthActions=AuthenticateSuccess 
// | Logout 
// | LoginStart 
// | AuthenticateFail 
// | SignupStart
// | ClearError

