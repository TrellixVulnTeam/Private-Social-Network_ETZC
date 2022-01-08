import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

import { faThumbsUp, faThumbsDown, faStar, faPlus, faBackspace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  userId: Pick<User, 'id'>;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faStar = faStar;
  faPlus = faPlus;
  faBackspace = faBackspace;

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Post[]> {
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  delete(postId: Pick<Post, 'id'>): void {
    this.postService
      .deletePost(postId)
      .subscribe(() => (this.posts$ = this.fetchAll()));
  }

  like(postId){
    console.log(postId)
  }

  dislike(postId){
    console.log(postId)
  }
  
  save(postId){
    console.log(postId)
  }
}
