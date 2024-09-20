import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {

  constructor() { }
  getManifestData(themeColor: string, name: string, shortName: string) {
    return {
      name: name || 'food-order-app',
      short_name: shortName || 'food-order-app',
      theme_color: themeColor || '#2CAEAF',
      background_color: '#2CAEAF',
      display: 'standalone',
      scope: './',
      start_url: './',
      icons: [
        {
          src: 'assets/icons/72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/Square44x44Logo.targetsize-96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/LargeTile.scale-125.png',
          sizes: '388x388',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'assets/icons/512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
    };
  }
}