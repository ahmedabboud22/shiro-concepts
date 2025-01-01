import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = ({ bg = true, margin = 160, footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;

    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};
export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="img/logo-2.png" alt="Plax" width={101} height={50} />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Sections
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Contact
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971045126800"> +971 (0) 4 512 6800</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971527955078"> +971 52 795 5078</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="mailto:info@shiroinvestment.com">
                  info@shiroinvestment.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-xl-3 mil-mb-80">
        <h3 className="mil-mb-60 mil-soft">Newsletter</h3>
        <p className="mil-text-xs mil-pale mil-mb-15">
          Subscribe to get the latest news form us
        </p>
        <form className="mil-subscripe-form-footer">
          <input className="mil-input" type="email" placeholder="Email" />
          <button type="submit" aria-label="submit button">
            <i className="far fa-envelope-open mil-dark" />
          </button>
          <div className="mil-checkbox-frame mil-mt-15">
            <div className="mil-checkbox">
              <input
                type="checkbox"
                id="checkbox"
                defaultChecked=""
                style={{ backgroundColor: " #e7e5e0" }}
              />
              <label htmlFor="checkbox" />
            </div>
            <p className="mil-text-xs mil-pale">
              Subscribe to get the latest news
            </p>
          </div>
        </form>
      </div> */}
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p
                className="mil-text-s mil-pale"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                © 2025 Shiro Concepts Investment
              </p>
            </div>{" "}
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Facebook account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Facebook account
                  </span>
                  <BsFacebook size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Instagram account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Instagram account
                  </span>
                  <BsInstagram size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts LinkedIn account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts LinkedIn account
                  </span>
                  <BsLinkedin size={20} fill="white" />
                </Link>
                <Link
                  href="https://twitter.com/ShiroConcepts"
                  target="blank"
                  aria-label="Visit Shiro Concepts Twitter account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Twitter account
                  </span>
                  <BsTwitter size={20} fill="white" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="img/logo-2.png" alt="Plax" width={101} height={50} />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Sections
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Contact
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971045126800"> +971 (0) 4 512 6800</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971527955078"> +971 52 795 5078</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="mailto:info@shiroinvestment.com">
                  info@shiroinvestment.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-xl-3 mil-mb-80">
        <h3 className="mil-mb-60 mil-soft">Newsletter</h3>
        <p className="mil-text-xs mil-pale mil-mb-15">
          Subscribe to get the latest news form us
        </p>
        <form className="mil-subscripe-form-footer">
          <input className="mil-input" type="email" placeholder="Email" />
          <button type="submit" aria-label="submit button">
            <i className="far fa-envelope-open mil-dark" />
          </button>
          <div className="mil-checkbox-frame mil-mt-15">
            <div className="mil-checkbox">
              <input
                type="checkbox"
                id="checkbox"
                defaultChecked=""
                style={{ backgroundColor: " #e7e5e0" }}
              />
              <label htmlFor="checkbox" />
            </div>
            <p className="mil-text-xs mil-pale">
              Subscribe to get the latest news
            </p>
          </div>
        </form>
      </div> */}
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p
                className="mil-text-s mil-pale"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                © 2025 Shiro Concepts Investment
              </p>
            </div>{" "}
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Facebook account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Facebook account
                  </span>
                  <BsFacebook size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Instagram account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Instagram account
                  </span>
                  <BsInstagram size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts LinkedIn account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts LinkedIn account
                  </span>
                  <BsLinkedin size={20} fill="white" />
                </Link>
                <Link
                  href="https://twitter.com/ShiroConcepts"
                  target="blank"
                  aria-label="Visit Shiro Concepts Twitter account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Twitter account
                  </span>
                  <BsTwitter size={20} fill="white" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="img/logo-2.png" alt="Plax" width={101} height={50} />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Sections
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h3
              className="mil-mb-60 mil-soft"
              style={{
                fontFamily: "neue-heading",
                letterSpacing: "1.5px",
              }}
            >
              Contact
            </h3>
            <ul
              className="mil-footer-list"
              style={{
                fontFamily: "neue-text",
                letterSpacing: "1.5px",
              }}
            >
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971045126800"> +971 (0) 4 512 6800</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="tel:+971527955078"> +971 52 795 5078</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="mailto:info@shiroinvestment.com">
                  info@shiroinvestment.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-xl-3 mil-mb-80">
        <h3 className="mil-mb-60 mil-soft">Newsletter</h3>
        <p className="mil-text-xs mil-pale mil-mb-15">
          Subscribe to get the latest news form us
        </p>
        <form className="mil-subscripe-form-footer">
          <input className="mil-input" type="email" placeholder="Email" />
          <button type="submit" aria-label="submit button">
            <i className="far fa-envelope-open mil-dark" />
          </button>
          <div className="mil-checkbox-frame mil-mt-15">
            <div className="mil-checkbox">
              <input
                type="checkbox"
                id="checkbox"
                defaultChecked=""
                style={{ backgroundColor: " #e7e5e0" }}
              />
              <label htmlFor="checkbox" />
            </div>
            <p className="mil-text-xs mil-pale">
              Subscribe to get the latest news
            </p>
          </div>
        </form>
      </div> */}
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p
                className="mil-text-s mil-pale"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                © 2025 Shiro Concepts Investment
              </p>
            </div>{" "}
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Facebook account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Facebook account
                  </span>
                  <BsFacebook size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts Instagram account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Instagram account
                  </span>
                  <BsInstagram size={20} fill="white" />
                </Link>
                <Link
                  href="#"
                  target="blank"
                  aria-label="Visit Shiro Concepts LinkedIn account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts LinkedIn account
                  </span>
                  <BsLinkedin size={20} fill="white" />
                </Link>
                <Link
                  href="https://twitter.com/ShiroConcepts"
                  target="blank"
                  aria-label="Visit Shiro Concepts Twitter account (opens in a new tab)"
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                >
                  {" "}
                  <span style={{ position: "absolute", left: "-9999px" }}>
                    Visit Shiro Concepts Twitter account
                  </span>
                  <BsTwitter size={20} fill="white" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
