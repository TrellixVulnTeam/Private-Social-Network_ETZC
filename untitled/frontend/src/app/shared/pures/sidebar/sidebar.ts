import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-sidebar',
    templateUrl: 'sidebar.html',
    styles: [`
    /* .example-container {
      width: 500px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
     */
    .example-sidenav-content {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    
    .example-sidenav {
      padding: 20px;
    }`]
})

export class Sidebar implements OnInit {
    showFiller = false;
    constructor() { }

    ngOnInit() { }
}