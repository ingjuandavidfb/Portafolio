import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  
  skillCategories = [
    {
      title: 'Backend',
      icon: 'bi-server',
      color: 'text-primary',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate']
    },
    {
      title: 'Frontend',
      icon: 'bi-code-slash',
      color: 'text-success',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Angular Material']
    },
    {
      title: 'Base de Datos',
      icon: 'bi-database',
      color: 'text-purple',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Herramientas',
      icon: 'bi-tools',
      color: 'text-warning',
      skills: ['Maven', 'Docker', 'Git', 'IntelliJ IDEA']
    }
  ];
}
