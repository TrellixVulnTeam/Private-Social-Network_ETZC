import { Component, OnInit } from '@angular/core';
import { IPost, IPostResponse } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';


@Component({
    selector: 'user-posts',
    template: `
      <h1>Posts works!</h1> 
      <user-post post=post *ngFor="let post of results"></user-post>
     `
 })

export class Posts implements OnInit {
    results: any
    response: any
    constructor(private postService: PostService ) { }

    ngOnInit() {
        this.fetchAll()
        console.log(this.response)

     }
    
    fetchAll(){
        this.postService.fetchAll()
            .subscribe(
                data => {
                    this.response = data
                    let x = this.response.results
                    console.log(x, 'x')
                }
            ) 
        
    }
}