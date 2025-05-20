import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.username === '' && this.password === '') {
      localStorage.setItem('token', '123');
      this.errorMessage = '';
      this.navCtrl.navigateRoot('/home');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}

