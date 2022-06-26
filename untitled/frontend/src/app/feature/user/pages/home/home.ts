import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <shared-navbar></shared-navbar>
        <shared-sidebar></shared-sidebar>
        <user-posts></user-posts>`
})

export class Home implements OnInit {
    constructor() { }

    ngOnInit() { }
}