import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//ng if switch etc componentes de angular
import { MainPageComponent } from './pages/main-pages.component';
import { FormsModule } from '@angular/forms';//es para los formularios


import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [MainPageComponent,ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
