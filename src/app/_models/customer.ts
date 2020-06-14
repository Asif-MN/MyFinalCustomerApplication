export class Customer {
  public id: number;
  public userid: number;
  public firstname: string;
  public lastname: string;
  public gender: string;
  public email: string;
  public address: string;
  public city: string;
  public state: string;

  constructor(id:number, userid: number, firstname: string, lastname: string, gender: string,
  email: string, address: string, city: string, state: string) {
    this.id = id;
    this.userid = userid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
  }
}