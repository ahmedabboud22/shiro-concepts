import Head from "next/head";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Head>
        <title>Our Services | Tailored Solutions for Your Business</title>
        <meta
          name="description"
          content="Discover our wide range of services including idea development, market analysis, brand positioning, and more. Tailored to meet your business needs."
        />
        <meta
          name="keywords"
          content="services, idea development, market analysis, brand positioning, project management, growth optimization, operational excellence"
        />
        <meta name="author" content="Shiro Concepts Investment" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Our Services | Tailored Solutions for Your Business"
        />
        <meta
          property="og:description"
          content="Explore our professional services designed to help your business grow and succeed. Contact us for more details."
        />
        <meta property="og:type" content="website" />
      </Head>
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
                    Services
                  </div>
                  <h1
                    className="mil-mb-60"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1px",
                    }}
                  >
                    Adapted To Your Needs, Discover What We Have{" "}
                  </h1>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* service */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container" style={{ backgroundColor: "#162341" }}>
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Idea Development{" "}
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "2px",
                  }}
                >
                  Transforming innovative concepts into practical and profitable
                  business models.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                    GET QUOTE
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img
                    src="img/inner-pages/3.png"
                    alt="image"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service end */}
        {/* service */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container" style={{ backgroundColor: "#162341" }}>
            <div className="row flex-sm-row-reverse justify-content-between align-items-center">
              <div className="col-xl-5 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Market Analysis{" "}
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "2px",
                  }}
                >
                  Conducting in-depth research to identify opportunities and
                  trends within target markets.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                    GET QUOTE
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-80">
                <div className="mil-image-frame ml-up">
                  <img
                    src="img/inner-pages/4.png"
                    alt="image"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service end */}
        {/* about */}
        <div
          className="mil-cta"
          style={{ backgroundColor: " #162341", marginBottom: "4.3rem" }}
        >
          <div className="container">
            <div className="mil-out-frame mil-out-top mil-visible">
              <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                <div className="col-xl-5 mil-mb-60">
                  <h2
                    className="mil-mb-30 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1px",
                    }}
                  >
                    Brand Positioning{" "}
                  </h2>
                  <p
                    className="mil-text-l mil-pale-2 mil-up mil-mb-60"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "2px",
                    }}
                  >
                    Building strong, recognizable brands that resonate with
                    target audiences.
                  </p>
                  <div className="mil-up">
                    <Link
                      href="contact"
                      className="mil-btn mil-m mil-add-arrow"
                    >
                      GET QUOTE
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <img
                    src="img/inner-pages/chess.jpg"
                    alt="img"
                    style={{ width: "100%" }}
                    className="mil-up"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about end */}

        {/* service */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container" style={{ backgroundColor: "#162341" }}>
            <div
              className="row justify-content-between align-items-center"
              style={{ backgroundColor: "#162341" }}
            >
              <div className="col-xl-5 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Concept Creation
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "2px",
                  }}
                >
                  Developing the ideas into reality and detailed, then link it
                  with the brand design and storytelling.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                    GET QUOTE
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img
                    src="img/inner-pages/5.png"
                    alt="image"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service end */}
        {/* service */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container" style={{ backgroundColor: "#162341" }}>
            <div className="row flex-sm-row-reverse justify-content-between align-items-center">
              <div className="col-xl-5 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Project Management
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "2px",
                  }}
                >
                  Overseeing projects from inception to completion, ensuring
                  seamless execution.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                    GET QUOTE
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-80">
                <div className="mil-image-frame ml-up">
                  <img
                    src="img/inner-pages/projectmanagement.png"
                    alt="image"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service end */}

        {/* about */}
        <div
          className="mil-cta"
          style={{ backgroundColor: " #162341", marginBottom: "4.3rem" }}
        >
          <div className="container">
            <div className="mil-out-frame mil-out-top mil-visible">
              <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                <div className="col-xl-5 mil-mb-60">
                  <h2
                    className="mil-mb-30 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1px",
                    }}
                  >
                    Growth Optimization{" "}
                  </h2>
                  <p
                    className="mil-text-l mil-pale-2 mil-up mil-mb-60"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "2px",
                    }}
                  >
                    Developing strategies to scale businesses and maximize
                    returns.
                  </p>
                  <div className="mil-up">
                    <Link
                      href="contact"
                      className="mil-btn mil-m mil-add-arrow"
                    >
                      GET QUOTE
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <img
                    src="img/inner-pages/supermarkets.png"
                    alt="img"
                    style={{ width: "100%" }}
                    className="mil-up"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about end */}

        {/* service */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container" style={{ backgroundColor: "#162341" }}>
            <div
              className="row justify-content-between align-items-center"
              style={{ backgroundColor: "#162341" }}
            >
              <div className="col-xl-5 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1px",
                  }}
                >
                  Operational Excellence
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-30 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "2px",
                  }}
                >
                  Providing ongoing management support to enhance efficiency and
                  sustainability.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                    GET QUOTE
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img
                    src="img/inner-pages/operational.jpg"
                    alt="image"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service end */}
      </PlaxLayout>
    </>
  );
};
export default page;
