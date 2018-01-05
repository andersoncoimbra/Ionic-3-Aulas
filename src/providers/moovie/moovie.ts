import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  baseApiPath = "https://api.themoviedb.org/3";
  apikey = "?api_key=e9140d68ae828aef6cb7c44343f9a3e0";
  lang = "&language=pt-BR"
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovie (){
    return this.http.get(this.baseApiPath+"/movie/latest"+this.apikey+this.lang)
  }

  getPopularMovie (){
    return this.http.get(this.baseApiPath+"/movie/popular"+this.apikey+this.lang)
  }

}
