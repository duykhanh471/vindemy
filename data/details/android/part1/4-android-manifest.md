## App Manifest


Every Android project must have an **AndroidManifest.xml** file which describes essential information about the application such as the package name, entry points, components, permissions, and metadata.

### Package Name and Application ID

Every Android project must have a **package** attribute, which represents your application’s universally unique application ID in the **AndroidManifest.xml** file. The manifest file must be located in your **/src/main** folder.

```xml
1<manifest xmlns:android="http://schemas.android.com/apk/res/android"
2    xmlns:tools="http://schemas.android.com/tools"
3    package="io.getstream.chat.android.ui">
4    …
```

The `package` attribute is the only guaranteed way to identify your application on the Android system (Physical device) and in Google Play. The Android build tools use the `package` attribute for the following:

-   Applying the package name as the namespace for your [app resources](https://developer.android.com/guide/topics/resources/providing-resources).
-   Resolving implicit class names that are declared in the manifest file. For example, with the above manifest, an activity declared as `<activity android:name=".MainActivity">` is resolved to be `io.getstream.chat.android.ui.MainActivity`. So the classes also must be in the same package folder.

For more information, you can check out [App Manifest Overview](https://developer.android.com/guide/topics/manifest/manifest-intro)