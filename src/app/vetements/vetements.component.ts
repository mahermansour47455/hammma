import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html'
})
export class VetementsComponent implements OnInit{
  vetements! : Vetement[]; //un tableau de chînes de caractères
  

constructor (private vetementService : VetementService,private router:Router ) {

  this.vetements = vetementService.listerVetement();
  

}
ngOnInit():void{
  this.vetementService.listervetements().subscribe(prods=>this.vetements=prods);

}
supprimerVetement(vetement : Vetement){
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
  this.vetementService.supprimervetement(vetement.idVetement).subscribe();

  this.router.navigate(['vetements']).then(() => {
    window.location.reload();
  },);}



}
