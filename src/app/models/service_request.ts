import {Time} from "@angular/common";
import {User} from "./user";
import {Service} from "./service";

export class ServiceRequest {
  id? : number
  petOwner?: User;
  provider?: User;
  service?: Service;
  status? : string;
  date: Date;
  address: string;
  animalType: string;
  providerId: number;
  petOwnerId: number;
  serviceId: number;
  phone : number

  constructor(date: Date, address: string, animalType: string, providerId: number, petOwnerId: number, serviceId: number, phone: number,) {
    this.date = date;
    this.address = address;
    this.animalType = animalType;
    this.providerId = providerId;
    this.petOwnerId = petOwnerId;
    this.serviceId = serviceId;
    this.phone = phone

  }
}
