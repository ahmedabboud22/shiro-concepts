import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Contact us"
        title="Contact us to start your journey toward success."
      />

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
            <div className="col-xl-9" style={{ backgroundColor: "#162341" }}>
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
                  <p className="mil-text-xs mil-soft">
                    I agree that the data submitted, collected and stored *
                  </p>
                </div>
                <div className="mil-up">
                  <button type="submit" className="mil-btn mil-m">
                    Send Message
                  </button>
                </div>
              </form>
              <div className="alert-success" style={{ display: "none" }}>
                <h5>Thanks, your message is sent successfully.</h5>
              </div>
              <div className="mil-p-160-0">
                <h5 className="mil-mb-30 mil-up">
                  We are available on the following channels:
                </h5>
                <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Address: XXX XXX XXX, +971XXXXXX Dubai, UAE
                </p>
                <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Telephone: +971 (123) 456-7891
                </p>
                <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Fax: +971 (123) 456-7891
                </p>
                <p className="mil-text-m mil-soft mil-up">
                  Email: support@shiro.com
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
