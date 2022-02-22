import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { APP_ROUTES } from 'src/app/app.module';

interface IMfAppDetails {
  route: string;
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  moduleName: string;
}


const ModuleFedratedAppDetails: IMfAppDetails[] = [
  {
    route: 'psmInsight',
    remoteEntry: '/mf/satd-insight/remoteEntry.js',
    remoteName: 'psmInsight',
    exposedModule: './PsmInsightModule',
    moduleName: 'PsmInsightModule'
  },
  {
    route: 'psmOverview',
    remoteEntry: '/mf/satd-overview/remoteEntry.js',
    remoteName: 'psmOverview',
    exposedModule: './PsmOverviewModule',
    moduleName: 'PsmOverviewModule'
  },
  {
    route: 'psmDeployment',
    remoteEntry: '/mf/satd-deployment/remoteEntry.js',
    remoteName: 'psmDeployment',
    exposedModule: './PsmDeploymentModule',
    moduleName: 'PsmDeploymentModule'
  }
];

@Injectable({
  providedIn: 'root'
})

export class MfLoaderService {

  // public getRegisteredModuleFedApp(){
  //   return of(ModuleFedratedAppDetails).pipe(delay(5000)).pipe(map(x => {
  //     console.log('Service called now ..')
  //      return this.loadLazyRoutes(x);
  //   })).toPromise();
  // }

  // private loadLazyRoutes(mfAppDetails: IMfAppDetails[]){
  //   let routeDetails: any[] = [];
  //   mfAppDetails.forEach(item => {
  //     routeDetails.push({
  //       path: item.route,
  //       loadChildren: () => 
  //       loadRemoteModule({
  //         remoteEntry: item.remoteEntry,
  //         remoteName: item.remoteName,
  //         exposedModule: item.exposedModule,
  //       }).then((m) => {
  //         return m[item.moduleName];
  //       })
  //     })
  //   });
  //   return routeDetails;
  // }
}
