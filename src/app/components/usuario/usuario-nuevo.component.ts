import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
  <p>Usuario-nuevo Works!</p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    this.route.parent.params.subscribe( parametros => {
      console.log('ruta hija nuevo');
      console.log(parametros);
    })

   }

  ngOnInit(): void {
  }

}
