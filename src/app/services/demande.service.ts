import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Demande } from '../interfaces/demande';



@Injectable({
    providedIn: 'root'
  })
export class DemandeService {
  
    demandeUrl = "/Artisan7_BackEnd/Demande";
    
    constructor(private http: HttpClient , private angularFirebase : AngularFireStorage) { }

    //get l'url du photo de profile de l'demande 
    // TODO
    getDemandePicture(id : any) 
    {
      //return this.angularFirebase.upload('/Demande/'+id+'/photo');
      return this.angularFirebase.ref('/Demande/'+id+'/photo').getDownloadURL();
    }

    getAllDemande(): Observable<Demande[]> {
      return this.http.get<Demande[]>(this.demandeUrl);
    }

    public DemandeOngoing(id_client: number): Observable<Demande[]> {
      const url = `${this.demandeUrl}/${id_client}`;
      return this.http.get<Demande[]>(url); 
    }

    public DemandeHistory(id_client: number): Observable<Demande[]> {
      const url = `${this.demandeUrl}/history=${id_client}`;
      return this.http.get<Demande[]>(url);
    }

    addNewDemande(id_client: number,usr: Demande):Observable<any>{
      usr.photo = "../../assets/pics/"+usr.secteur+".jpg";
      const url = `${this.demandeUrl}/ajout${id_client}`;
      return this.http.post<Demande>(url, usr);
    }

    getDemandeById(id: number): Observable<Demande> {
      const url = `${this.demandeUrl}/id=${id}`;
      return this.http.get<Demande>(url);
    }

    delete(id: number): Observable<Demande> {
      const url = `${this.demandeUrl}/supprime=${id}`;
      return this.http.delete<Demande>(url);
    }

    /*showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'x', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? 'msg-error' : 'msg-success'
      });
    }*/
}