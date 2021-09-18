import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  viajes = [{
    subtitle: 'La Paz, Baja California',
    img: 'https://blog.vivanuncios.com.mx/wp-content/uploads/2021/03/vivir-en-la-paz-baja-california-sur-scaled.jpg',
    title: 'Desde 21,000 MXN',
    content: 'Es conocida por su malecón frente al mar con playas, parques y obras de artistas internacionales y mexicanos.'
  },
  {
    subtitle: 'Monterrey, Nuevo León',
    img: 'https://www.lamudi.com.mx/journal/wp-content/uploads/2021/02/shutterstock_1667508769.jpg',
    title: 'Desde 24,000 MXN',
    content: 'En lo alto se encuentra el Palacio del Obispado, una construcción barroca antigua con un museo regional.'
  },
  {
    subtitle: 'Acapulco',
    img: 'https://www.eluniversal.com.mx/sites/default/files/2020/12/17/acapulco_.jpg',
    title: 'Desde 21,500 MXN',
    content: 'Acapulco, un balneario en la costa del Pacífico de México, se ubica en una gran bahía bordeado de grandes montañas.'
  },
  {
    subtitle: 'Oaxaca de Juárez',
    img: 'https://media.nomadicmatt.com/2021/oaxaca1.jpg',
    title: 'Desde 19,000 MXN',
    content: 's conocida por sus edificios coloniales, muchos de los cuales están hechos de piedra volcánica verde.'
  },
  {
    subtitle: 'Toluca de Lerdo',
    img: 'https://diarioportal.com/wp-content/uploads/2021/01/PORTALES.jpg',
    title: 'Desde 20,000 MXN',
    content: 'Es conocida por su arquitectura colonial. La imponente Catedral de San José y el Palacio Municipal de estilo neoclásico.'
  },
  {
    subtitle: 'Mazatlán',
    img: 'https://azulmarino.mx/wp-content/uploads/2020/10/malecon-mazatlan-casas-departamentos-invertir-facebook-google-azul-marino-1.jpg',
    title: 'Desde 18,000 MXN',
    content: 'Las playas de arena bordean su malecón de 21 km de largo y el lugar es famoso por la pesca de altura.'
  }

  ];

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Reservación',
      message: '¿Quieres hacer la reservación?',
      buttons: ['Cancelar','Reservar']
    });

    await alert.present();
  }
}

