import { AuthService } from './shared/services/auth.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent implements OnInit {
  title = 'La Plateforme de ASM';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(public authService: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change",this._mobileQueryListener);
  }
  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }


  ngOnDestroy(): void {
  this.mobileQuery.removeEventListener("change",this._mobileQueryListener);
}
}