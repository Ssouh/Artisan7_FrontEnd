import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PasswordDialogComponent } from '../Dialog/password-dialog/password-dialog.component';

@Component({
  selector: 'app-parametres-artisan',
  templateUrl: './parametres-artisan.component.html',
  styleUrls: ['./parametres-artisan.component.css']
})
export class ParametresArtisanComponent implements OnInit {

  constructor(private dialogPassword: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
        this.dialogPassword.open(PasswordDialogComponent);
  }

}
