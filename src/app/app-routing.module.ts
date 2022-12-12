import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';

const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path: "add-vetement", component : AddVetementComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" },
  {path:"update-vetement/:id", component:UpdateVetementComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
