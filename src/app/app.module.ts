import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './pages/news/news.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    NewsComponent,
    ClimaComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    SignupComponent,
    ContactComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
