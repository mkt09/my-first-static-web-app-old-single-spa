import { loadRemoteModule } from "@angular-architects/module-federation";
// import { MfAppDetails } from "../environments/environment";

  // export function loadLazyRoutes(){
  //   let routeDetails: any[] = [];
  //   MfAppDetails.forEach(item => {
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