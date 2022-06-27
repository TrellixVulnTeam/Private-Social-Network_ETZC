import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
    templateUrl: 'createPost.html'
})

export class CreatePostPage implements OnInit {

    form:FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = this.createFormGroup();
     }

    createFormGroup(): FormGroup {
    return new FormGroup({
        title: new FormControl('', [
        ]),
        subtitle: new FormControl('', [
        ]),
        body: new FormControl('', [
        ]),
    });
    }

    onSubmit(formData){
        console.log(formData)
    }
}