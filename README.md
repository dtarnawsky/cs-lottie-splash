# Sample Application
Test for `cordova-plugin-lottie-splashscreen` to see if it will work in the Capacitor application. 

TLDR: It will run in Android and in iOS (with a tweak to plugin.xml).

## Version 0.10.0
Tested with Capacitor 4 with iOS and Android. This version works if setting initial values in `capacitor.config.ts`. For example:

```typescript
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
```

Note: Android has the animation correctly centered. iOS does not.

## Fixing for iOS
Open `node_modules\cordova-plugin-lottie-splashscreen\plugin.xml` and comment out this line seen below:
```xml
     <platform name="ios">
     <config-file target="config.xml" parent="/*"> 
     <feature name="LottieSplashScreen"> 
        <param name="ios-package" value="LottieSplashScreen" /> 
        <!--    <param name="onload" value="true"/>--> 
     </feature>
```

## Versions prior to 0.10.0

The following error would occur with Capacitor 3.4.1 and above:
Error will throw in `LottieSplashScreen.kt`:
`webView.engine.evaluateJavascript("document.dispatchEvent(new Event('lottieAnimationStart'))") { }`

where `webView.engine` is null

A similar fix was done in Capacitor iOS in this [PR](https://github.com/ionic-team/capacitor/pull/4039/files) but Android still has this issue.

## Error with Capacitor 3.4.1 and below
This version of Capacitor did not support Kotlin. This occurs in Capacitor in versions 3.4.1 and below:
```java
java.lang.NullPointerException: Attempt to invoke virtual method 'void org.apache.cordova.CordovaPlugin.privateInitialize(java.lang.String, org.apache.cordova.CordovaInterface, org.apache.cordova.CordovaWebView, org.apache.cordova.CordovaPreferences)' on a null object reference
        at org.apache.cordova.PluginManager.getPlugin(PluginManager.java:171)
        at org.apache.cordova.PluginManager.startupPlugins(PluginManager.java:97)
        at org.apache.cordova.PluginManager.init(PluginManager.java:86)
        at com.getcapacitor.cordova.MockCordovaWebViewImpl.init(MockCordovaWebViewImpl.java:58)
        at com.getcapacitor.Bridge$Builder.create(Bridge.java:1269)
        at com.getcapacitor.BridgeActivity.load(BridgeActivity.java:72)
        at com.getcapacitor.BridgeActivity.onStart(BridgeActivity.java:110)
        at android.app.Instrumentation.callActivityOnStart(Instrumentation.java:1432)
        at android.app.Activity.performStart(Activity.java:7825)
        at android.app.ActivityThread.handleStartActivity(ActivityThread.java:3322)
        at android.app.servertransaction.TransactionExecutor.performLifecycleSequence(TransactionExecutor.java:221)
        at android.app.servertransaction.TransactionExecutor.cycleToPath(TransactionExecutor.java:201)
        at android.app.servertransaction.TransactionExecutor.executeLifecycleState(TransactionExecutor.java:173)
        at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:97)
        at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2041)
        at android.os.Handler.dispatchMessage(Handler.java:107)
        at android.os.Looper.loop(Looper.java:214)
        at android.app.ActivityThread.main(ActivityThread.java:7389)
        at java.lang.reflect.Method.invoke(Native Method)
        at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:492)
        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:980)
```