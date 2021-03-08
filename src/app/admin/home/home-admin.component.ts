import { Component, OnInit } from '@angular/core';

@Component({
  // esses selectores viram tags que exibem o conteudo da html na app.html(tela inicial)
  selector: 'home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
