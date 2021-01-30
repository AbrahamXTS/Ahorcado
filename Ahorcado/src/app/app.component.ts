import { Component, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  // Palabra que va a adivinar.
  palabra = 'AHORCADO';
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor() {
    
    // Repite el guión bajo por cada letra que contenga nuestra palabra
    this.palabraOculta = '_ '.repeat(this.palabra.length);
    
  }

  comprobar( letra ) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {

      // Si la letra ingresa se encuentra en la palabra.
      if (this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;
      } 
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();

  }

  verificaGane() {

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
    }

    if (this.intentos >= 9) {
      this.perdio = true;
    }
  }

  existeLetra( letra ) {

    // Comprueba si la letra existe
    if (this.palabra.indexOf(letra) >= 0) {
    }
    else {
      this.intentos ++;
    }
  }
}
