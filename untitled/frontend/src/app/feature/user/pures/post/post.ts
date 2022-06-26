import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post';

@Component({
    selector: 'user-post',
    template: `

    <!-- <div class = container *ngFor="let post of posts">
        <p>{{post.title}}</p>
        <p>{{post.subtitle}}</p>
        <p>{{post.body}}</p> 
    </div> -->
<div class="d-flex flex-column align-items-center">
<mat-card class="my-4" style=" max-width: 400px;" *ngFor="let post of posts" >
        <mat-card-header>

            <mat-card-title>{{post.title}}</mat-card-title>
            <mat-card-subtitle>{{post.subtitle}}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
            <p>{{post.body}} <i class="fa-solid fa-user"></i></p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="accent">LIKE</button>
            <button mat-raised-button color="primary" >SHARE</button>
        </mat-card-actions>
    </mat-card>
</div>
    
 `
})

export class Post implements OnInit {
    @Input() posts: IPost
    constructor() { }


    ngOnInit() { }
}