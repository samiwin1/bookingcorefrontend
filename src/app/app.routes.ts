import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/features.module')
          .then(mod => mod.FeaturesModule)
    },
];
