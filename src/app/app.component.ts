import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Geralt.jpg",
      description: "Geralt"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/a/ad/Witcher_wild_hunt.jpg",
      description: "Jogo"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/a/ad/Witcher_wild_hunt.jpg",
      description: "Teste"
    }
  ]

}
