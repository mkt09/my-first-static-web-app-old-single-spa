import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// import { MfeFramework } from 'sa-mfe-library/framework/mfe-framework'
import { MfLoaderService } from 'src/service/mf-loader.service';
import { PsmDataService } from '../../src/shared/psm-data-service';
import { APP_ROUTES } from './app.module';
import { Observable } from 'windowed-observable';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DummyComponent } from './dummy/dummy.component';
import { Subscription } from 'rxjs';

export interface ITest{
  serviceTag: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnDestroy {

  title = 'psm-satd';
  containerHandler: any;
  observable = new Observable('update-container-state');

  observer = (data: ITest) => {
    if(data?.serviceTag){
      // this.mfeFrameWork.CurrentStateSnapshot?.updateCurrentStateSnapshot({serviceTag: data.serviceTag});
      console.log('Event raised by child here named as <======>' + JSON.stringify(data));
    }
  };

  constructor(private translateService: TranslateService,
    private zone: NgZone,
    private router: Router,
    private psmDataService: PsmDataService,
    private loaderService: MfLoaderService,
    // private mfeFrameWork: MfeFramework
    ) {

    console.log('App Component is called ... 1' + JSON.stringify(window.location.pathname));

    // const currLocale =  this.mfeFrameWork.PreferredLocale?.getLocale() || 'en_US';
    this.translateService.use('en_US');
    // this.psmDataService.serviceTag = this.mfeFrameWork.CurrentStateSnapshot?.getCurrentStateSnapshot()?.serviceTag;
    // this.mfeFrameWork.PreferredLocale?.registerLocaleChangedHandler('satd-mfe', this.onLanguageChanged.bind(this));
    // this.mfeFrameWork.CurrentStateSnapshot?.registerCurrentStateChangedHandler('satd-mfe', this.onCurrentStateChanged.bind(this));
    this.containerHandler = this.updateCurrentHandler.bind(this);

    // (<any>window)['mf-satd'] = {
    //   serviceTag: this.psmDataService.serviceTag,
    //   currentLocale: currLocale,
    //   // slice 1
    //   psmDeployment : {
    //     pcCount: 12,
    //     deviceRegistered: true
    //   },
    //   psmOverview : {
    //     srsReportAvailable: false
    //   },
    //   psmInsight : {
    //     insightScanPresent: true
    //   }
    // }
  }

  showSpinner = true;

  updateCurrentHandler(event: any){
    console.log('Child container has send data to update ' + event.detail.serviceTag);
    // this.mfeFrameWork.CurrentStateSnapshot?.updateCurrentStateSnapshot({serviceTag: event.detail.serviceTag})
  }

  ngOnInit(){
        
    // Initialize route here dynamically - Env approach
    // const routeConfig = [...APP_ROUTES, ...loadLazyRoutes(), {
    //   path: '**',
    //   redirectTo: '',
    //   pathMatch: 'full'
    // }]

    // this.router.resetConfig(routeConfig);

    
    this.observable.subscribe(this.observer);
    window.addEventListener('update-container-state-event', this.containerHandler);
  }

  // async ngOnInit(){
        
  //   const promise = await this.loaderService.getRegisteredModuleFedApp().then(x=> {
  //     const routeConfig = [...x, {
  //       path: '**',
  //       redirectTo: '',
  //       pathMatch: 'full'
  //     }]
  //     this.router.resetConfig(routeConfig);
  //     this.showSpinner = false;
  //   });
  
  // }

  ngOnDestroy(): void {
    // this.mfeFrameWork.PreferredLocale?.unRegisterLocaleChangedHandler('satd-mfe');
    // this.mfeFrameWork.CurrentStateSnapshot?.unRegisterCurrentStateChangedHandler('satd-mfe');
    window.removeEventListener('update-container-state-event', this.containerHandler);
    this.observable.unsubscribe(this.observer);
    this.observable.clear();
  }

  public onNavigate(event: CustomEvent) {
    this.router.navigateByUrl('/' + event.detail);
  }

  public onLanguageChanged(locale: string) {
    this.zone.run(() => {
      this.translateService.use(locale);
      console.log('Raising event from while updating the language from PSM UI container')
      // only as an example here container distributing it to inner child
      window.dispatchEvent(
        new CustomEvent('container-state-updated-event', {
            detail: {
                locale: locale
            }
        }));
    })
  }

  public onCurrentStateChanged(currentState: any) {
    this.zone.run(() => {
      // Top Container notified now container will notify child components 
      // create your own custom event and publish to your child or use rxjs way in mono repo
    })
  }
}
