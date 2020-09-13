import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.components.html'
})

export class bodyComponent{

    mostrar = true;
    gente: string[] = ["Silvia","Ricarda","Luisa"];
    frase: any= {
        nombre: 'Jose Ignacio',
        mensaje: 'Estoy aprendiendo sobre angular, Genial!!!!!'
    };

}