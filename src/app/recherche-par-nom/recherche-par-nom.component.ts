import { VetementService } from './../services/vetement.service';
import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {

  vetement! : Vetement[];
  id!: number;
  nomvet!: string;
  allvet!: Vetement[];

  constructor(private vetementService :VetementService) { }



  ngOnInit(): void {

    this.vetementService.listervetements().subscribe(prods => {
      console.log(prods);
      this.allvet = prods;
      });
      
  }



    onKeyUp(text:string){
      console.log(text);
    this.vetementService.rechercherParNom(this.nomvet).
    subscribe(vet => {
    this.vetement = vet;
    console.log(vet)});
    }
    onkeyUpp(text:String)
    {
      console.log(text);
      this.vetement=this.allvet.filter(item=>item.nomVetement?.toLowerCase().includes(text.toLowerCase()));
  
    }

}
