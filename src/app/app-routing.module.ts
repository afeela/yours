import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CordovaMapComponent } from './cordova-map/cordova-map.component';

// import { Geolocation } from '@ionic-native/geolocation'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'map', component: GoogleMapsComponent
  }
  // ,
  // {
  //   path: 'cordovamap', component: CordovaMapComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  // providers: [
  //   Geolocation,
  // ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
