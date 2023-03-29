/* global google */

export interface MapMarkerOptions {
  location: { lat: number; lng: number };
  content: () => string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(id: string) {
    const el = document.getElementById(id) as HTMLElement;

    this.map = new google.maps.Map(el, { zoom: 1, center: { lat: 0, lng: 0 } });
  }

  addMarker(options: MapMarkerOptions): void {
    const marker = new google.maps.Marker({ map: this.map, position: options.location });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: options.content(),
      });

      infoWindow.open(this.map, marker);
    });
  }
}
