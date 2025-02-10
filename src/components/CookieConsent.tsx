import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="myCookieConsent"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4E503B', fontSize: '13px' }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: '10px' }}>
        Learn more about our <a href="/website/privacy-policy">Privacy Policy</a>.
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
