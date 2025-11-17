import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IframeService } from '../../services/iframe.service';

@Component({
  selector: 'app-left-nav',
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './left-nav.html',
  styleUrl: './left-nav.css',
})
export class LeftNav {
   @Input() collapsed = false;

   constructor(private iframeService: IframeService, private router: Router ) 
   {}

  openIframe(url: string) {
    this.iframeService.setUrl(url);
    this.router.navigate(['/iframe']);
  }
  navigateTo(route: string) {

    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

}
