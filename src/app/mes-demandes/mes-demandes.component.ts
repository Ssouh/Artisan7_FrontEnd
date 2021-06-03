


import { Component, Input,OnInit, Inject, Pipe, PipeTransform } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DemandeService } from '../services/demande.service';
import { Demande } from '../interfaces/demande';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit {

  idCurrentClient ?: any;
  demandeEncours !: Demande[];
  demandeFinis !: Demande[];
  newdemande: Demande;
  
  constructor(public dialog: MatDialog,private demandeservice: DemandeService) { this.newdemande = new Demande() ;}

  ngOnInit(): void {
    this.idCurrentClient = localStorage.getItem("id");
    this.demandeservice.DemandeOngoing(this.idCurrentClient).subscribe((data : Demande[]) => {this.demandeEncours = data; console.log(this.demandeEncours)});
    this.demandeservice.DemandeHistory(this.idCurrentClient).subscribe((data : Demande[]) => this.demandeFinis = data);
    
    this.demandes = this.getDemandes().Demandes;  
    this.secteurs = [
      {value : 'Climatisation'},
      {value : 'Plomberie'},
      {value : 'Potier'},
      {value : 'Menuisier'},
      {value : 'Peintres'},
      {value : 'Tapissier'},
      {value : 'Tailleur'}
    ];
  }

  openDialog(demande: any): void {
    const dialogRef = this.dialog.open(DialogElements, {data: demande});
  }

    
  newDemande(): void {
    this.newdemande.etat = false;
    this.newdemande.date_creation = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      this.demandeservice.addNewDemande(this.idCurrentClient,this.newdemande).subscribe(ret => {
          console.log("Inserted ", ret);
        //this.demandeservice.showMessage('Task created successfully')
      });
  }

  deleteDemande(id: number) {
    this.demandeservice.delete(id).subscribe(ret => {
      this.demandeEncours = this.demandeEncours.filter(c => {
        return c.id != id;
      });
    });
  }

  changed(): void {
    this.ngOnInit();
  }



  getDemandes(): any {
    let response = {
      Demandes: [{
        Id: 123,
        Titre: 'Fuite dans la cuisine',
        Secteur: 'Plombier',
        Description: `Fuite qui se trouve juste au dessus du lavabo. L\'eau y coule constamment.
        La tension du robinet est faible vu que l'eau coule juste au dessous.`,
        Date_creation: '26/05/21',
        Date_realisation: '29/05/21',
        Photo: '../../assets/pics/fuite.jpg',
        Adresse: '9, Rue Albert Mouzaw, Rangueil, Toulouse.',
        Etat: 0,
        Demandeur: 'Outidrarine'
        // TODO: Add list devis
      }, {
        Id: 321,
        Titre: 'Retouche placard en bois',
        Secteur: 'Menuisier',
        Description: `Placard ancien à retoucher de l'interieur et de l'exterieur et le rendre vivant encore une fois.
        Il a une fissure dans un coin qui doit être fixée.
        Un étage a beaucoup de place, donc je compte ajouter une plance pour le diviser en deux pour gagner plus d'espace`,
        Date_creation: '19/05/21',
        Date_realisation: '30/05/21',
        Photo: '../../assets/pics/placard.jpg',
        Adresse: '5 Rue Raiss, Empalot, Toulouse.',
        Etat: 0,
        Demandeur: 'Francois Verdier'
        // TODO: Add list devis
      }, {
        Id: 111,
        Titre: 'Jean customisé',
        Secteur: 'Tailleur',
        Description: `Jean à customiser avec plusieurs tissu multi couleurs`,
        Date_creation: '15/05/21',
        Date_realisation: '19/05/21',
        Photo: '../../assets/pics/jean.jpg',
        Adresse: '5 Rue Raiss, Empalot, Toulouse.',
        Etat: 1,
        Demandeur: 'Francois Verdier'
        // TODO: Add list devis
      }]
    };
    return response;
  }
  @Input() demandes: any;
  @Input() secteurs: any;

}

@Component({
  selector: 'app-mes-demandes-card-dialog',
  templateUrl: 'mes-demandes-card-dialog.html',
})
export class DialogElements {
  demandeEnCours !: Demande;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private demandeservice: DemandeService) {this.demandeEnCours = data;}

  supprimer(data : Demande) {
    console.log("Clicked "+ data )
    if (data.id != undefined)
      this.demandeservice.delete(data.id);
  }

  
}
