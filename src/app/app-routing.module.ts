import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard/auth.guard.service';


const routes: Routes = [
      // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'home',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
        ]//,
        //canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
