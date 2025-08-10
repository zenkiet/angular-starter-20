import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'example-bottom-sheet',
  template: `
    <mat-nav-list>
      <a
        mat-list-item
        tabindex="-1"
        (click)="closeBottomSheet()"
        (keydown.enter)="closeBottomSheet()"
      >
        <span matListItemTitle>Share with Email</span>
        <span matListItemLine>Share this application via Email</span>
      </a>
      <a
        mat-list-item
        tabindex="-1"
        (click)="closeBottomSheet()"
        (keydown.enter)="closeBottomSheet()"
      >
        <span matListItemTitle>Share with Twitter</span>
        <span matListItemLine>Share this application on Twitter</span>
      </a>
      <a
        mat-list-item
        tabindex="-1"
        (click)="closeBottomSheet()"
        (keydown.enter)="closeBottomSheet()"
      >
        <span matListItemTitle>Share with Facebook</span>
        <span matListItemLine>Share this application on Facebook</span>
      </a>
    </mat-nav-list>
  `,
  imports: [MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent {
  private _bottomSheetRef = inject(MatBottomSheet);

  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
