import { Component } from '@angular/core'
import { PaisService } from '../../services/pais.service'
import { Country } from '../../interfaces/pais.interface'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  constructor (private readonly paisService: PaisService) {}

  buscar (termino: string): void {
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        console.log(paises)
        this.paises = paises
      }, () => {
        this.hayError = true
        this.paises = []
      })
  }

  segerencias (termino: string): void {
    this.hayError = false
    // TODO: Crear sugerencias
  }
}
