import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Posts } from './pures/posts/posts';
import { Post } from './pures/post/post';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './pages/home/home';
import { CreatePostPage } from './pages/create-post/createPost';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





const userRoutes: Routes = [
  { path:'', component: HomePage },
  { path: 'create-post', component: CreatePostPage },
];

@NgModule({
  declarations: [
    HomePage, CreatePostPage, 

   Posts , Post,
  ],
  imports: [
    RouterModule.forChild(userRoutes),

    SharedModule, ReactiveFormsModule, FormsModule
  ],
  exports: [
    RouterModule
],

})
export class UserModule { }
