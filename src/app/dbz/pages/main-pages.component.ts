import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

constructor(private dbzService: DbzService) {}//esto es como si creara una propiedad, sirve para inyrccion de dependecias de esta manera

//todo esto que acabo de hacer es para configurar nuestro servicio genial no
get characters(): Character[]{
  return [...this.dbzService.characters];
}

onDeleteCharacter(id: string):void{
  this.dbzService.DeleteCharacterById(id);

}

onNewCharacter(character: Character) {
  this.dbzService.addNewCharacter(character);
}

}
//la inyeccion de dependecias esta bien poderosaaa para guardar la logica
