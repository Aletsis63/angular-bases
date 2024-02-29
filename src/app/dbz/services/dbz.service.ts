import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1,
  }, {
    id: uuid(),
    name: 'goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'vegeta',
    power: 10000,
  }

];

addNewCharacter(character:Character): void {

  const newCharacter:Character = {id: uuid(), ...character}//con el operador spreed le digo que lo asigne todo lo quet iene dentro excepto el uuid que estoy asignando
  this.characters.push(character);//aqui  agrego el caracter que me llego desde el emitt a la tabla increible es lo del decorador de output

}

// onDeleteCharacter(index:number):void{
//   this.characters.splice(index,1);//que borre solo 1
// }
DeleteCharacterById(id:string):void{
  this.characters = this.characters.filter(character => character.id !== id);
}

}
