import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarDbService, handleGetCarByID } from './services/car-db.service';
import { FireauthService } from './services/fireauth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  carService = inject(CarDbService)
  authService = inject(FireauthService)

  title = 'dataconnect';
  id = '11111111222233334444555555555555'
  car_make = ''
  car_color =''
  
  createAccount() {
    this.authService.register(
      'testman@gmailtest.com',
      'testmanUname',
      'testmanPass'
    ).subscribe({
      next: () => {
        console.log('success')
      },
      error: (err) => {
        alert(err.code)
      },
    })
  }

  resolvePromise() {
    console.log(handleGetCarByID(this.id))
  }
} 
