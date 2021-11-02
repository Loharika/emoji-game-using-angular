   
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";  
import { EmojiGameDashboardComponent } from "./emoji-game-dashboard/emoji-game-dashboard.component"; 
import { EmojiCardComponent } from "./emoji-list/emoji-card/emoji-card.component";
import { EmojiListComponent } from "./emoji-list/emoji-list.component";
import { GameDrawComponent } from "./result-view/game-draw-page/game-draw-page.component";
import { GameLoseComponent } from "./result-view/game-lose-page/game-lose-page.component";
import { GameWonComponent } from "./result-view/game-won-page/game-won-page.component";
import { ResultViewComponent } from "./result-view/result-view.component";

@NgModule({
    declarations:[
        EmojiGameDashboardComponent,
        EmojiListComponent,
        EmojiCardComponent,
        ResultViewComponent,
        GameDrawComponent,
        GameWonComponent,
        GameLoseComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class EmojiGameModule {
    
}