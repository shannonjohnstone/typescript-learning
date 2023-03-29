import { MapMarkerOptions } from './CustomMap';

export class Company implements MapMarkerOptions {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, catchPhrase: string, location: MapMarkerOptions['location']) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.location = location;
  }

  content() {
    return this.name;
  }
}
