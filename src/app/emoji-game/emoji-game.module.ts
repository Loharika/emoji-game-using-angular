   

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";  
import { EmojiGameDashboardComponent } from "./emoji-game-dashboard/emoji-game-dashboard.component"; 

@NgModule({
    declarations:[
        EmojiGameDashboardComponent],
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class EmojiGameModule{

}