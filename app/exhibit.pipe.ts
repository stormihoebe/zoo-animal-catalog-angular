import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "exhibit",
  pure: false
})

export class ExhibitPipe implements PipeTransform {
  transform(input: Animal[], desiredExhibit){
    var output: Animal[] = [];
    if(desiredExhibit === "All") {
     for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }

    return output;
  } else if (desiredExhibit === "Zone 1") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].location === "Zone 1") {
        output.push(input[i]);
      }
    }
    return output;
  }  else if (desiredExhibit === "Zone 2") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].location === "Zone 2") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredExhibit === "Zone 3") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].location === "Zone 3") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredExhibit === "Zone 4") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].location === "Zone 4") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredExhibit === "Zone 5") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].location === "Zone 5") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredExhibit === "Other") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].location === "Other") {
         output.push(input[i]);
       }
     }
     return output;
   }
 }
}
