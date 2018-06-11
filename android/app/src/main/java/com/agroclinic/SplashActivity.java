package com.agroclinic;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.MainThread;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.SystemClock;
import com.agroclinic.MainActivity;

/**
 * Created by vanmartc on 30/10/17.
 */

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent(this, MainActivity.class);
        SystemClock.sleep(7000);
        startActivity(intent);
        finish();
    }
}
