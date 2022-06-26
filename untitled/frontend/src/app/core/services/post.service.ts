import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, IPostResponse } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class PostService {

    private userPosts: IPost[] = []
    // private postResponse: IPostResponse = {
    //     results: [],
    //     info:{}
    // }
    postResponse: any

    private loadPosts(): void {
        this.httpClient.get<IPostResponse>(`${this.baseUrl}/mocks/posts.json`)
        .subscribe (result => {
            let x = result;
            this.postResponse = result

        })
    }

    private readonly baseUrl = '/assets'
    constructor(private httpClient: HttpClient) {
        this.loadPosts();
     }

     getPosts():IPostResponse {
        return this.postResponse
     }

  
        
}