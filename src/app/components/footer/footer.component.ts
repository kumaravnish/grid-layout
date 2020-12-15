import { Component } from '@angular/core';

@Component({
  selector: 'page-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  get year(): number {
    return new Date().getFullYear();
  }

}
