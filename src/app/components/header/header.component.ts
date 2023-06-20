import { Component } from '@angular/core';
import { CognitoService } from 'src/app/cognito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cognito: CognitoService) {}

  public isAuthenticated(): boolean {
    return this.cognito.isAuthenticated();
  }

}
