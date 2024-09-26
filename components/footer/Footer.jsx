import React, { useState } from "react";
import Link from "next/link";

function Footer({ footerStyle, footerImage }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Email", email);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwPVZZHFYX-CBaeV4FxwE0RfINmRn2CX_ZgxeQQ5EAlS0_k3Xnfilv79AB6ZNI0OsQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <footer className={footerStyle}>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <Link href="#">
                    <img alt="image" src={`/${footerImage}`} />
                  </Link>
                  <p>
                    Delivering cutting-edge technology solutions and expert
                    services to help your business thrive. Contact us to learn
                    how we can support your success.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="input-with-btn d-flex justify-content-start align-items-stretch">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit">
                        <img
                          alt="send icon"
                          src="/assets/images/icons/send-icon.svg"
                        />
                      </button>
                    </div>
                    {message && <p>{message}</p>}
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h5>Our Services</h5>
                  <ul className="footer-list">
                    <li>
                      <Link href="/service">Product Development</Link>
                    </li>
                    <li>
                      <Link href="/service">Website Development</Link>
                    </li>
                    <li>
                      <Link href="/service">iOS/Android App Development</Link>
                    </li>
                    <li>
                      <Link href="/service">ML Models</Link>
                    </li>
                    <li>
                      <Link href="/service">LLM Chatbots</Link>
                    </li>
                    <li>
                      <Link href="/service">DevOps</Link>
                    </li>
                    <li>
                      <Link href="/service">See more...</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h5>Company</h5>
                  <ul className="footer-list">
                    <li>
                      <Link href="/about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/service">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/project">Our Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/job-details">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h5>Contact Us</h5>
                  <ul className="address-list">
                    <li>
                      <svg
                        width={18}
                        height={25}
                        viewBox="0 0 14 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 18C7 18 13.75 11.6033 13.75 6.75C13.75 4.95979 13.0388 3.2429 11.773 1.97703C10.5071 0.711159 8.79021 0 7 0C5.20979 0 3.4929 0.711159 2.22703 1.97703C0.961159 3.2429 0.25 4.95979 0.25 6.75C0.25 11.6033 7 18 7 18ZM7 10.125C6.10489 10.125 5.24645 9.76942 4.61351 9.13649C3.98058 8.50355 3.625 7.64511 3.625 6.75C3.625 5.85489 3.98058 4.99645 4.61351 4.36351C5.24645 3.73058 6.10489 3.375 7 3.375C7.89511 3.375 8.75355 3.73058 9.38649 4.36351C10.0194 4.99645 10.375 5.85489 10.375 6.75C10.375 7.64511 10.0194 8.50355 9.38649 9.13649C8.75355 9.76942 7.89511 10.125 7 10.125Z" />
                      </svg>
                      <Link href="#">
                        Defence Avenue Mall, DHA 1, Islamabad
                      </Link>
                    </li>
                    <li>
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.12018 0.574918C2.31702 0.378368 2.55339 0.225896 2.81362 0.127607C3.07385 0.0293176 3.352 -0.0125448 3.62963 0.00479393C3.90727 0.0221327 4.17805 0.0982766 4.42402 0.22818C4.67 0.358083 4.88557 0.538779 5.05643 0.758293L7.0758 3.35254C7.44593 3.82842 7.57643 4.44829 7.43018 5.03329L6.8148 7.49704C6.78299 7.62465 6.78471 7.75832 6.81979 7.88507C6.85488 8.01182 6.92214 8.12734 7.01505 8.22042L9.77918 10.9845C9.87237 11.0776 9.98808 11.145 10.115 11.1801C10.242 11.2152 10.3759 11.2168 10.5037 11.1848L12.9663 10.5694C13.255 10.4972 13.5563 10.4916 13.8475 10.553C14.1387 10.6144 14.4121 10.7412 14.6471 10.9238L17.2413 12.942C18.1739 13.6677 18.2594 15.0458 17.4247 15.8794L16.2614 17.0427C15.4289 17.8752 14.1847 18.2408 13.0248 17.8324C10.0561 16.7879 7.36073 15.0884 5.13855 12.8599C2.91025 10.6381 1.21074 7.94306 0.166053 4.97479C-0.241197 3.81604 0.124428 2.57067 0.956928 1.73817L2.12018 0.574918Z"
                        />
                      </svg>
                      <Link href="tel:+923149709315">+92 314 9709315</Link>
                    </li>
                    <li>
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.44818 0C1.33262 0 0.5 0.832621 0.5 1.94818V16.0518C0.5 17.1674 1.33262 18 2.44818 18H15.5518C16.6674 18 17.5 17.1674 17.5 16.0518V1.94818C17.5 0.832621 16.6674 0 15.5518 0H2.44818ZM2.5 1.94818C2.5 1.7544 2.67358 1.59056 2.85938 1.59056H15.1406C15.3264 1.59056 15.5 1.7544 15.5 1.94818V16.0518C15.5 16.2456 15.3264 16.4094 15.1406 16.4094H2.85938C2.67358 16.4094 2.5 16.2456 2.5 16.0518V1.94818Z"
                        />
                      </svg>
                      <Link href="mailto:info@company.com">info@company.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>
                  &copy; {new Date().getFullYear()} Your Company. All rights
                  reserved.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end">
                <ul className="footer-bottom-list">
                  <li>
                    <Link href="/terms">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
