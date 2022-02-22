import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { PsmDataService } from 'src/shared/psm-data-service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  sample: string[] = ['X', 'G', 'H', 'N', 'J', 'S'];
  constructor(private router: Router, private psmServie: PsmDataService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // console.log('Dummy called ..........' + this.router.url)
    // console.log('State Data recived is ==> ' + JSON.stringify(window.history.state));

    // let subRoute = (<any>window)['mf-route'];

    // if(subRoute && subRoute.sub === 'psmDeployment'){
    //   console.log('I am here .. 1')
    //   this.router.navigateByUrl('/satd/' + subRoute.sub, {skipLocationChange: true});
    //  }
    //  else{
    //   this.router.navigateByUrl('/satd/psmui', {skipLocationChange: true});
    //  }

    // this.activeRoute.queryParams.subscribe(params => {
    //    console.log('PArams recived are ' + JSON.stringify(params));

    //    if(params && params.container){
    //     this.router.navigateByUrl('/satd/' + params.container);
    //    }
    //    else{
    //     this.router.navigateByUrl('/satd/psmui', {skipLocationChange: true});
    //    }
    // });
    
    // console.log('PSM Service tag is => ' + this.psmServie.serviceTag);

    // if(this.psmServie.serviceTag && this.sample.filter(x=> x === this.psmServie.serviceTag[0]).length > 0){
    //   this.psmServie.serviceTag = '';
      // this.router.navigateByUrl('/psmDeployment');
    // }
    // else{
    //   this.router.navigateByUrl('/satd/psmui', {skipLocationChange: true});
    // }

    // console.log('Dummy is called always...' + this.router.url);

    // if(this.router.url !== '/satd'){
    //   this.router.navigateByUrl('/satd/psmDeployment');
    // }
    // else{
    //   this.router.navigateByUrl('/satd/psmui', {skipLocationChange: true});
    // }
    // this.router.navigateByUrl(this.router.url);

    // this.router.navigateByUrl('/satd/psmui', {skipLocationChange: true});

  }
  
}
