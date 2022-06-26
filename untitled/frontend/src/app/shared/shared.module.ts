import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from './pures/navbar/navbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Sidebar } from './pures/sidebar/sidebar';


@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,

        MatCardModule, MatButtonModule, MatSidenavModule
    ], 
    exports: [
        CommonModule, FormsModule, 

        MatCardModule, MatButtonModule,
        
        Navbar, Sidebar]
        
        ,
    declarations: [Navbar, Sidebar],
    providers: [],
})
export class SharedModule { }
