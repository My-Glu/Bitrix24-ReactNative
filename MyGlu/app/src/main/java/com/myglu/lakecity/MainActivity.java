package com.myglu.lakecity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    WebView webview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webview = findViewById(R.id.web_view);
        WebSettings webSettings = webview.getSettings();
        webSettings.setJavaScriptEnabled(true);
//        webview.loadUrl("http://127.0.0.1:8000/");
//        webview.loadUrl("http://192.168.0.128:88/");
//        webview.loadUrl("http://192.168.10.35:88/");
        webview.loadUrl("https://lakecity.my-glu.com");

        webview.setWebViewClient(new WebViewClient());

    }

    @Override
    public void onBackPressed() {


        if(webview.canGoBack()){

            webview.goBack();
        }else{
            super.onBackPressed();
        }

    }
}