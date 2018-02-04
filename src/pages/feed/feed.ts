import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovidadesProvider } from '../../providers/novidades/novidades';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html' ,
  providers:[
    NovidadesProvider
  ] 
})
export class FeedPage {

  //public nome_usuario:string = "Anderson Coimbra"
  public listanovidades = new Array<any>();
  public path_img = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private novidadesProvider: NovidadesProvider,
  ) {
  }

  

  ionViewDidLoad() {
    console.log('Inicio de caregamento dos dados em pagina');
    this.novidadesProvider.getNovidade().subscribe(
      data =>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno.news);
        this.listanovidades = objeto_retorno.news;
        this.path_img = objeto_retorno.dbimg
        console.log(objeto_retorno);
      },
      error=>{
        console.log(error)
      }
      )
    }

    datafomat(date){
      return date.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1');
    }

}
