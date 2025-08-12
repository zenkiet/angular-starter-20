import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-process-bar',
  imports: [MatIconModule, MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule],
  templateUrl: './process-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessBarComponent {
  progressValue = 35;
  bufferValue = 75;

  protected Math = Math;
}
