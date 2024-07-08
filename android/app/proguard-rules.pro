# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-assumenosideeffects class android.util.Log { *; }

# Keep all classes and members in the io.invertase.firebase package
-keep class io.invertase.firebase.** { *; }

# Don't warn about missing classes in the io.invertase.firebase package
-dontwarn io.invertase.firebase.**

# Keep attributes related to annotations
-keepattributes *Annotation*,EnclosingMethod,InnerClasses,Signature

# Keep methods annotated with @org.greenrobot.eventbus.Subscribe
-keepclassmembers class ** {
    @org.greenrobot.eventbus.Subscribe <methods>;
}

# Keep the enum org.greenrobot.eventbus.ThreadMode and all its members
-keep enum org.greenrobot.eventbus.ThreadMode { *; }

-keep class com.errorapp.** { *; }
-dontwarn com.errorapp.**
-keep class android.support.** { *; }
-keep class androidx.** { *; }

## Keep React Native's native modules and their methods
#-keep class com.facebook.react.** { *; }
#-keep class com.facebook.hermes.** { *; }
#-keep class com.facebook.soloader.** { *; }
#
## Don't strip out methods used in JS
#-keepclassmembers class *  {
#  @com.facebook.react.bridge.ReactMethod <methods>;
#}
#
## Keep classes used in XML layout files
#-keepclassmembers class * {
#  public <init>(android.content.Context, android.util.AttributeSet);
#}
#
## Keep the React Native internal interfaces and methods
#-keepclassmembers @com.facebook.proguard.annotations.DoNotStrip class * { *; }
#-keep @com.facebook.proguard.annotations.DoNotStrip class *
#-keep @com.facebook.proguard.annotations.KeepGettersAndSetters class *
