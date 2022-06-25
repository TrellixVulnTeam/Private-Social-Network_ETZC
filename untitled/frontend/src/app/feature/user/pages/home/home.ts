import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">PSN</a>
        </nav>
        <user-posts></user-posts>`
})

export class Home implements OnInit {
    constructor() { }

    ngOnInit() { }
}