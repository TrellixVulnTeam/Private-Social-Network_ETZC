import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
    private readonly baseUrl = '/assets'
    constructor(private http: HttpClient) { }

    fetchAll() {
        return this.http.get(`${this.baseUrl}/mocks/posts.json`)
    
}}