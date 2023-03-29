import { faker } from '@faker-js/faker';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const { latitude, longitude } = faker.address;

const user = new User(faker.name.firstName('male'), {
  lat: +latitude(),
  lng: +longitude(),
});

const company = new Company(faker.company.name(), faker.company.catchPhrase(), {
  lat: +latitude(),
  lng: +longitude(),
});

const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
