import { Injectable } from '@angular/core';

import { createCar, CreateCarData, deleteCar, listCarById, ListCarByIdData, listCars, ListCarsData } from '../car-generated';

@Injectable({
  providedIn: 'root'
})
export class CarDbService {

  constructor() { }

  test_func() {
    console.log('service is not gaslighting me into thinking it dont exist')
  }
}

export const handleListCarByID = async (
  id: string
): Promise<ListCarByIdData["car"] | null> => {
  try {
    const response = await listCarById({ id: id });
    if (response.data.car) {
      return response.data.car;
    }
    return null;
  } catch (error) {
    console.error("Error fetching car:", error);
    return null;
  }
};

export const handleListAllCars = async (

): Promise<ListCarsData["cars"] | null> => {
  try {
    const response = await listCars({});
    if (response.data.cars) {
      return response.data.cars;
    }
    return null;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
};

export const handleDeleteCarById = async (
  id: string
): Promise<void> => {
  try {
    const response = await deleteCar({ id: id }); // Assuming deleteCarById is imported
  } catch (error) {
    console.error("Error deleting car:", error);
  }
};


import { updateCar, UpdateCarData } from '../car-generated'; // Import necessary types
import { provideFirebaseApp } from '@angular/fire/app';

export const handleUpdateCar = async (
  id: string,
  make: string,
  model: string,
  color: string,
  releaseYear: number,
  electric: boolean
): Promise<UpdateCarData["car_update"] | null> => {
  try {
    const response = await updateCar({
      id: id,
      make: make,
      model: model,
      color: color,
      releaseYear: releaseYear,
      electric: electric
    });
    if (response.data.car_update) {
      return response.data.car_update;
    }
    return null;
  } catch (error) {
    console.error("Error updating car:", error);
    return null;
  }
};

export const handleAddCar = async (
  id: string,
  make: string,
  model: string,
  color: string,
  releaseYear: number,
  electric: boolean
): Promise<CreateCarData["car_insert"] | null> => {
  try {
    const response = await createCar({
      id: id,
      make: make,
      model: model,
      color: color,
      releaseYear: releaseYear,
      electric: electric
    });
    if (response.data.car_insert) {
      return response.data.car_insert;
    }
    return null;
  } catch (error) {
    console.error("Error inserting car:", error);
    return null;
  }
};