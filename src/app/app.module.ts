import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PsmUiComponent } from './psm-ui/psm-ui.component';
import { PsmUiModule } from './psm-ui/psm-ui.module';
import { SharedModule } from 'src/shared/shared.module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
// import { MfeFrameworkProvider } from '../single-spa/mfe-framework.provider';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: PsmUiComponent // Required one eager loaded component
  },
  {
    path: 'satd',
    redirectTo: ''
  },
  {
    path: 'psmDeployment',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'https://cdn.jsdelivr.net/gh/mkt09/module-fed-psm-deployment/dist/psm-deployment/remoteEntry.js',
        remoteName: 'psmDeployment',
        exposedModule: './PsmDeploymentModule',
      }).then((m) => {
        return m.PsmDeploymentModule;
      }),
  },
  {
    path: 'psmOverview',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'https://cdn.jsdelivr.net/gh/mkt09/module-fed-overview/dist/psm-overview/remoteEntry.js',
        remoteName: 'psmOverview',
        exposedModule: './PsmOverviewModule',
      }).then((m) => {
        return m.PsmOverviewModule;
      }),
  },
  {
    path: 'psmInsight',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'https://cdn.jsdelivr.net/gh/mkt09/module-fed-insight/dist/psm-insight/remoteEntry.js',
        remoteName: 'psmInsight',
        exposedModule: './PsmInsightModule',
      }).then((m) => {
        return m.PsmInsightModule;
      }),
  },
  {
    path: '**',
    component: PsmUiComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    EmptyRouteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    PsmUiModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  providers: [ // MfeFrameworkProvider,
    { provide: APP_BASE_HREF, useValue: '/satd' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
