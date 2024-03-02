import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

export const routes: Routes = [
    { path:'auth',
     loadChildren:()=> import("./auth/auth.module").then(m=> m.AuthModule)

    },{
        path:'navab',
        loadChildren:()=> import('./navbars/navbars.module').then(m=>m.NavbarsModule)
    },
    {
        path:'**',
        redirectTo:'auth'
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }