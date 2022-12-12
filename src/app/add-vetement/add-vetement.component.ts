import { VetementService } from './../services/vetement.service';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html'
})
export class AddVetementComponent implements OnInit {
  newvetement= new Vetement();
  marque!: Marque[];
  newidm!: number;
  newmarque!: Marque;
  constructor(private   vetementService:VetementService , private router:Router) { }

  ngOnInit(): void {
    this.vetementService.listeCategories().
    subscribe(cats => {this.marque = cats;
    console.log(cats);
    });
    }


  addVetement(){
    this.newvetement.marque = this.marque.find(cat => cat.idM == this.newidm)!;
    this.vetementService.ajoutervetement(this.newvetement).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['vetements']).then(() => {
        window.location.reload();
    }
    );
    });

      
    
  
}



}
