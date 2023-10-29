## Android Platform Architecture



Android platform architecture consists of six layers built on top of the Linux Kernel. (**Note:** The actual architecture is stacked in the reverse order of the figure above.)

Let’s discuss each layer:

### The Linux Kernel

The Linux Kernel is the core of the Android platform architecture. It manages low-level memory and all the available hardware drivers – such as the WiFi driver, camera driver, audio driver, bluetooth driver, display driver, and all peripheral drivers – via its [Low Memory Killer Daemon](https://source.android.com/devices/tech/perf/lmkd).

### Hardware Abstraction Layer (HAL)

[The hardware abstraction layer](https://source.android.com/devices/architecture/hal) (HAL) bridges hardware capabilities to the higher-level Java API Framework by defining standard interfaces, allowing you to implement the low-level functionalities without modifying the higher-level systems.

HAL implementations are packaged into modules, which are stored as a shared library (`.so` file) and loaded by the Android system at the appropriate time.

### Android Runtime

[Android Runtime](https://source.android.com/devices/tech/dalvik/index.html) (ART) is an application [Runtime System](https://en.wikipedia.org/wiki/Runtime_system) used by Android OS and one of the core features in the Android ecosystem. ART was invented to replace the [Dalvik virtual machine](https://en.wikipedia.org/wiki/Dalvik_(software)) for devices running Android version 5.0 (L​ollipop) or higher.

The main role of ART is to execute the [Dalvik Executable format](https://source.android.com/devices/tech/dalvik/dex-format) (DEX) by translating DEX bytecode into machine code that your system can understand.

ART architecture was written to run multiple virtual machines on low-memory devices. Some key features are directly related to the speed of running the Android applications. Key features of ART include:

-   Ahead-of-time (AOT) and just-in-time (JIT) compilation
-   Enhanced garbage collection (GC)
-   [Converting an app package's DEX files to condensed machine code](https://developer.android.com/about/versions/pie/android-9.0#art-aot-dex) (on Android 9 (API level 28+))
-   Better debugging support, including detailed diagnostics and crash reporting, the ability to set multiple watchpoints, and more

For more details, check out [Android Runtime (ART) and Dalvik](https://source.android.com/devices/tech/dalvik/index.html).

### Native C/C++ Libraries

The Android platform includes a pair of [Native APIs](https://developer.android.com/ndk/guides/stable_apis), which work on top of the [Native Development Kit](https://developer.android.com/ndk/guides) (NDK).

The Native APIs let you manage native activities and access physical device components such as cameras, sensors, graphics, and audio. They are also exposed to the higher-level layers, so you can control the components of the physical device on the Java API framework.

### Java API Framework (Application Framework)

The Java API framework is a collection of Android libraries written in Java and Kotlin that provide the entire feature-set of the Android OS. Android APIs include an extensible [View System](https://developer.android.com/guide/topics/ui/declaring-layout), reusable components, and system managers which are used to build your Android applications by simplifying the reuse of interfaces.

One of the more powerful APIs in the Java API framework is [Android Jetpack](https://developer.android.com/jetpack), which is pushed by Google. Jetpack accelerates development speed by reducing boilerplate code so that developers can focus on the code they care about.

Also, it provides solutions like Lifecycle, UI toolkit, Navigation, Security, Caching, Scheduler, Dependency Injection, and a lot more. You’ll cover this deeply in future posts.

### System Apps

System apps are pre-installed apps such as email, SNS messaging, calendars, internet browsing, contacts, and more, which are located in the system partition with your ROM. The configuration of the System Apps may vary depending on the mobile phone manufacturer. For more details, you can check out [System Apps](https://developer.android.com/guide/platform#system-apps).

In this section, you covered the overall architecture of the Android platform. For more details, check out [Android Platform Architecture](https://developer.android.com/guide/platform).