import { Component, inject, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { handleAddCar, handleDeleteCarById, handleListCarByID, handleUpdateCar } from '../../services/car-db.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/carModel';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent implements OnInit {
  authService = inject(FireauthService)
  id = ''
  currCar: Car = {
    id: '',
    make: '',
    model: '',
    releaseYear: 0,
    color: '',
    electric: false
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(id){
      this.id = id
    }
    else {
      this.router.navigateByUrl('/')
    }
    handleListCarByID(this.id).then((data) => {
      if (data){
        var rel_year = 0
        var elect = false
        if(!data.releaseYear){
          rel_year = 2000
        }
        else{
          rel_year = data.releaseYear
        }
        if(!data.electric){
          elect = false
        }
        else {
          elect = true
        }
        this.currCar = {
          id: data.id,
          make: data.make,
          model: data.model,
          releaseYear: rel_year,
          color: data.color,
          electric: elect
        }
        console.log(this.currCar)
      } else {
        console.error('No cars found')
        alert('car id not found')
        this.router.navigateByUrl('/')
      }
    })
  }
}
