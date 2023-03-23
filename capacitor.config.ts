import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.lottie',
  appName: 'cs-lottie-splash',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      LottieAnimationLocation: 'public/assets/demo-lottie.json',
      LottieFullScreen: 'false',
      LottieLoopAnimation: 'true',
      LottieFadeOutDuration: '1',
      LottieWidth: '0.9',
      LottieHeight: '0.9',
      LottieRelativeSize: 'true',
      LottieBackgroundColor: '#7931AA',
    }
  }
};

export default config;
