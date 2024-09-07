import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu = '-- MENU --';
  saludo = 'Hola nombreUser';
  msg = 'Bienvenido a TeLlevoApp';

  constructor(private router: Router) {}

  navigateTo(page: string){
    this.router.navigateByUrl(page);
  }
}