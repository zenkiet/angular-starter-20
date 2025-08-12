import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

// Angular Material Imports
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ButtonIndicatorsComponent,
  DataDisplayComponent,
  DateTimeComponent,
  FormControlsComponent,
  ProcessBarComponent,
  ThemeSelectionComponent,
} from './components';
import { ExampleDialogComponent } from './dialogs/example-dialog/example-dialog.component';

@Component({
  selector: 'app-example',
  imports: [
    ThemeSelectionComponent,
    FormControlsComponent,
    DateTimeComponent,
    ButtonIndicatorsComponent,
    ProcessBarComponent,
    DataDisplayComponent,
  ],
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
  private _dialog = inject(MatDialog);
  private _bottomSheet = inject(MatBottomSheet);
  private _snackBar = inject(MatSnackBar);
  // private _loader = inject(LoaderService);
  // private _toast = inject(ToastService);

  // Form controls
  exampleControl = new FormControl('');

  autocompleteControl = new FormControl('');

  // Badge
  unreadCount = 5;

  openDialog() {
    this._dialog.open(ExampleDialogComponent, {
      width: '600px',
      data: {
        message: 'This is a custom dialog',
      },
    });
  }

  openBottomSheet() {
    // this._bottomSheet.open(ExampleBottomSheetComponent);
  }

  openSnackBar() {
    this._snackBar.open('This is a snackbar message', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  openLoader() {
    // this._loader.show();

    setTimeout(() => {
      // this._loader.hide();
    }, 3000);
  }

  openToast() {
    alert('Message: Lorem ipsum dolor sit amet');
    // this._toast.info('Message: Lorem ipsum dolor sit amet', 'Hello World');
  }

  protected readonly Math = Math;
}
