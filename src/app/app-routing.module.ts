import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MassageComponent } from './massage/massage.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './auth.guard';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:"" ,component:AboutComponent},
  {path:'dashbord',component:ProfileComponent},
  {path:'login',component:SigninComponent},
  {path:'skills',component:SkillsComponent},
  {path:'massage',component:MassageComponent,canActivate:[ authGuard]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
