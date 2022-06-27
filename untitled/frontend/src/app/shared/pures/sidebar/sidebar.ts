import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-sidebar',
    templateUrl: 'sidebar.html',
    styles: []
})

export class Sidebar implements OnInit {

  @Input() show: boolean;

    offcanvas =  'offcanvas offcanvas-top show';

    constructor() { }

    ngOnInit() { }
}