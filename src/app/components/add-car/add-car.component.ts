import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FireauthService } from '../../services/fireauth.service';
import { handleAddCar } from '../../services/car-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  authService = inject(FireauthService)
  router = inject(Router)


  onSubmit(form: NgForm) {
    handleAddCar(
      form.value.make,
      form.value.model,
      form.value.color,
      form.value.releaseYear,
      false
    )

    this.router.navigateByUrl('/')
  }
}
