import { DOCUMENT } from '@angular/common';
import { afterRenderEffect, inject, Injectable, OnDestroy, signal } from '@angular/core';

import { STORAGE_KEYS } from '@configs';
import { ColorSchemeType } from './theme.type';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  private document = inject<Document>(DOCUMENT);
  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private listener: ((e: MediaQueryListEvent) => void) | null = null;

  $scheme = signal<ColorSchemeType>(this._getInitialScheme());

  constructor() {
    this.applyTheme(this.$scheme());

    afterRenderEffect(() => this.applyTheme(this.$scheme()));
  }

  ngOnDestroy(): void {
    this._cleanupListener();
  }

  setScheme(newScheme: ColorSchemeType): void {
    if (newScheme !== 'system') {
      localStorage.setItem(STORAGE_KEYS.SCHEME, newScheme);
    } else {
      localStorage.removeItem(STORAGE_KEYS.SCHEME);
    }
    this.$scheme.set(newScheme);
  }

  private _getInitialScheme(): ColorSchemeType {
    const savedScheme = localStorage.getItem(STORAGE_KEYS.SCHEME) as ColorSchemeType;
    return ['dark', 'light'].includes(savedScheme) ? savedScheme : 'light';
  }

  private applyTheme(scheme: ColorSchemeType): void {
    if (scheme === 'system') {
      const systemScheme = this._getSystemScheme();
      this.document.documentElement.setAttribute('data-theme', systemScheme);

      this._setupListener();
    } else {
      this._cleanupListener();
      this.document.documentElement.setAttribute('data-theme', scheme);
    }
  }

  private _getSystemScheme(): 'dark' | 'light' {
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  private _setupListener(): void {
    if (!this.listener) {
      this.listener = (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        this.document.documentElement.setAttribute('data-theme', newTheme);
      };
      this.mediaQuery.addEventListener('change', this.listener);
    }
  }

  private _cleanupListener(): void {
    if (this.listener) {
      this.mediaQuery.removeEventListener('change', this.listener);
      this.listener = null;
    }
  }
}
