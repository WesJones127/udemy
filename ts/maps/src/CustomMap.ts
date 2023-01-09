/// <reference types="@types/google.maps" />

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(location: { lat: number; lng: number }) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: location.lat,
        lng: location.lng,
      },
    });
    // this.googleMap.setCenter({ lat: location.lat, lng: location.lng });
  }
}
