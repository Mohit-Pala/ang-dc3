import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { firebaseConfig } from './firebaseConfig';

import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';
import { connectorConfig } from './car-generated';


export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() => {
    const app = initializeApp(firebaseConfig);
    // Need to initialize Data Connect with connectorConfig
    const dataConnect = getDataConnect(app, connectorConfig);
    connectDataConnectEmulator(dataConnect, "localhost", 9399);
    return app;
  }),
  provideAuth(() => getAuth())]
};