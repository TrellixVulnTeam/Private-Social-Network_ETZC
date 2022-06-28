import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Navbar } from './pures/navbar/navbar';
import { Sidebar } from './pures/sidebar/sidebar';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule, 

        MatCardModule, MatButtonModule, MatSidenavModule, MatInputModule,MatFormFieldModule, 
    ], 
    exports: [
        CommonModule, 

        MatCardModule, MatButtonModule, MatSidenavModule,MatButtonModule,MatInputModule,  MatFormFieldModule,
        
        Navbar, Sidebar]
        
        ,
    declarations: [Navbar, Sidebar],
    providers: [],
})
export class SharedModule { }
