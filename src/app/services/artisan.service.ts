import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Artisan } from '../interfaces/artisan';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
    providedIn: 'root'
  })
export class ArtisanService {

    constructor(private http: HttpClient , private angularFirebase : AngularFireStorage) { }

    artisanUrl = "/Artisan7_BackEnd/Artisan";

    dataClients :any;

    //get l'url du photo de profile de l'artisan 
    getArtisanPicture(id : any) 
    {
      return this.angularFirebase.ref('/photosDeProfile/'+id+'/profile').getDownloadURL();
    }

    getAllArtisan(): Observable<Artisan[]> {
      return this.http.get<Artisan[]>(this.artisanUrl);
    }

    addNewArtisan(artisan: Artisan):Observable<any>{
      const url = `${this.artisanUrl}/ajout`;
      return this.http.post<Artisan>(url, artisan);
    }

    getArtisanById(id: number): Observable<Artisan> {
      const url = `${this.artisanUrl}/id=${id}`;
      return this.http.get<Artisan>(url);
    }

    delete(id: number): Observable<Artisan> {
      const url = `${this.artisanUrl}/supprime=${id}`;
      return this.http.delete<Artisan>(url);
    }

}