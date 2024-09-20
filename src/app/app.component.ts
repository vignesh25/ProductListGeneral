import { Component,OnInit  } from '@angular/core';
import { ManifestService } from './manifest.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  constructor(private manifestService: ManifestService, private router: Router) {
    
  }

  ngOnInit() {
    const manifestData = this.manifestService.getManifestData('#6D8500', 'Dynamic Food Order', 'D-Food');
    this.updateManifest(manifestData);
  }


 
  updateManifest(data: any) {
    const manifestElement = document.querySelector('link[rel="manifest"]');
    const manifestBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(manifestBlob);

    if (manifestElement) {
      manifestElement.setAttribute('href', manifestURL);
    }
  }
  // private updateHeaderVisibility(): void {
  //   this.showHeader = !this.router.url.includes('/description');
  // }
}