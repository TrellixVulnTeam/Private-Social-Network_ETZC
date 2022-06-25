import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post';

@Component({
    selector: 'user-post',
    template: `
         <p>{{post.title}}</p>
         <p>{{post.subtitle}}</p>
         <p>{{post.body}}</p> `
})

export class Post implements OnInit {
    @Input() post: IPost
    constructor() { }


    ngOnInit() { }
}