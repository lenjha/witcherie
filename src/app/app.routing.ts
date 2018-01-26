import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CommunityComponent } from './community/community.component';
import { WorldComponent } from './world/world.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'world',
    component: WorldComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
