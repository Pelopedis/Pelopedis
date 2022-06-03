my page: https://devmappouras.github.io/devmappouras

  - [Json data store rules](#simple-rules-for-json-formatting-data)
  - [Linkify pipe](#linkify-pipe)
  - [Deployment](#deployment)

## Documentation

# Simple rules for json formatting data

- To separate text into paragraphs, use  the new line escape character '\n\n'
- Add a white space before a link in text strings i.e 'This is some long string\n\n [white_space] https://now-this-is-alink.com'
- Follow the data formatting in the included data interfaces

# Linkify pipe

You may want to include links in your project descriptions to reference externally hosted projects.

No worries

There is an included pipe that identifies links and renders them correctly even if 
they were just included as plain text and not correctly formatted html.

**NOTE** follow the simple rules for json formatting above to ensure no errors

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  // tslint:disable-next-line: variable-name
  constructor(private _domSanitizer?: DomSanitizer) {}

  transform(value: string): any {
    if (value) {
      const temp = value.split(' ');
      const indexOfOccurrence: any[] = [];
      const links = temp.filter((subStr, index) => {
        const condition = subStr.trim().startsWith('http') || subStr.trim().startsWith('https');
        if (condition) {
          indexOfOccurrence.push(index);
        }
        return condition;
      });
      links.forEach((link, indx) => {
        temp[indexOfOccurrence[indx]] = `<a href="${link}" target="_blank">${link}</a>`;
      });
      return this._domSanitizer.bypassSecurityTrustHtml(temp.join(' '));
    }
  }

}

```

# Deployment

To build run

```bash
ng build --prod --buildOptimizer=true
```

Deploy the output files located in **/dist/** to your favorite hosting platform.
