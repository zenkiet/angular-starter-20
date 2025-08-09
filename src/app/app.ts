import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="p-4 text-2xl font-bold">Welcome to {{ $title() }}!</h1>
    </div>

    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly $title = signal('angular-starter-20');
}
