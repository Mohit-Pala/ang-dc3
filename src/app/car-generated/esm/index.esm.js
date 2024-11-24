import { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';
export const OrderDirection = {

  ASC: "ASC",

  DESC: "DESC",
}

export const connectorConfig = {
  connector: 'car',
  service: 'ang-dataconnect',
  location: 'us-east1'
};

export function createCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'createCar', inputVars);
}
export function createCar(dcOrVars, vars) {
  return executeMutation(createCarRef(dcOrVars, vars));
}
export function updateCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'updateCar', inputVars);
}
export function updateCar(dcOrVars, vars) {
  return executeMutation(updateCarRef(dcOrVars, vars));
}
export function deleteCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'deleteCar', inputVars);
}
export function deleteCar(dcOrVars, vars) {
  return executeMutation(deleteCarRef(dcOrVars, vars));
}
export function listCarsRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'listCars', inputVars);
}
export function listCars(dcOrVars, vars) {
  return executeQuery(listCarsRef(dcOrVars, vars));
}
export function listCarByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'listCarByID', inputVars);
}
export function listCarById(dcOrVars, vars) {
  return executeQuery(listCarByIdRef(dcOrVars, vars));
}
