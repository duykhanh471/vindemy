## Intents


An intent is an abstract description of an action that will execute at a later time. For example, it allows you to trigger the entry points of app components or to send messages to broadcast receivers.

### Use Cases of Intents

According to the [Android Docs](https://developer.android.com/guide/components/intents-filters), these are the most common use cases of intents:

-   **Starting an activity**: You can launch a new activity by passing an intent to the [startActivity()](https://developer.android.com/reference/android/content/Context#startActivity(android.content.Intent)) method. The intent defines the activity’s behavior and delivers the necessary data that should be used in a new activity.
    
-   **Starting a service**: You can run a new service by passing an intent to the [startService()](https://developer.android.com/reference/android/content/Context#startService(android.content.Intent)) method. The intent defines the service’s behavior and delivers the necessary data that should be used in a new service.
    
-   **Delivering messages to a broadcast receiver**: You can deliver messages to a broadcast receiver by passing an intent to [sendBroadcast()](https://developer.android.com/reference/android/content/Context#sendBroadcast(android.content.Intent)) or the [sendOrderedBroadcast()](https://developer.android.com/reference/android/content/Context#sendOrderedBroadcast(android.content.Intent,%20java.lang.String)) method. You can deliver an intent as a broadcast message to your app or other apps from other app components.
    

### Intent Types

There are two types of intents:

-   **Explicit Intents**: Explicit intent includes specified information, which targets an application’s package name or a fully-qualified component class name. For example, you can start an **Activity/Service** or send a message to a **Broadcast Receiver** with an **Intent** that includes an explicit target class or package information.
-   **Implicit Intents**: Implicit Intent does not include specified target information, but instead declares a general action to perform. For example, if you want to show the user images in a gallery or open a URL on a web browser, you can use an implicit intent to request action to the Android system. Then, the Android system searches all installed applications for [intent filters](https://developer.android.com/reference/android/content/IntentFilter) and compares the appropriate component to start the implicit intent. If the Android system finds an appropriate component, it will show you the available list of components, but if not, you can’t perform the implicit intent.


The figure below describes how implicit intents work. For further information, check out [Intents and Intent Filters](https://developer.android.com/guide/components/intents-filters).