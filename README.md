# Sample Application
Test for `cordova-plugin-lottie-splashscreen` to see if it will work in the Capacitor application. Result is a crash in Android, runs in iOS.

## Error in Android Cap > 3.4.1
Error will throw in `LottieSplashScreen.kt`:
`webView.engine.evaluateJavascript("document.dispatchEvent(new Event('lottieAnimationStart'))") { }`

where `webView.engine` is null

A similar fix was done in Capacitor iOS in this [PR](https://github.com/ionic-team/capacitor/pull/4039/files) but Android still has this issue.

## Error in Android
This occurs in Capacitor in versions 3.4.1 and below:
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