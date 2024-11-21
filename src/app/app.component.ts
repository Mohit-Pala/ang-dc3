import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { handleListAllCars } from './services/car-db.service';
import { FireauthService } from './services/fireauth.service';
import { Car } from './models/carModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  authService = inject(FireauthService)

  title = 'dataconnect';
  cars: Car[] = [];

  ngOnInit(): void {
    this.resolvePromise();
  }


  resolvePromise() {
  }

  printData() {
    console.log(this.cars);
  }
} 
