import { HttpClient } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageUrl = "./assets/pics/unkown.jfif";
  name: String | null;
  secteur: String | null;
  phone: String | null;
  adresse: String | null;
  email: String | null;
  biographie: String | null;
  note: number | null;

  constructor(private artisanService : ArtisanService) { 
    this.chargerPhotoProfile();
    this.name = localStorage.getItem("name");
    this.secteur = localStorage.getItem("secteur");
    this.email = localStorage.getItem("email");
    this.phone = localStorage.getItem("phone");
    this.adresse = localStorage.getItem("adresse");
    this.note = Number(localStorage.getItem("note"));
    this.biographie = localStorage.getItem("biographie");
    this.note =(Number(this.note)*20);
  }

  ngOnInit(): void {
  }


  chargerPhotoProfile() {
    this.artisanService.getArtisanPicture(localStorage.getItem("id")).subscribe(
        iUrl => {
          if(iUrl != null )
          {
            this.imageUrl = iUrl;
          }
        }
    )
  }
}

