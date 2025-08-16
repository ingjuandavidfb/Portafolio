import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  sendMessage(): void {
    // Implementar envío de mensaje
    console.log('Enviando mensaje...');
  }

  downloadCV(): void {
    // Implementar descarga de CV
    console.log('Descargando CV...');
  }
}
