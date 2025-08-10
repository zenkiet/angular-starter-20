import { inject, provideEnvironmentInitializer } from '@angular/core';
import { Icon } from './icon.model';
import { IconsService } from './icon.service';

export const provideIcons = (config: Icon[]) => {
  return [provideEnvironmentInitializer(() => inject(IconsService).register(config))];
};
