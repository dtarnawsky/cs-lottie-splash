import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private lottieSplashScreen: LottieSplashScreen) {
    this.showSplash();
  }

  async showSplash() {
    console.log('Splash screen show');
    await this.lottieSplashScreen.show('assets/bee.json', false, 1024, 768);
    console.log('Splash screen shown');
  }
}
