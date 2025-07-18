import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OAuth2Service {

  login(email: string, password: string): boolean {
    // Lógica de prueba 
    if (email === 'admin@demo.com' && password === 'admin123') {
      localStorage.setItem('profile', JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('profile');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('profile');
  }
}
