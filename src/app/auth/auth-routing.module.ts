import { NgModule } from '@angular/core';
import{Routes , RouterModule} from '@angular/router'
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
  
  {
       path:'',
      children:[{
   
  path:'login',
  component:LoginComponent

},
  {
    path:'**',
    redirectTo:'login'
  }
      ]}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

  
})
export class AuthRoutingModule { }
