import { Vetement } from './../model/vetement.model';
import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
providedIn: 'root'
})
export class VetementService {

  apiurl = 'http://localhost:8888/vetements/api';
vetements : Vetement[]; //un tableau de Produit
vetement!:Vetement;
marque!: Marque[];
constructor(private http: HttpClient) {
  this.marque = [ {idM : 1, nomM : "berska", descriptionM : "aut qualiter"},
  {idM : 2, nomM : "pull and beer", descriptionM : "aut qualiter"},
  {idM : 3, nomM : "zara", descriptionM : "aut qualiter"}],


this.vetements = [
{ idVetement : 1, nomVetement : "pull", prixVetement : 3000.600, dateCreation
: new Date("01/14/2011"), marque : {idM : 1, nomM : "berska", descriptionM : "aut"}}
,{ idVetement : 2, nomVetement : "chemise", prixVetement : 3000.600, dateCreation
: new Date("01/14/2011"), marque : {idM : 2, nomM : "pull and beer", descriptionM : "aut"}},
{ idVetement : 3, nomVetement : "srwal", prixVetement : 3000.600, dateCreation
: new Date("01/14/2011"), marque : {idM : 3, nomM : "zara", descriptionM : "aut"}}


];
}
listerVetement(){
return this.vetements;
}
ajouterVetement(vetement : Vetement){
this.vetements.push(vetement);
}

supprimerVetement( vetement : Vetement){
  //supprimer le produit prod du tableau produits
  const index = this.vetements.indexOf(vetement, 0);
  if (index > -1) {
  this.vetements.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }
  consulterVetement(id:number): Vetement{
    this.vetement = this.vetements.find(p => p.idVetement == id)!;
    return this.vetement;
    }
    updateVetement(p:Vetement)
{
// console.log(p);
this.supprimerVetement(p);
this.ajouterVetement(p);
this.trierVetemnts();
}
trierVetemnts(){
  this.vetements = this.vetements.sort((n1,n2) => {
  if (n1.idVetement! > n2.idVetement!) {
  return 1;
  }
  if (n1.idVetement! < n2.idVetement!) {
  return -1;
  }
  return 0;
  });
  }

  listerMarque(){
    return this.marque;
  }
  consulterMarque(id:number): Marque{
    return  this.marque.find(p => p.idM == id)!;
    
  }
  // api
  listervetements(): Observable<Vetement[]>{
    return this.http.get<Vetement[]>(this.apiurl);
  }
  ajoutervetement(vetement: Vetement): Observable<Vetement>{
    return this.http.post<Vetement>(this.apiurl, vetement, httpOptions);
  }
  supprimervetement(id: number): Observable<Vetement>{
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Vetement>(url, httpOptions);
  }
  consultervetement(id: number): Observable<Vetement>{
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Vetement>(url);
  }
  updatevetement(vetement: Vetement): Observable<Vetement>{
    return this.http.put<Vetement>(this.apiurl, vetement, httpOptions);
  }
  rechercherParNom(nom: string):Observable< Vetement[]> {
    const url = `${this.apiurl}/vetementByName/${nom}`;
    return this.http.get<Vetement[]>(url);
    }

    listeCategories():Observable<Marque[]>{
      return this.http.get<Marque[]>(this.apiurl+"/marques");
      }
      rechercherParMarque(idCat: number):Observable< Vetement[]> {
        const url = `${this.apiurl}/prodscat/${idCat}`;
        return this.http.get<Vetement[]>(url);
        }


}