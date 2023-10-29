## App Entry Points


There are two essential app entry points in Android — activities and app shortcuts. We’ve already discussed activities in the previous section. If you would like to learn more about activities (such as state changes and back stack), you can check out the materials below:

-   [Handle Activity State Changes](https://developer.android.com/guide/components/activities/state-changes)
-   [Task and the Back Stack](https://developer.android.com/guide/components/activities/tasks-and-back-stack)
-   [Parcelables and Bundles](https://developer.android.com/guide/components/activities/parcelables-and-bundles)

Now, we’ll discuss app shortcuts.

### App Shortcuts

App shortcuts allow you to launch a specific action in your app. You can display shortcuts by long-pressing the app icon and you can start tasks by clicking on an item on the list like in the figure below:

There are three types of shortcuts:

-   **Static shortcuts**: Static shortcuts provide links to consistent actions within your app and perform static tasks, which are not dependent on user context. **For example**: Displaying recent messages, writing a post, or searching for a keyword.
-   **Dynamic shortcuts**: Dynamic shortcuts provide links to specific actions, which are based on user context within your app. **For example**: Sending a message to a specific person or navigating to a specific location.
-   **Pinned shortcuts**: Pinned shortcuts (supported on Android 8.0 and higher) allow you to pin a shortcut onto a supported launcher. You can run a specific task by clicking on the pinned shortcuts on the home screen.

We discussed three types of shortcuts. In the following section, you’ll cover creating static shortcuts.

### Creating Static Shortcuts

To create a static shortcut, first create a new resource file `res/xml/shortcuts.xml`:

```
<shortcuts xmlns:android="http://schemas.android.com/apk/res/android">
    <shortcut
        android:shortcutId="message"
        android:enabled="true"
        android:icon="@drawable/ic_message"
        android:shortcutShortabel="@string/short_label"
        android:shortcutLongLabel="@string/long_label"
        android:shortcutDisabledMessage="@string/message_shortcut_disabled">
        <intent
            android:action="android.intent.action.VIEW"
            android:targetPackage="com.example.myapplication"
            android:targetClass="com.example.myapplication.ComposeActivity" />
        <categories android:name="android.shortcut.conversation" />
        <capability-binding android:key="actions.intent.CREATE_MESSAGE" />
    </shortcut>
</shortcuts>
```
Next, for your app to be able to display the shortcut, you must declare it on the [App Manifest](https://getstream.io/blog/android-developer-roadmap/#app-manifest) as seen in the example below:

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.getstream.example">
    <application ... >
        <activity android:name="Main">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <meta-data android:name="android.app.shortcuts"
            android:resource="@xml/shortcuts" />
        </activity>
    </application>
</manifest>
```

For more details, check out the [App shortcuts overview](https://developer.android.com/guide/topics/ui/shortcuts).



