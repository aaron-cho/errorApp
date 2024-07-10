package com.errorapp;

import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class NativeErrorModule extends ReactContextBaseJavaModule {
    NativeErrorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "NativeErrorModule";
    }

    @ReactMethod
    public void throwError() {
        try {
            String value = null;
            value.length();
        } catch (NullPointerException e) {
//            System.out.println("hello");
//            throw e;  // prints stack trace to AndroidRuntime

//            e.printStackTrace(); // prints stack trace to System.err

            Log.e("NativeErrorModule", "Exception occurred", e);
            throw e;


//            callback.invoke(e.getStackTrace());
//
//            // convert stack trace to a string
//            StringBuilder stackTraceString = new StringBuilder();
//            for (StackTraceElement element : e.getStackTrace()) {
//                stackTraceString.append(element.toString()).append("\n");
//            }
//            // pass the string to the callback
//            callback.invoke(stackTraceString.toString());
        }
    }
}
