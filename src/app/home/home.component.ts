import { Component } from '@angular/core';

const parseJSON = (resp: { json: () => any; }) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const headers = {
'Content-Type': 'application/json',
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contenu = [];
  error: unknown;

  async ngOnInit() {
    try {
      const contenu = await fetch('http://localhost:1337/api/contents', {
        method: 'GET',
        headers: headers,
      })
        .then(parseJSON);
      this.contenu = contenu.data;
      console.log(contenu.data.attributes);
      const results = contenu.data.map((e: { attributes: any; }) => e.attributes)
      console.log(results);
    } catch (error) {
      this.error = error;
    }
}
}