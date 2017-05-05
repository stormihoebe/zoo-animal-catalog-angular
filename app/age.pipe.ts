import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
    var output: Animal[] = [];
    if(desiredAge === "All") {
     for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }

    return output;
  } else if (desiredAge === "Young") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].ageCaracteristic === "Young") {
        output.push(input[i]);
      }
    }
    return output;
  }  else if (desiredAge === "Mature") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].ageCaracteristic === "Mature") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredAge === "Senior") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].ageCaracteristic === "Senior") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredAge === "Unknown") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].ageCaracteristic === "Unknown") {
         output.push(input[i]);
       }
     }
     return output;
   }
 }
}
