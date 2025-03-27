import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { Acerca2Component } from './pages/acerca2/acerca2.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', component: NotfoundComponent },
  { path: 'acerca2', component: Acerca2Component },
  { path: 'clima', component: ClimaComponent },
  { path: 'news', component: NewsComponent },
  // { path: 'path', component: NameComponent },
  // enrutar cada componente 
  
  // a-eage ()
  //esto establece la ruta inicial predeterminada
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
