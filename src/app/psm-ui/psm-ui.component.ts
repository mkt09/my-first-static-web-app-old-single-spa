import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PsmDataService } from '../../shared/psm-data-service';
import { EmptyRouteComponent } from '../empty-route/empty-route.component';

@Component({
  selector: 'app-psm-ui',
  templateUrl: './psm-ui.component.html',
  styleUrls: ['./psm-ui.component.scss']
})
export class PsmUiComponent implements OnInit, OnDestroy {

  singleSpaProps: any;
  serviceTag: any;

  constructor(private router: Router, 
    private translateService: TranslateService,
    private psmDataService: PsmDataService
    ) { 
    this.serviceTag = psmDataService.serviceTag;
  }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {

  }

  onDeploymentClick(){
    this.router.navigateByUrl('/psmDeployment');
  }

  onOverviewClick(){
    this.router.navigateByUrl('/psmOverview');
  }

  onInsightClick(){
    this.router.navigateByUrl('/psmInsight');
  }


}
