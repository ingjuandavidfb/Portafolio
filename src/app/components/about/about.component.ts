import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule]
})
export class AboutComponent {
  
  features = [
    'APIs REST con Spring Boot',
    'Frontend con Angular',
    'Bases de Datos SQL',
    'Arquitectura de Microservicios'
  ];

  
}
