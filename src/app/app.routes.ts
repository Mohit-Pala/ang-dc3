import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

export const routes: Routes = [
    {path : '', component:HomepageComponent},
    {path : 'add-car', component:AddCarComponent},
    {path : 'edit-car/:id', component:EditCarComponent}
];
