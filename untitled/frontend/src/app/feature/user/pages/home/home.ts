import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `

   
        <shared-navbar (valueChange)="displaySidebar($event)"></shared-navbar>
        <shared-sidebar [show]="sidebar"></shared-sidebar> 
        <user-posts></user-posts>
       
        <!-- <button  class="btn btn-primary" (click)="toggleSidebar()"> SHOW</button> -->

        `
 
})

export class HomePage implements OnInit {

    sidebar: boolean = false
    constructor() { }

    ngOnInit() { }

    displaySidebar(count){
       this.sidebar = !this.sidebar
    }
}