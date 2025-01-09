import appData from "@data/app.json";
import { Formik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Onovo Contact Info */}
      <section className="onovo-section gap-top-40">
        <div className="onovo-heading align-center gap-bottom-40">
          <h1 className="onovo-title-1">
            <span dangerouslySetInnerHTML={{ __html: "Contact Us" }} />
          </h1>
        </div>
        <div className="container gap-bottom-40">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              {/* Heading */}
              <div className="onovo-text gap-bottom-40">
                <h4>Send Us A Message</h4>
                Then let us know about it and we can see what we can do to help
              </div>

              {/* Form */}
              <div className="onovo-form">
                <Formik
                  initialValues={{ email: "", name: "", tel: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append("name", values.name);
                    data.append("tel", values.tel);
                    data.append("email", values.email);
                    data.append("message", values.message);

                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          setShowPopup(true);
                          setTimeout(() => {
                            router.push("/");
                          }, 3000); // Redirect after 3 seconds
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML =
                                "Oops! There was a problem submitting your form";
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
                      });

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      action="https://formspree.io/f/mvggdpwe"
                      className="cform"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Full Name"
                              type="text"
                              name="name"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Email Address"
                              type="email"
                              name="email"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Phone Number"
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              placeholder="Message"
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn"
                              disabled={isSubmitting}
                            >
                              <span>Send Message</span>
                            </button>
                          </p>
                        </div>
                      </div>

                      <div
                        className="form-status alert-success"
                        id="contactFormStatus"
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              {/* Contact Info */}
              <div className="onovo-contact-info onovo-text-white">
                <ul>
                  <li>
                    <h5>Contact Info</h5>
                    <a
                      href="tel:+91 8928489180"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +91 8928489180
                    </a>
                    <br />
                    <a
                      href="mailto:pixavia.studio@gmail.com"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      pixavia.studio@gmail.com
                    </a>

                    <div
                      className="onovo-social-1 onovo-social-active"
                      style={{ marginTop: "10px" }}
                    >
                      <ul>
                        {appData.social.map((item, key) => (
                          <li key={`contact-social-item-${key}`}>
                            <a
                              href={item.link}
                              target="_blank"
                              className="onovo-social-link onovo-hover-2"
                              title={item.title}
                            >
                              <i className={`icon ${item.icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="align-center">
                    <img
                      src="/images/form-bg.png"
                      alt="Houston Office"
                      style={{
                        width: "300px",
                        height: "auto",
                        marginBottom: "10px",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>Your message has been successfully submitted.</p>
            <p>Redirecting to the homepage...</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
