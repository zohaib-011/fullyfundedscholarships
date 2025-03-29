declare global {
    interface Window {
      adsbygoogle?: any;
    }
  }
"use client"
  import { useEffect } from "react";

  const GoogleAd: React.FC = () => {
    useEffect(() => {
      // Load Google AdSense script
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      document.body.appendChild(script);
  
      // Initialize AdSense ads
      script.onload = () => {
        try {
          if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (error) {
          console.error("AdSense error:", error);
        }
      };
    }, []);
  
    return (
      <div>
        {/* Google Ad Container */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3940256099942544"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  };
  
  export default GoogleAd;
  
