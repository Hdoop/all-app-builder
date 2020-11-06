import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { OpenLayoutComponent } from './open-layout/open-layout.component';
import { FormsModule } from '@angular/forms';
import { CrmLayoutComponent } from './crm-layout/crm-layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([]),
    FormsModule
  ],
  exports: [
    //MainLayoutComponent,
    //OpenLayoutComponent
  ],
  declarations: [
    //MainLayoutComponent,
    //OpenLayoutComponent
    //CrmLayoutComponent
]
})
export class LayoutModule { }
