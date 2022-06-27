import { Component, OnInit } from '@angular/core';
import { IPostResponse } from 'src/app/core/models/post';

import { PostService } from 'src/app/core/services/post.service';


@Component({
    selector: 'user-posts',
    template: `
        <user-post [posts]="postResponse.results"></user-post>`
        
 })

export class Posts implements OnInit {
    
    get postResponse(): IPostResponse{
        return this.postService.getPosts();
    }
    constructor(private postService: PostService ) { }

    ngOnInit() {
    }
}