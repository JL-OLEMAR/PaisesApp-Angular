import { Component } from '@angular/core'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false

  constructor (private readonly paisService: PaisService) {}

  buscar (): void {
    this.hayError = false
    console.log(this.termino)

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        console.log(paises)
      }, (err) => {
        this.hayError = true
        console.log(err)
      })
  }
}
