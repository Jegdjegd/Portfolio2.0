import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';



@Component({
    selector: 'app-acerca-de',
    imports: [ClipboardModule],
    templateUrl: './acerca-de.component.html',
    styleUrl: './acerca-de.component.css'
})
export class AcercaDeComponent {

  email = "jhoannegd@gmail.com";
  
  copyText(){
    alert(`El email ${this.email} fue copiado exitosamente`)
  }

}
