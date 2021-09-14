import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router' // Para recibir por parametros
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service'
import { Country } from '../../interfaces/pais.interface'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country

  constructor (
    private readonly activatedRoute: ActivatedRoute,
    private readonly paisService: PaisService
  ) {}

  ngOnInit (): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisByAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => { this.pais = pais })
  }
}
