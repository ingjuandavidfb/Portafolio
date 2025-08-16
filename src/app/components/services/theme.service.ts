import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.setTheme(isDark);
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkModeSubject.value;
    this.setTheme(!currentTheme);
  }

  private setTheme(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    
    if (isDark) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}
