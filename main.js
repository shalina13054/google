// Example: Tracking button click on home page
document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.getElementById('cta-button');
  const contactForm = document.getElementById('contact-form');

  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      console.log("CTA Button Clicked");
      
      // Google Ads conversion event (example)
      // Replace with real event name if using gtag()
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "cta_click",
          category: "interaction",
          label: "CTA Button on Home",
        });
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('form-response').style.display = 'block';
      console.log("Form submitted");

      // GTM form submit event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submit",
          category: "form",
          label: "Contact Form",
        });
      }

      // Google Ads Conversion (example)
      // gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID'});
    });
  }
});
