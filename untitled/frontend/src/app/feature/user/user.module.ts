import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Home } from './pages/home/home';

import { Posts } from './pures/posts/posts';
import { Post } from './pures/post/post';
import { CommonModule } from '@angular/common';




const userRoutes: Routes = [
  { path:'', component: Home },
//   { path: 'post/:id', component: PostPage },
];

@NgModule({
  declarations: [
    Home,

   Posts , Post,
  ],
  imports: [
    RouterModule.forChild(userRoutes),

    CommonModule
  ],
  exports: [
    RouterModule
],

})
export class UserModule { }
