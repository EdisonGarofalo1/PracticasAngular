import { NgModule } from '@angular/core';
import{Routes , RouterModule} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  
  {
       path:'',
      children:[{
   
  path:'navbar',
  component:NavbarComponent


},
  {
    path:'**',
    redirectTo:'navbar'
  }
      ]}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class NavbarsRoutingModule { }
