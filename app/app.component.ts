import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo Animal Catalog</h1>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <animal-edit></animal-edit>
  <animal-new></animal-new>
  `
})

export class AppComponent {
  masterAnimalList:Animal[]=[
    new Animal("Zebra", "Lulu", "04/08/1993", "Senior", "Herbivore", "Zone 3", 4, "F", "Leaves", "Snakes", "https://image.ibb.co/mqZw85/zebra.png", "square icon with zebra cut-out"),
    new Animal("Narwhal", "Coco", "07/18/2016", "Young", "Carnivore", "Zone 2", 8, "F", "Rockfish", "Warm temperatures", "https://image.ibb.co/kYRhgQ/narwhal.png", "square icon with narwhal cut-out"),
    new Animal("African lion", "Tobias", "11/23/2004", "Mature", "Carnivore", "Zone 4", 8, "M", "Playing ball", "Sharing food", "https://image.ibb.co/jm6to5/lion.png", "square icon with lion cut-out"),
    new Animal("Flamingo", "Arnie", "02/06/1984", "Senior", "Omnivore", "Zone 1", 3, "M", "Standing in water", "Being disturbed", "https://image.ibb.co/nme2gQ/flamingo.png", "square icon with flamingo cut-out"),
  ];
  selectedAnimal = null;
  editAnimal(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }
}
