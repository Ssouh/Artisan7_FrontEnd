import { Component, Input, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';

import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Demande } from '../interfaces/demande';
import { Devis } from '../interfaces/devis';
import { DemandeService } from '../services/demande.service';
import { DevisService } from '../services/devis.service';

@Component({
  selector: 'app-demandes-artisan',
  templateUrl: './demandes-artisan.component.html',
  styleUrls: ['./demandes-artisan.component.css']
})
export class DemandesArtisanComponent implements OnInit {
  demandeEncours!: Demande[];
  constructor(public dialog: MatDialog,private demandeservice: DemandeService) {}

  ngOnInit(): void {
    this.demandeservice.getAllDemande().subscribe((data : Demande[]) => {this.demandeEncours = data; console.log(this.demandeEncours)});
    this.demandes = this.getDemandes().Demandes;
  }

  openDialog(demande: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialog.open(DialogElements, {data: demande});
  }

  form(demande: any): void {
    this.dialog.open(FormPostulation, {data: demande});
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

}

@Component({
  selector: 'app-demandes-artisan-card-dialog',
  templateUrl: 'demandes-artisan-card-dialog.html',
})
export class DialogElements {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


@Component({
  selector: 'app-demandes-devis-artisan',
  templateUrl: 'demandes-devis-artisan.html',
})
export class FormPostulation implements OnInit {
  newdevis!: Devis;
  idCurrentArtisan: any;
  demande !: Demande;

  constructor(private devisservice: DevisService, @Inject(MAT_DIALOG_DATA) public data: any) {this.newdevis = new Devis(); this.demande = data;}

  ngOnInit(): void {
    this.idCurrentArtisan = localStorage.getItem("id");
  }

  newDevis(){
    this.newdevis.demande = this.demande;
    this.devisservice.addNewDevis(this.idCurrentArtisan,this.newdevis).subscribe(ret => {
        console.log("Inserted ", ret);
    });
  }
}
