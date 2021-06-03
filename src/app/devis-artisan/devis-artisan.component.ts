import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Demande } from '../interfaces/demande';
import { Devis } from '../interfaces/devis';
import { DevisService } from '../services/devis.service';

@Component({
  selector: 'app-devis-artisan',
  templateUrl: './devis-artisan.component.html',
  styleUrls: ['./devis-artisan.component.css']
})
export class DevisArtisanComponent implements OnInit {
  devisEncours!: Devis[];
  idCurrentArtisan: any;
  constructor(public dialog: MatDialog,private devisservice: DevisService) {}

  ngOnInit(): void {
    this.idCurrentArtisan = localStorage.getItem("id");
    this.devisservice.getDevis(this.idCurrentArtisan).subscribe((data : Devis[]) => {this.devisEncours = data; console.log(this.devisEncours)});
    this.devis = this.getdevis().devis;
  }

  openDialog(devis: any): void {
    this.dialog.open(DialogElements, {data: devis});
  }

  getdevis(): any {
    let response = {
      devis: [{
        Photo: '../../assets/pics/devis.png',
      }]
    };
    return response;
  }

  @Input() devis: any;

}

@Component({
  selector: 'app-devis-artisan-card-dialog',
  templateUrl: 'devis-artisan-card-dialog.html',
})
export class DialogElements {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  envoyer(devis: Devis){
    console.log(devis);
    // const email = devis.value;
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.http.post('https://formspree.io/asdlf7asdf',
    //   { name: email.name, replyto: email.email, message: email.messages },
    //   { 'headers': headers }).subscribe(
    //     response => {
    //       console.log(response);
    //     });
  }
}
