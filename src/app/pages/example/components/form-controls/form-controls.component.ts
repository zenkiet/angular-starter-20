import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
})
export class FormControlsComponent implements OnInit {
  inputControl = new FormControl('', [Validators.required]);
  selectControl = new FormControl('');
  multiSelectControl = new FormControl<string[]>([]);
  checkboxControl = new FormControl(false);
  radioControl = new FormControl('option1');
  autocompleteControl = new FormControl('');

  $filterOptions = signal<string[]>([]);

  // Autocomplete
  options = [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
    {
      label: 'Option 4',
      value: 'option4',
    },
    {
      label: 'Option 5',
      value: 'option5',
    },
  ];

  autocompleteOptions: string[] = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
    'jQuery',
    'Javascript',
    'Typescript',
  ];

  private _destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.autocompleteControl.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        map((value) => {
          const result = this._filterAutocomplete(value || '');
          this.$filterOptions.set(result);
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }

  private _filterAutocomplete(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.autocompleteOptions.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
