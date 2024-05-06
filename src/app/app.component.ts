import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwitterWidgetComponent } from './components/twitter-widget/twitter-widget.component';
import { InstagramWidgetComponent } from './components/instagram-widget/instagram-widget.component';
import { FilialComponent } from './components/filial/filial.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    TwitterWidgetComponent,
    InstagramWidgetComponent,
    FilialComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 't6 Page';
  filiais = [
    {
      estado: 'Rio de Janeiro',
      logo: '../assets/images/t6Rj.jpg',
      url: 'https://twitter.com/sextojogador_rj',
    },
    {
      estado: 'Bahia',
      logo: '../assets/images/t6Br.jpg',
      url: 'https://twitter.com/sextojogador_BA',
    },
    {
      estado: 'Minas Gerais',
      logo: '../assets/images/t6Mg.jpg',
      url: 'https://twitter.com/sextojogadormg',
    },
    {
      estado: 'Ceará',
      logo: '../assets/images/t6Ce.jpg',
      url: 'https://twitter.com/sextojogador_CE',
    },
    {
      estado: 'Pernambuco',
      logo: '../assets/images/t6Pe.jpg',
      url: 'https://twitter.com/sextojogador_pe',
    },
    {
      estado: 'Pará',
      logo: '../assets/images/t6Br.jpg',
      url: 'https://twitter.com/sextojogador_PA',
    },
  ];
}
