import { Injectable } from '@angular/core';

import { listCarById, ListCarByIdData } from '../car-generated';

@Injectable({
  providedIn: 'root'
})
export class CarDbService {

  constructor() { }

  test_func() {
    console.log('service is not gaslighting me into thinking it dont exist')
  }
}

export const handleGetCarByID = async (
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
