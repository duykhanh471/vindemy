## App Components


In Android development, app components are like entry points that allow systems and users to interact with your application. Each component has a distinct function and lifecycle that determines how it's created and destroyed.

Let’s discuss each component:

### Activities

An activity is an independent and reusable component that interacts with the user by providing UI-relevant resources. All Android applications must have at least one activity to enter the app and interact with users.

#### Activity Lifecycles

All activities have their own lifecycle, which is an important concept to manage activities and resources. The [Activity class](https://developer.android.com/guide/components/activities/intro-activities) provides a core set of callback methods that tells an activity that a lifecycle state has changed.

The callback method will be called following the lifecycle sequence seen in the figure below:

![](data:image/svg+xml;charset=utf-8,%3Csvg height='663' width='513' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E)

Activity lifecycle diagram
You can declare how your activity behaves and efficiently manage your resources with lifecycle callback methods. In this section, we’ll discuss the six core callback methods below:

-   **onCreate()**: This callback is invoked when the system creates your activity. Most of the initialization logic, which should occur only once during an Activity’s lifespan, should be placed here (like creating views or binding data).
-   **onStart()**: This callback is invoked after calling the `onCreate()` method as the activity becomes visible to the user. This may happen more than once if you switch between multiple Activities or applications.
-   **onResume()**: This means the activity is ready to come to the foreground and interact with users.
-   **onPause()**: This means the activity is no longer in the foreground, and may still be partially visible (for instance, if the user is in multi-window mode). In most cases, it indicates the user is leaving the activity, and the activity will enter the next state.
-   **onStop()**: This callback is invoked when the activity is no longer visible to the user. This may happen more than once if you switch between multiple Activities or applications.
-   **onDestroy()**: This callback is invoked before an activity is destroyed. The system invokes this callback when the activity is finishing or the system is temporarily destroying the activity due to a configuration change. This callback can be utilized when you need to release or dismiss all remaining resources and allow the [Garbage Collector](https://en.wikipedia.org/wiki/Garbage-first_collector) to withdraw all allocated memories.

For more details, check out [the activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle).

#### Creating an Activity

To create an activity, you must create a class as a subclass of the [Activity](https://developer.android.com/reference/android/app/Activity) class. In modern Android development, the [Jetpack](https://developer.android.com/jetpack?gclid=CjwKCAiA6seQBhAfEiwAvPqu17MkObs0IaGf0x7icvcEV9V2vLeceBAH08BXGqweUtDdSfpfoLLKTxoCDOcQAvD_BwE&gclsrc=aw.ds) library provides advanced Activity classes, such as [AppCompatActivity](https://developer.android.com/reference/androidx/appcompat/app/AppCompatActivity), [FragmentActivity](https://developer.android.com/reference/androidx/fragment/app/FragmentActivity), and [ComponentActivity](https://developer.android.com/reference/androidx/activity/ComponentActivity), to support compatibility with [Themes](https://developer.android.com/guide/topics/ui/look-and-feel/themes), [Fragments](https://developer.android.com/guide/fragments?gclid=CjwKCAiA6seQBhAfEiwAvPqu10UmGlQwgDEmtA9amcoeSRzVE73jC6wuzwCCXGNMDW3nIExNAHUOSRoCbygQAvD_BwE&gclsrc=aw.ds), and more. You can create a basic activity with the following code:

```
class MainActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_main)
	}
}
```


For your app to use activities, you must declare them on the [App Manifest](https://getstream.io/blog/android-developer-roadmap/#app-manifest) as seen in the following example:

```
<manifest ... >
	<application ... >
		<activity android:name=".MainActivity" />
	</application ... >
</manifest >
```


For more information, check out Android’s [Introduction to Activities](https://developer.android.com/guide/components/activities/intro-activities).

### Services

A service is an entry point that is designed to perform functions for remote processes and to run longer-running operations in the background, such as a music player or Youtube video player.

#### Service Lifecycles

A service has its own dedicated lifecycles and provides two types that tell the system how to start and manage services:

-   **startService**: Another component can run a service by calling [startService()](https://developer.android.com/reference/android/content/Context#startService(android.content.Intent)). This service will run in the background and another component can also stop the service by calling [stopService()](https://developer.android.com/reference/android/content/Context#stopService(android.content.Intent)).
-   **bindService**: Another component or a client can run a service by calling [bindService()](https://developer.android.com/reference/android/content/Context#bindService(android.content.Intent,%20android.content.ServiceConnection,%20int)). The `bindService()` function provides a [IBinder](https://developer.android.com/reference/android/os/IBinder) interface, which allows the client to communicate with the service consistently. This service will run in the background. Another component or client can also cancel the connection by calling [unbindService](https://developer.android.com/reference/android/content/Context#unbindService(android.content.ServiceConnection)).

As you can see in the figure below, a service’s lifecycle depends on how it was created:

![](data:image/svg+xml;charset=utf-8,%3Csvg height='507' width='389' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E)


According to the [Android docs](https://developer.android.com/guide/components/services), the figure above “separates services that are created by `startService()` from those created by `bindService()`”, but regardless of how services are started, they can potentially allow clients to bind to them.

#### Creating a Service

To create a service, you must create a class as a subclass of the [Service](https://developer.android.com/reference/android/app/Service) class as shown in the example below:

```
class MyService : Service() {
	private var binder: IBinder? = null
	override fun onCreate() {
		// The service is being created
	}

	override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
		return super.onStartCommand(
			intent,
			flags,
			startId
			) // indicates how to behave if the service is killed
	}

	override fun onBind(intent: Intent?): IBinder? {
	// A client is binding to the service with bindService()
		return binder
	}
	override fun onDestroy() {
		// The service is no longer used and is being destroyed
		}
	}
```

Next, for your app to be able to use the service, you must declare it on the [App Manifest](https://getstream.io/blog/android-developer-roadmap/#app-manifest):

```
<manifest ... >
<application ... >
<service android:name=".MyService" />
</application ... >
</manifest >
```



For more details, check out the [service overview](https://developer.android.com/guide/components/services).

### Broadcast Receiver

Broadcast receiver is a registerable listener that listens to broadcast messages from the Android system and other Android applications. According to the [Android docs](https://developer.android.com/guide/components/broadcasts), broadcasts are used to send messages across apps and outside of the normal user flow, such as when the system boots up or the device starts charging.

Unlike activities and services, the broadcast receiver doesn’t have dedicated lifecycles. Instead, it will listen to all assigned event messages until unregistered.

#### Creating a Broadcast Receiver

To create a broadcast receiver, you must create a class as a subclass of the [Broadcast Receiver](https://developer.android.com/reference/android/content/BroadcastReceiver) class as seen in the example below:
```
class MyBroadcastReceiver : BroadcastReceiver() {
	override fun onReceive(context: Context, intent: Intent) {
		// do something
	}
}
```

Next, for your app to be able to use the service, you must declare it on the [App Manifest](https://getstream.io/blog/android-developer-roadmap/#app-manifest):


```
<receiver android:name=".MyBroadcastReceiver" android:exported="true">
	<intent-filter>
		<action android:name="android.intent.action.BOOT_COMPLETED"/>
		<action android:name="android.intent.action.INPUT_METHOD_CHANGED" />
	</intent-filter>
</receiver>
```

### Content Providers

A content provider manages how your application’s data is accessed and shared with other applications. According to the [Android Docs](https://developer.android.com/reference/android/content/ContentProvider), a content provider enables your app to share any kind of persistent data, be it stored in a file system, a [SQLite database](https://developer.android.com/training/data-storage/sqlite), a [Jetpack Room](https://developer.android.com/jetpack/androidx/releases/room), or on the web.

Content providers secure data by requiring specific permissions. If a requesting application doesn’t have the required permissions, it can’t query the content provider’s data.

![](data:image/svg+xml;charset=utf-8,%3Csvg height='367' width='470' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E)



For more information, check out [creating a content provider](https://developer.android.com/guide/topics/providers/content-provider-creating).
