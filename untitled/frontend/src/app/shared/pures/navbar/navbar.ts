import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'shared-navbar',
    templateUrl: 'navbar.html',
})

export class Navbar implements OnInit {
    constructor() { }

    @Output() valueChange  = new EventEmitter();

    ngOnInit() {}

    public valueChanged(){
            this.valueChange.emit('show')
    }
}