import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmojiGameDashboardComponent } from "./emoji-game/emoji-game-dashboard/emoji-game-dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component"; 
const appRoutes:Routes=[
    {path:'',redirectTo:'/emoji-game',pathMatch:'full'},
    {path:'emoji-game',component:EmojiGameDashboardComponent },
    {path:'**',component:NotFoundComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}