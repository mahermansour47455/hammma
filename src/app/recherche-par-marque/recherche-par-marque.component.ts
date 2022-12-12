import { Marque } from './../model/marque.model';
import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent {

  vetement! : Vetement[];
  id!: number;
  marque!: Marque[];
  

  constructor(private vetementService :VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeCategories().
    subscribe(cats => {this.marque = cats;
    console.log(cats);

    });

    }
    onChange() {
      this.vetementService.rechercherParMarque(this.id).
      subscribe(prods =>{this.vetement=prods});
      }

}
