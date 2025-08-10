import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

interface Data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-display',
  imports: [MatIconModule, MatTableModule],
  templateUrl: './data-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDisplayComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Data[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  ];
}
