import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artisan } from '../interfaces/artisan';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  authUrl = "/Artisan7_BackEnd/Auth?";
  public seConnecter(email: String , password : String){
    return this.http.get<any>(this.authUrl+"email="+email+"&password="+password);
  }

  public estConnecte(){
    return localStorage.getItem("role") !== null;
  }
  
  public deconnecter(){
    localStorage.clear();
  }
}
