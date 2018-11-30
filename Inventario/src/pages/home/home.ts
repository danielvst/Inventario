import { Component, ViewChild } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, public toastController: ToastController) {
    
  }

  entrar(){

    let toast = this.toastController.create({duration:3000, position:'bottom'});

    if (this.usuario.value == "daniel" && this.senha.value == "daniel") {
      this.navCtrl.push(MainPage);
    }
    else{
      toast.setMessage("Usuário ou senha inválidos!");
      toast.present();
    }

    
  }

}
