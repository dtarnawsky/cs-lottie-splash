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
      LottieWidth: '200',
      LottieHeight: '200'
    }
  }
};

export default config;
