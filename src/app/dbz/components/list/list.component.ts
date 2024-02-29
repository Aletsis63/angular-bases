
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent  {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  //este decorador sirve para recibir argumentos del padre
    @Input()//puede recibir una property characetrlist
    public characerList: Character[] = [{//si no le llega nada usara este
      name:'trunks',
      power: 10,
    }];

    public onDeleteCharacter(id?:string): void {
      // TODO: Emitir el ID del personaje
      console.log(id);

      if(!id) return;//COMO EL ID ES OPCIONAL SI NO EXISTE NO HAGO NADA
      this.onDeleteId.emit(id);//emitir esto pra poder manejar el dato desde otro componente
    }
}
