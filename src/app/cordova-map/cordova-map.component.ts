import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'app-cordova-map',
  templateUrl: './cordova-map.component.html',
  styleUrls: ['./cordova-map.component.scss'],
})
export class CordovaMapComponent implements OnInit {

  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  timestamp: any = "";

  constructor(
    public platform: Platform,
    public geolocation: Geolocation
  ) { 
    // this.platform.ready().then(()=>{
    //   var mapOptions = {
    //     center: { lat:23.2366, lng: 79.3822 },
    //     zoom: 7
    //   }

    //   this.map = new google.maps.map(document.getElementById("map"), mapOptions);
    // });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.GetLocation();
      // this.getUserLocation();
    });
  }

  GetLocation() {
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position)=> {
      var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      if (ref.marker == null) {
        ref.marker = new google.maps.Marker({
          position: gps,
          map: ref.map,
          title: 'my position'
        })
      } else {
        ref.marker.setPosition(gps);
      }

      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
    })
  }

  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
    
    }).catch((error) => {
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
  
    });
  }

  ngOnInit() {}

}
