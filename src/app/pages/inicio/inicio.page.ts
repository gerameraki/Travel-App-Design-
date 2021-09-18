import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides = [
    {
      img: 'assets/img/img1.svg',
      titulo: '¿Cuánto darías por poder viajar a los <br> destinos más exóticos de la tierra<br> por 1/4 del precio normal?',
    },
    {
      img: 'assets/img/img2.svg',
      titulo: 'Budgetrip cambia la manera en la<br> que decides viajar. Te ayudamos a<br> planear con tus reglas.',
    },
    {
      img: 'assets/img/img3.svg',
      titulo: 'Empezamos con tu presupuesto,<br> determinamos tus intereses y te<br> llevamos hasta tus sueños.',
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
