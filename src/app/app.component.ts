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
      logo: 'https://pbs.twimg.com/profile_images/1748014172179165184/skATUcHs_400x400.jpg',
      url: 'https://twitter.com/sextojogador_rj',
    },
    {
      estado: 'Bahia',
      logo: 'https://pbs.twimg.com/profile_images/1797739742844407808/4GcN3g1c_400x400.jpg',
      url: 'https://x.com/SextoJogadorBA',
    },
    {
      estado: 'Minas Gerais',
      logo: 'https://pbs.twimg.com/profile_images/1797738261793640448/bKtI31dk_400x400.jpg',
      url: 'https://twitter.com/sextojogadormg',
    },
    {
      estado: 'Ceará',
      logo: 'https://pbs.twimg.com/profile_images/1750972951040610304/L-97Bbax_400x400.jpg',
      url: 'https://twitter.com/sextojogador_CE',
    },
    {
      estado: 'Pernambuco',
      logo: 'https://pbs.twimg.com/profile_images/1797738888791834624/t_WvO-SD_400x400.jpg',
      url: 'https://twitter.com/sextojogador_pe',
    },
    {
      estado: 'Pará',
      logo: 'https://pbs.twimg.com/profile_images/1797780030182875136/CehlSWaJ_400x400.jpg',
      url: 'https://twitter.com/sextojogador_PA',
    },
    {
      estado: 'São Paulo',
      logo: 'https://pbs.twimg.com/profile_images/1798458196853407745/PsdFowTP_400x400.jpg',
      url: 'https://twitter.com/sextojogador_PA',
    },
  ];
}
