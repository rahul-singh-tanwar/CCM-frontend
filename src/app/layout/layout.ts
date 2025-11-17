import { Component } from '@angular/core';
import { MatSidenavModule, MatSidenav  } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LeftNav } from './left-nav/left-nav';
import { AuthService } from '../../utils/AuthService';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LeftNav,
    RouterModule,
    MatMenuModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }

}
