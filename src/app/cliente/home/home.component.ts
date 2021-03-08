import { Component, OnInit } from '@angular/core';

@Component({
  // esses selectores viram tags que exibem o conteudo da html na app.html(tela inicial)
  selector: 'tela-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
