import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'driver', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)},
    {path: 'rider', loadChildren: () => import('./rider/rider.module').then(m => m.RiderModule)}
];


