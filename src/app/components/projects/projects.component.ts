import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  
  projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'API REST completa para gestión empresarial con autenticación JWT, roles de usuario y dashboard administrativo desarrollado en Angular.',
      image: '/assets/images/modern-web-dashboard.png',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'JWT'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'API de Microservicios',
      description: 'Arquitectura de microservicios con Spring Boot para un sistema de inventario, incluyendo gateway, discovery service y configuración centralizada.',
      image: '/assets/images/task-management-app.png',
      technologies: ['Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Docker'],
      githubUrl: '#',
      demoUrl: '#'
    }
  ];
}
