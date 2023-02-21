import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.showSplash();
  }

  async showSplash() {
    //await this.platform.ready();
    setTimeout(async () => {
      const lottie = (window as any).lottie;
      await lottie.splashscreen.hide();
    }, 5000);
    //const lottie = (window as any).lottie;
    //await lottie.splashscreen.hide();
    //await lottie.splashscreen.show('public/assets/demo-lottie.json', false);//, 1024, 768);
    
    //await lottie.splashscreen.show('https://assets.lottiefiles.com/datafiles/99nA1a7mkSF3Oz8/data.json', true, 1024, 768);

  }
}
