import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PostsComponent,
    SignupComponent,
    LoginComponent,
    CreatePostComponent,

    PageNotFoundComponent,
    PrivacyComponent,
    AgreementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
