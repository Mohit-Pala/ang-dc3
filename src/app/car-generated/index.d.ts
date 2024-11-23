import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export enum OrderDirection {

  ASC = "ASC",

  DESC = "DESC",

}


export interface Car_Key {
  id: UUIDString;
  __typename?: 'Car_Key';
}

export interface CreateCarData {
  car_insert: Car_Key;
}

export interface CreateCarVariables {
  id: UUIDString;
  make: string;
  model: string;
  releaseYear?: number | null;
  color: string;
  electric?: boolean | null;
}

export interface DeleteCarData {
  car_delete?: Car_Key | null;
}

export interface DeleteCarVariables {
  id?: UUIDString | null;
}

export interface ListCarByIdData {
  car?: {
    id: UUIDString;
    make: string;
    model: string;
    releaseYear?: number | null;
    color: string;
    electric?: boolean | null;
  } & Car_Key;
}

export interface ListCarByIdVariables {
  id?: UUIDString | null;
}

export interface ListCarsData {
  cars: ({
    id: UUIDString;
    make: string;
    model: string;
    releaseYear?: number | null;
    color: string;
    electric?: boolean | null;
  } & Car_Key)[];
}

export interface ListCarsVariables {
  orderByModel?: OrderDirection | null;
  orderByRelYear?: OrderDirection | null;
  limit?: number | null;
}

export interface UpdateCarData {
  car_update?: Car_Key | null;
}

export interface UpdateCarVariables {
  id: UUIDString;
  make: string;
  model: string;
  releaseYear?: number | null;
  color: string;
  electric?: boolean | null;
}



/* Allow users to create refs without passing in DataConnect */
export function listCarsRef(vars?: ListCarsVariables): QueryRef<ListCarsData, ListCarsVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listCarsRef(dc: DataConnect, vars?: ListCarsVariables): QueryRef<ListCarsData,ListCarsVariables>;

export function listCars(vars?: ListCarsVariables): QueryPromise<ListCarsData, ListCarsVariables>;
export function listCars(dc: DataConnect, vars?: ListCarsVariables): QueryPromise<ListCarsData,ListCarsVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listCarByIdRef(vars?: ListCarByIdVariables): QueryRef<ListCarByIdData, ListCarByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listCarByIdRef(dc: DataConnect, vars?: ListCarByIdVariables): QueryRef<ListCarByIdData,ListCarByIdVariables>;

export function listCarById(vars?: ListCarByIdVariables): QueryPromise<ListCarByIdData, ListCarByIdVariables>;
export function listCarById(dc: DataConnect, vars?: ListCarByIdVariables): QueryPromise<ListCarByIdData,ListCarByIdVariables>;


/* Allow users to create refs without passing in DataConnect */
export function createCarRef(vars: CreateCarVariables): MutationRef<CreateCarData, CreateCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createCarRef(dc: DataConnect, vars: CreateCarVariables): MutationRef<CreateCarData,CreateCarVariables>;

export function createCar(vars: CreateCarVariables): MutationPromise<CreateCarData, CreateCarVariables>;
export function createCar(dc: DataConnect, vars: CreateCarVariables): MutationPromise<CreateCarData,CreateCarVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateCarRef(vars: UpdateCarVariables): MutationRef<UpdateCarData, UpdateCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateCarRef(dc: DataConnect, vars: UpdateCarVariables): MutationRef<UpdateCarData,UpdateCarVariables>;

export function updateCar(vars: UpdateCarVariables): MutationPromise<UpdateCarData, UpdateCarVariables>;
export function updateCar(dc: DataConnect, vars: UpdateCarVariables): MutationPromise<UpdateCarData,UpdateCarVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteCarRef(vars?: DeleteCarVariables): MutationRef<DeleteCarData, DeleteCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteCarRef(dc: DataConnect, vars?: DeleteCarVariables): MutationRef<DeleteCarData,DeleteCarVariables>;

export function deleteCar(vars?: DeleteCarVariables): MutationPromise<DeleteCarData, DeleteCarVariables>;
export function deleteCar(dc: DataConnect, vars?: DeleteCarVariables): MutationPromise<DeleteCarData,DeleteCarVariables>;


