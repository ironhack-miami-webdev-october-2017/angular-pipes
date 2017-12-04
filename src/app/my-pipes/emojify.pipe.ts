import { Pipe, PipeTransform } from '@angular/core';

// {{ variable | emojify }}
@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(myText: string): string {
      // return empty string if the text is empty
      if (!myText) {
          return "";
      }

      return myText
        .replace(/tacos?/ig,     "🌮")
        .replace(/burritos?/ig,  "🌯")
        .replace(/poop?s?/ig,    "💩")
        .replace(/cats?/ig,      "🐈")
        .replace(/dog(go)?s?/ig, "🐩")
        .replace(/dolphins?/ig,  "🐬");

      // tacos? means the "s" is optional (the letter right before the "?")
      // (i)gnore case (make it work with "taco" or "TaCo")
      // (g)lobal match (find and replace ALL the "taco"s)
  }

}
