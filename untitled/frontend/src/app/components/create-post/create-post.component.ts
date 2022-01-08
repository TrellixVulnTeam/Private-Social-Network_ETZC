import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  imageForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });
  imageData: Object;
  imagePost: Boolean = false;
  form: FormGroup;
  path: string = '';
  imageSrc : string;
  

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.form = this.createFormGroup();
  }




  activateImagePost() {
    this.imagePost = true;
  }

  activateTextPost() {
    this.imagePost = false;
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(140),
      ]),
    });
  }
  
  onFileChanged(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      this.imageForm.patchValue({
        fileSource: file,
      });
      this.imagePost = true;
    }
    
  }

  getPath(obj: any) {
    this.path = obj.path;
  }

  onSubmit(formData: Pick<Post, 'title' | 'body'>): void {
    if (this.imagePost) {
      const uploadData = new FormData();
      uploadData.append('upload', this.imageForm.get('fileSource').value);
      this.http
        .post('http://localhost:3306/upload', uploadData)
        .subscribe((res) => {
          this.imageData = res;
          this.getPath(this.imageData);
          this.postService
            .createImagePost(formData, this.path, this.authService.userId)
            .pipe(first())
            .subscribe(() => {});
          this.form.reset();
        });
    } else {
      this.postService
        .createTextPost(formData, this.authService.userId)
        .pipe(first())
        .subscribe(() => {});
      this.form.reset();
    }
  }
}
