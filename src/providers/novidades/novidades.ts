
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the NovidadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NovidadesProvider {

  baseApiPath = "https://api.squadplay.ml";


  constructor(public http: Http) {
    console.log('Serviço de Provedor de Novidades');
  }

  getNovidade() {
    return this.http.get(this.baseApiPath+"/news");    
  }

}
