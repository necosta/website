import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner: React.FC = () => {

  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9DQ6CP49LR';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-9DQ6CP49LR');
  };
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="myCookieConsent"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4E503B', fontSize: '13px' }}
      expires={150}
      enableDeclineButton
      onAccept={() => {
        loadGoogleAnalytics(); // Load tracking script only after acceptance
        console.log('User accepted cookies');
      }}
      onDecline={() => {
        console.log('User declined cookies');
      }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: '10px' }}>
        Learn more about our <a href="/website/privacy-policy">Privacy Policy</a>.
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
