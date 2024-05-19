import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
 
  carteVisite = {
    nom: '',
    prenom: '',
    entreprise: '',
    email: '',
    telephone: ''
  };

  onSubmit(): void {
    // Affiche les données de la carte de visite dans la console du navigateur
    console.log('Données de la Carte de Visite:', this.carteVisite);
  }

}
