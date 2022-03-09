import { DataStorageService } from './data-storage.service';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    AlertComponent,
    CommonModule
  ]
})
export class SharedModule { }
