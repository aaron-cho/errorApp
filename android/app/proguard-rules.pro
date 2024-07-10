# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

## Preserve the React Native bridge classes and methods
-keep, allowobfuscation class com.facebook.react.** { *; }

# Preserve React Native modules and their methods
-keep, allowobfuscation class * extends com.facebook.react.bridge.ReactContextBaseJavaModule { *; }
-keep, allowobfuscation class * implements com.facebook.react.bridge.NativeModule { *; }

# Preserve methods annotated with @ReactMethod
-keepclassmembers, allowobfuscation class * {
    @com.facebook.react.bridge.ReactMethod <methods>;
}

# Preserve attributes used by React Native
-keepattributes *Annotation*,EnclosingMethod,InnerClasses

# Preserve classes and methods used by the React Native framework
-keepnames @interface * extends java.lang.annotation.Annotation

# Preserve native methods
-keepclassmembers, allowobfuscation class **.** {
    native <methods>;
}

-keep, allowobfuscation class com.** { *; }

# Preserve line numbers and source file names for better debugging
-keepattributes SourceFile,LineNumberTable

# Obfuscate everything else
-dontwarn com.facebook.react.**
-dontwarn com.facebook.infer.annotation.**
-dontwarn javax.annotation.**
-dontwarn com.squareup.**
-dontwarn okhttp3.**
-dontwarn androidx.exifinterface.media.ExifInterface

-printconfiguration proguard-configuration.txt