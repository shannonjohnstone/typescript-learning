import { MapMarkerOptions } from './CustomMap';

export class User implements MapMarkerOptions {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, location: MapMarkerOptions['location']) {
    this.name = name;
    this.location = location;
  }

  content: () => string;
}
