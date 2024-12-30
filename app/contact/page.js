import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <div
        className="mil-banner mil-banner-inner mil-dissolve"
        style={{ backgroundColor: " #162341" }}
      >
        <div className="container" style={{ backgroundColor: " #162341" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div
                  className="mil-text-m mil-mb-20"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Contact Us
                </div>
                <h1
                  className="mil-mb-60"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Contact Us To Start Your Journey Toward Success{" "}
                </h1>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}

      <div
        className="mil-blog-list mil-p-0-160"
        style={{ backgroundColor: "#162341" }}
      >
        <div className="container" style={{ backgroundColor: "#162341" }}>
          <div
            className="row justify-content-center"
            style={{ backgroundColor: "#162341" }}
          >
            {" "}
            <div className="col-xl-9" style={{ backgroundColor: "#162341" }}>
              <p
                className="mil-text-m mil-soft mil-mb-60 mil-up"
                style={{ fontFamily: "neue-text", letterSpacing: "2px" }}
              >
                We are here to assist you with your investment goals and
                inquiries. Whether you are looking for tailored <br />
                investment solutions, expert advice, or have questions about our
                services, our team is ready to support you.
              </p>
              <form>
                <div className="row" style={{ backgroundColor: "#162341" }}>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="text"
                      placeholder="Name"
                      name="name"
                      style={{ backgroundColor: " #e7e5e0" }}
                    />
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="email"
                      placeholder="Email"
                      name="email"
                      style={{ backgroundColor: " #e7e5e0" }}
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="tel"
                      placeholder="Telephone number"
                      name="tel"
                      style={{ backgroundColor: " #e7e5e0" }}
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30 ">
                    <textarea
                      cols={30}
                      rows={10}
                      className="mil-up"
                      placeholder="Message"
                      name="message"
                      defaultValue={""}
                      style={{ backgroundColor: " #e7e5e0" }}
                    />
                  </div>
                </div>
                <div className="mil-checkbox-frame mil-mb-30 mil-up">
                  <div className="mil-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkmark"
                      defaultChecked=""
                      style={{ backgroundColor: " #e7e5e0" }}
                    />
                    <label htmlFor="checkbox" />
                  </div>
                  <p
                    className="mil-text-xs mil-soft"
                    style={{ fontFamily: "neue-text", letterSpacing: "2px" }}
                  >
                    I agree that the data submitted, collected and stored *
                  </p>
                </div>
                <div className="mil-up">
                  <button
                    type="submit"
                    className="mil-btn mil-m"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1.5px",
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
              <div className="alert-success" style={{ display: "none" }}>
                <h5>Thanks, your message is sent successfully.</h5>
              </div>
              <div className="mil-p-160-0">
                <h5
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1.5px",
                  }}
                >
                  We are available on the following channels:
                </h5>
                {/* <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Address: XXX XXX XXX, +971XXXXXX Dubai, UAE
                </p> */}
                <p
                  className="mil-text-m mil-soft mil-mb-10 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  Mobile No: +971 52 795 5078
                </p>
                <p
                  className="mil-text-m mil-soft mil-mb-10 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  Phone: +971 (0) 4 512 6800
                </p>
                <p
                  className="mil-text-m mil-soft mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  Email: info@shiroinvestment.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
    </PlaxLayout>
  );
};
export default page;
