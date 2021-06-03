import { Component, Input, OnInit } from '@angular/core';
import { Artisan } from '../interfaces/artisan';
import { ArtisanService } from '../services/artisan.service';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent implements OnInit {
    listeArtisan !: Artisan[];
    Photo !: any;

  constructor(private artisanservice: ArtisanService) {    
    this.Photo = "../../assets/pics/Photo.png";
   }

  ngOnInit(): void {
      this.artisanservice.getAllArtisan().subscribe((data : Artisan[]) => {
          this.listeArtisan = data;
          console.log(this.listeArtisan);

        });
  }

  
}
