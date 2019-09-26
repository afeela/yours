import { Component, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild('map', {static: false}) mapElement: any;
  map: any;

  constructor() { }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  ngOnInit() {}

}
