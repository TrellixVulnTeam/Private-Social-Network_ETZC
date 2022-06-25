import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './services/auth-guard.service';

// import { HomeComponent } from './components/home/home.component';
// import { PostsComponent } from './components/posts/posts.component';
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { PrivacyComponent } from './pages/privacy/privacy.component';
// import { AgreementComponent } from './pages/agreement/agreement.component';
// import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  { path:'', loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)}];

  // { path: '', component: HomeComponent },
//   { path: 'homepage', component: HomeComponent },
//   { path: 'posts', component: PostsComponent},
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]  },
//   { path: 'privacy', component: PrivacyComponent },
//   { path: 'agreement', component: AgreementComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
