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
                    letterSpacing: "1.5px",
                  }}
                >
                  About us
                </div>
                <h1
                  className="mil-mb-60"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1.5px",
                  }}
                >
                  The Value Beyond Compare{" "}
                </h1>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* features */}
      <div
        className="mil-features mil-p-0-80"
        style={{ backgroundColor: " #162341" }}
      >
        <div className="container" style={{ backgroundColor: " #162341" }}>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2
                className="mil-mb-30 mil-up"
                style={{
                  fontFamily: "neue-heading",
                  letterSpacing: "1.5px",
                }}
              >
                About Us{" "}
              </h2>
              <p
                className="mil-text-m mil-soft mil-mb-60 mil-up"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                Shiro Concepts Investment is a visionary company based in Dubai,
                specializing in transforming Business Ideas into unique
                realities and managing them to achieve excellence in their
                respective industries.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5
                      className="mil-mb-15"
                      style={{
                        fontFamily: "neue-heading",
                        letterSpacing: "1.5px",
                      }}
                    >
                      At Shiro Concepts Investment
                    </h5>
                    <p
                      className="mil-text-m mil-soft"
                      style={{
                        fontFamily: "neue-text",
                        letterSpacing: "1.5px",
                      }}
                    >
                      we are driven by creativity, innovation, and a commitment
                      to excellence. By combining strategic insights with
                      operational expertise, we create exceptional value for our
                      partners and clients, positioning their ventures at the
                      highest level in the market.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/1.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up" style={{ backgroundColor: " #162341" }}>
        <div className="container">
          <div
            className="mil-out-frame mil-p-160-100"
            style={{
              backgroundImage: "url('/img/ourSpecialBackground.jpg')",
              backgroundSize: "100%",
              backgroundPositionY: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#f7f0e6",
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                // className="col-xl-8 mil-mb-80-adaptive-30"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  alignItems: "center",
                  marginBottom: "4rem",
                }}
              >
                <h2
                  className="mil-up"
                  style={{
                    color: "#1c2d50",
                    textAlign: "left",
                    fontFamily: "neue-heading",
                    letterSpacing: "1.5px",
                  }}
                >
                  Our Special Approach
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className=""
                style={{ display: "flex", justifyContent: "right" }}
              >
                <div className="mil-icon-box">
                  <p
                    // className="mil-text-m mil-soft mil-up"
                    style={{
                      color: "black",
                      textAlign: "right",
                      fontSize: "22px",
                      maxWidth: "560px",
                      // marginLeft: "5rem",
                      // marginRight: "8rem",
                      paddingBottom: "5rem",
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Shiro’s success lies in our ability to think di erently. We
                    combine deep industry knowledge with imaginative
                    problem-solving to create a tailored roadmap for each
                    project. is ensures that our investments are not just pro
                    table but meaningful, distinctive, and impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      <div
        className="mil-features mil-p-160-80"
        style={{ backgroundColor: " #162341" }}
      >
        <div className="container" style={{ backgroundColor: " #162341" }}>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2
                className="mil-mb-30 mil-up"
                style={{
                  fontFamily: "neue-heading",
                  letterSpacing: "1.5px",
                }}
              >
                Our Values Are Foundations Of Trust
              </h2>
              {/* <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Our values, from transparency to accountability, are the
                foundation of our organizational culture and reflect our
                unwavering.
              </p> */}
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5
                      className="mil-mb-15"
                      style={{
                        fontFamily: "neue-heading",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Our Vision
                    </h5>
                    <p
                      className="mil-text-m mil-soft"
                      style={{
                        fontFamily: "neue-text",
                        letterSpacing: "1.5px",
                      }}
                    >
                      To establish ourselves as a global authority in investment
                      and project management, by creating projects that leave a
                      lasting impact, shaping industries, and inspiring change.
                      renowned for consistently transforming visionary concepts
                      into prosperous realities while setting unparalleled
                      standards of excellence across diverse industries.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5
                      className="mil-mb-15"
                      style={{
                        fontFamily: "neue-heading",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Our Mission
                    </h5>
                    <p
                      className="mil-text-m mil-soft"
                      style={{
                        fontFamily: "neue-text",
                        letterSpacing: "1.5px",
                      }}
                    >
                      To deliver exceptional value in every project we engage
                      with through the seamless integration of creativity,
                      innovation, and strategic expertise, ensuring
                      transformative outcomes for our partners and stakeholders.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/2.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* quote */}
      <div
        className="mil-quote "
        style={{ backgroundColor: " #162341", marginBottom: "5rem" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2
                className="mil-mb-30"
                style={{
                  fontFamily: "neue-heading",
                  letterSpacing: "1.5px",
                }}
              >
                At Shiro, we’re not just shaping investments — we’re shaping the
                future. Together, let’s make something extraordinary.
              </h2>
              <p
                className="mil-text-m mil-soft mil-mb-60"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                - Shiro Concepts Investment Team
              </p>
              {/* <div
                className="row"
                style={{ marginBottom: "5rem", marginTop: "2rem" }}
              >
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Our Special Approach</h5>
                        <p className="mil-text-m mil-soft">
                          Shiro’s success lies in our ability to think
                          differently. We combine deep industry knowledge with
                          imaginative problem-solving to create a tailored
                          roadmap for each project. This ensures that our
                          investments are not just profitable but meaningful,
                          distinctive, and impactful.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Our Philosophy</h5>
                        <p className="mil-text-m mil-soft">
                          We believe that every project has a story, and our
                          role is to help write a chapter that stands out. By
                          blending vision with execution, we bring concepts to
                          life in ways that resonate far beyond financial
                          success.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
    </PlaxLayout>
  );
};
export default page;
