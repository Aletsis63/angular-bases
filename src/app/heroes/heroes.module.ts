import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';




@NgModule({

  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule]//agrege common module para que funicone ngif y eso de angular
})
export class HeroesModule {}
