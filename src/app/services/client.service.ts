import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from '../interfaces/client';


@Injectable({
    providedIn: 'root'
  })
export class ClientService {
    constructor(private http: HttpClient) { }

    clientUrl = "/Artisan7_BackEnd/Client";

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientUrl);
    }

    addUser(usr: Client):Observable<any>{
      const url = `${this.clientUrl}/ajout`;
      return this.http.post<Client>(url, usr);
    }

    getClientById(id: number): Observable<Client> {
      const url = `${this.clientUrl}/id=${id}`;
      return this.http.get<Client>(url);
    }

    delete(id: number): Observable<Client> {
      const url = `${this.clientUrl}/supprime=${id}`;
      return this.http.delete<Client>(url);
    }
    clientsUrl = "http://localhost:8080/artisan-Backend/client/allClients";
    addClientUrl = "http://localhost:8080/artisan-Backend/client?op=addNewUser";

    dataClients :any;


    getAllClient() {
        return this.http.get<Client>(this.clientsUrl);
    }


    addNewUser(client:Client):Observable<any>
    {
      return this.http.post<Client>(this.addClientUrl+"&name="+client.name+"&email="+client.email+"&password="+client.password+"&phone="+client.phone,client);
    }

}