// Golden Crust Bakery - small client-side enhancements and form validation
document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");
  const enquiryMessage = document.getElementById("formMessage");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!enquiryForm.checkValidity()) {
        enquiryMessage.textContent = "Please complete the required fields before submitting.";
        enquiryForm.reportValidity();
        return;
      }
      enquiryMessage.textContent = "Thank you. Your enquiry has been captured for this demonstration website.";
      enquiryForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactMessage.textContent = "Please complete the required fields before submitting.";
        contactForm.reportValidity();
        return;
      }
      contactMessage.textContent = "Thank you. Your message has been captured for this demonstration website.";
      contactForm.reset();
    });
  }
});
