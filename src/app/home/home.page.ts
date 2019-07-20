import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async feedback() {
    const alert = await this.alertController.create({
      header: 'Irado!',
      message: 'Gostaria de avaliar o filme?',
      buttons: ['Não', 'Sim']
    });

    await alert.present();
  }

  async sucesso() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado na sua lista! :)',
      duration: 2000
    });
    toast.present();
  }

}
