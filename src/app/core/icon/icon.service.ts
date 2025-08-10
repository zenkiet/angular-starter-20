import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from './icon.model';

@Injectable({ providedIn: 'root' })
export class IconsService {
  private readonly _domSanitizer = inject(DomSanitizer);
  private readonly _iconRegistry = inject(MatIconRegistry);

  /**
   * Register icon sets
   */
  register(icons: Icon[]) {
    for (const icon of icons) {
      this._iconRegistry.addSvgIconSetInNamespace(
        icon.name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    }
  }
}
