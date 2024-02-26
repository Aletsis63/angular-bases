import { Component, NgModule } from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',


})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

get capitalizedName():string {
  return this.name.toUpperCase();
}

getHeroDescription():string {
  return `${this.name} - ${this.age}}`;
}

changeHero():void {
  this.name = "Spiderman"
}

changeName():void {
  this.age = 20;
}

resetForm():void {
this.name = "ironman";
this.age = 45;
}

}

