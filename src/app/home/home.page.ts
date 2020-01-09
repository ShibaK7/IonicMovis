import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cardsData = [
    {
      title: 'Titulo 1', 
      subtitle: 'Subtitulo 1',
      contentText:'Texto 1'    
    },
    {
      title: 'Titulo 2', 
      subtitle: 'Subtitulo 2',
      contentText:'Texto 2'    
    },
    {
      title: 'Titulo 3', 
      subtitle: 'Subtitulo 3',
      contentText:'Texto 3'    
    }
  ];

  constructor(private alertController: AlertController) { }

  onBeerClicked(){
    console.log("Quiero una no tan fría");
  }

  openAlert() {
    this.alertController.create({
        header: 'Hello world!',
        subHeader: '¡Los baños estan mas limpios ahora!',
        buttons: [
            {
                text: 'Cerrar',
                handler: () => {
                    console.log('bye bye!');
                }
            }
        ]
    }).then(alert => {
        return alert.present();
    }).then(() => {
        console.log('ya se terminó de abrir 100% seguro');
    });

}
  
}
