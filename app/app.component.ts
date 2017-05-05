import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo Animal Catalog</h1>
  <animal-list></animal-list>
  <animal-edit></animal-edit>
  <animal-new></animal-new>


  `
})

export class AppComponent {

}
