import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '@core/theme';

@Component({
  selector: 'app-theme-selection',
  templateUrl: './theme-selection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule],
})
export class ThemeSelectionComponent {
  private _themeService = inject(ThemeService);

  setTheme(theme: 'dark' | 'light' | 'system') {
    this._themeService.setScheme(theme);
  }
}
