import { Component, inject, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service';
import { Car } from '../../models/carModel';
import { handleDeleteCarById, handleListAllCars } from '../../services/car-db.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  cars: Car[] = [];
  signedInBool = false

  ngOnInit(): void {
    // get list of all cars, store it in an array
    this.getAllCars()

    this.authService.user$.subscribe((user: any)=>{
      if(user) {
        this.signedInBool = true
        console.log('logged in')
      }
      else {
        this.signedInBool = false
        console.log('not logged in')
      }
    })
  }
  authService = inject(FireauthService)
  router = inject(Router)

  getAllCars() {
    handleListAllCars().then((data) => {
      if (data){
        this.cars = data.map((item: any) => ({
          id: item.id,
          make: item.make,
          model: item.model,
          releaseYear: item.releaseYear,
          color: item.color,
          electric: item.electric
        }));
      } else {
        console.error('No cars found')
      }     
    });
  }

  delCar(id: string | undefined) {
    if (!id) return
    handleDeleteCarById(id).then(() => {
      this.getAllCars()
    })
  }

  editCar(id: string | undefined) {
    if (!id) return
    console.log(id)
    this.router.navigateByUrl('/edit-car/' + id)
  }


  addCar() {
    if(!this.signedInBool){
      alert('login to change database')
    }
    else {
      this.router.navigateByUrl('/add-car')
    }
  }

  loginTestUser() {
    this.authService.login('testlogin@gmail.com', 'testLoginGmail')
  }
} 
