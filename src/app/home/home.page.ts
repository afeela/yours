import { Component } from '@angular/core';
// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';

// declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // latitude: any;
  // longitude: any;
  // map;
  // @ViewChild('mapElement', {static: false}) mapElement: ElementRef;

  constructor(
    // private geolocation: Geolocation,
    // private test: number
  ) {}

  ngAfterViewInit(): void {
    console.log('home component');

    
  }

  ngAfterContentInit(): void{
    // this.test = 10;
    // console.log('constructor variable test : ', this.test);
  }    

  // this.geolocation.getCurrentPosition().then((resp: any) => {
  //   // resp.coords.latitude
  //   // resp.coords.longitude
  //  }).catch((error: any) => {
  //    console.log('Error getting location', error);
  //  });

  // ngAfterViewInit(): void {

  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.latitude = resp.coords.latitude;
  //     this.longitude = resp.coords.longitude;
  //     const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 6
  //     });
  //     const infoWindow = new google.maps.InfoWindow;
  //     const pos = {
  //       lat: this.latitude,
  //       lng: this.longitude
  //     };
  //     infoWindow.setPosition(pos);
  //     infoWindow.setContent('Location found.');
  //     infoWindow.open(map);
  //     map.setCenter(pos);
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  // ngAfterViewInit(): void {
  //   this.map = new google.maps.Map(
  //     this.mapElement.nativeElement, {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //     }
  //   ); 
  // }

}
