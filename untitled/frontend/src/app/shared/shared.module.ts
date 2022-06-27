import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Navbar } from './pures/navbar/navbar';
import { Sidebar } from './pures/sidebar/sidebar';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
    imports: [
        CommonModule, 

        MatCardModule, MatButtonModule, MatSidenavModule
    ], 
    exports: [
        CommonModule, 

        MatCardModule, MatButtonModule, MatSidenavModule,
        
        Navbar, Sidebar]
        
        ,
    declarations: [Navbar, Sidebar],
    providers: [],
})
export class SharedModule { }
