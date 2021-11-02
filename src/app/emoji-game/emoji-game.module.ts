   
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";  
import { EmojiGameDashboardComponent } from "./emoji-game-dashboard/emoji-game-dashboard.component"; 
import { EmojiCardComponent } from "./emoji-list/emoji-card/emoji-card.component";
import { EmojiListComponent } from "./emoji-list/emoji-list.component";
@NgModule({
    declarations:[
        EmojiGameDashboardComponent,
        EmojiListComponent,
        EmojiCardComponent,
 
    ],
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class EmojiGameModule {
    
}