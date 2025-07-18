import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.services';
import { Profile } from '../../../../models/Profile';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';
  public passType: string = 'password';
  public loading: boolean = false;
  public error: string = '';

  constructor(private profileService: ProfileService) {
    this.profileService.clearProfile(); // Limpiar sesión anterior si existe
  }

  clearInputText(field: 'email' | 'password'): void {
    if (field === 'email') this.email = '';
    else this.password = '';
  }

  changePassType(): void {
    this.passType = this.passType === 'password' ? 'text' : 'password';
  }

  loginWithEmail(): void {
    this.error = '';
    this.loading = true;

    // Simulación de login (puedes conectar a una API en el futuro)
    if (this.email === 'admin@email.com' && this.password === 'admin123') {
      const profile: Profile = {
        id: 1,
        nombre: 'Administrador',
        email: this.email
      };
      this.profileService.setProfile(profile);
      window.location.href = '/admin';
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }

    this.loading = false;
  }
}
