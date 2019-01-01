import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts = [
    {
      name: 'Mery',
      age: 23,
      adress: 'Calle A 123 piso 4º3',
      phone: 934934959,
      url: 'user.png'
    },
    {
      name: 'Carla',
      age: 43,
      adress: 'Av Diagonal 320 piso 2º2',
      phone: 935598638,
      url: 'user.png'
    },
    {
      name: 'Poly',
      age: 34,
      adress: 'Gran Via CC 198 piso 3º1',
      phone: 938876498,
      url: 'user.png'
    }
  ];

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.contacts;
  }

  getContactsHttp() {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  getContactsDetail(id: number) {
    return this.http.post('http://localhost:3000/api/contacts', {id});
  }
}
