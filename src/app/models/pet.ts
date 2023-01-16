export class Pet {
  type: string;
  name: string;
  gender: string;
  breed: string;
  birthDate: Date;
  weight?: number;
  ownerId: number;

  constructor(type: string, name: string, gender: string, breed: string, birthDate: Date, ownerId: number, weight?: number) {
    this.type = type;
    this.name = name;
    this.gender = gender;
    this.breed = breed;
    this.birthDate = birthDate;
    this.weight = weight;
    this.ownerId = ownerId;
  }
}
