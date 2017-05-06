import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Animal Catalog</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <form class="navbar-form navbar-left">

              <div class="form-group">
                <select (change)="onChangeExhibit($event.target.value)" class="form-control">
                    <option value="All" selected="selected">Search By Exhibit</option>
                    <option value="All">All</option>
                    <option value="Zone 1">Zone 1</option>
                    <option value="Zone 2" >Zone 2</option>
                    <option value="Zone 3" >Zone 3</option>
                    <option value="Zone 4" >Zone 4</option>
                    <option value="Zone 5" >Zone 5</option>
                    <option value="Other" >Other</option>
                </select>
              </div>
            </form>
          </li>
          <li>
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <select (change)="onChangeAge($event.target.value)" class="form-control">
                    <option value="All" selected="selected">Search By Age</option>
                    <option value="All">All</option>
                    <option value="Young">Young</option>
                    <option value="Mature" >Mature</option>
                    <option value="Senior" >Senior</option>
                    <option value="Unknown">Unknown</option>
                </select>
              </div>
            </form>
          </li>
          <li (click)="addNewButtonHasBeenClicked(true)"><a>Add New Animal</a></li>

        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://github.com/stormihoebe">By: Stormi Hoebelhenrich</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

  <div class="container">
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-2">
        <h3>Species</h3>
      </div>
      <div class="col-md-2">
        <h3>Name</h3>
      </div>
      <div class="col-md-2">
        <h3>Location</h3>
      </div>
      <div class="col-md-2">
        <h3>Details</h3>
      </div>
      <div class="col-md-2">
        <h3>Likes/Dislikes</h3>
      </div>
    </div>
    <div *ngIf="filterByExhibitOption">
      <div class="row well" *ngFor="let currentAnimal of childAnimalList |exhibit:filterByExhibitOption">
        <div class="col-md-2">
          <div class="zoomin">
            <img src={{currentAnimal.imageUrl}} alt={{currentAnimal.imageAlt}} width="100%">
          </div>
        </div>
        <div class="col-md-2">
          <h4>{{currentAnimal.species}}</h4>
        </div>
        <div class="col-md-2">
          <h4>{{currentAnimal.name}}</h4>
        </div>
        <div class="col-md-2">
          <h4>{{currentAnimal.location}}</h4>
        </div>
        <div class="col-md-2">
          <p><strong>DOB:</strong> {{currentAnimal.dob}} ({{currentAnimal.ageCaracteristic}})<p>
          <p><strong>Sex:</strong> {{currentAnimal.sex}}<p>
          <p><strong>Diet:</strong> {{currentAnimal.diet}}<p>
          <p><strong>Caretakers:</strong> {{currentAnimal.caretakers}}<p>
        </div>
        <div class="col-md-2">
          <p><strong>Likes:</strong> {{currentAnimal.likes}}<p>
          <p><strong>Dislikes: </strong> {{currentAnimal.dislikes}}<p>
          <button name="button" class="btn btn-default pull-right" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
        </div>
      </div>
    </div>
    <div *ngIf="filterByAgeOption">
      <div class="row well" *ngFor="let currentAnimal of childAnimalList |age:filterByAgeOption">
        <div class="col-md-2">
          <div class="zoomin">
            <img src={{currentAnimal.imageUrl}} alt={{currentAnimal.imageAlt}} width="100%">
          </div>
        </div>
        <div class="col-md-2 padded">
          <h4>{{currentAnimal.species}}</h4>
        </div>
        <div class="col-md-2 padded">
          <h4>{{currentAnimal.name}}</h4>
        </div>
        <div class="col-md-2 padded">
          <h4>{{currentAnimal.location}}</h4>
        </div>
        <div class="col-md-2 padded">
          <p><strong>DOB:</strong> {{currentAnimal.dob}} ({{currentAnimal.ageCaracteristic}})<p>
          <p><strong>Sex:</strong> {{currentAnimal.sex}}<p>
          <p><strong>Diet:</strong> {{currentAnimal.diet}}<p>
          <p><strong>Caretakers:</strong> {{currentAnimal.caretakers}}<p>
        </div>
        <div class="col-md-2 padded">
          <p><strong>Likes:</strong> {{currentAnimal.likes}}<p>
          <p><strong>Dislikes: </strong> {{currentAnimal.dislikes}}<p>
          <button name="button" class="btn btn-default pull-right editButton" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
        </div>
      </div>
    </div>
  </div>
  `

})



export class AnimalListComponent{
@Input()childAnimalList: Animal[];
@Output()clickSender = new EventEmitter();
@Output()addClickSender = new EventEmitter();
editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
}
addNewButtonHasBeenClicked(addString: boolean){
  this.addClickSender.emit(addString);
}

filterByExhibitOption: string = "All";
filterByAgeOption = null;

onChangeExhibit(optionFormMenu) {
  this.filterByAgeOption = null;
  this.filterByExhibitOption = optionFormMenu;
  console.log(optionFormMenu);

}
onChangeAge(optionFormMenu) {
  this.filterByExhibitOption = null;
  this.filterByAgeOption = optionFormMenu;
}
}
