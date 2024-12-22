import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        title="Adapted to your needs, discover what we have"
        pageName="Services"
      />

      {/* banner end */}
      {/* service */}
      <div
        className="mil-features mil-p-0-80"
        style={{ backgroundColor: "#162341" }}
      >
        <div className="container" style={{ backgroundColor: "#162341" }}>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">Idea Development </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Transforming innovative concepts into practical and profitable
                business models.
              </p>
              <div className="mil-up">
                <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                  Get Quote
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
              <h2 className="mil-mb-30 mil-up">Market Analysis </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Conducting in-depth research to identify opportunities and
                trends within target markets.
              </p>
              <div className="mil-up">
                <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                  Get Quote
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
                <h2 className="mil-mb-30 mil-light mil-up">
                  Supermarkets and Hypermarkets{" "}
                </h2>
                <p className="mil-text-l mil-pale-2 mil-up mil-mb-60">
                  Expanding retail horizons with strategic investments in
                  essential services.
                </p>
                <div className="mil-up">
                  <Link href="contact" className="mil-btn mil-m mil-add-arrow">
                    Get Quote
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <img
                  src="img/inner-pages/supermarkets.png"
                  alt="img"
                  style={{ width: "100%" }}
                  className="mil-up"
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
              <h2 className="mil-mb-30 mil-up">Concept Creation</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Developing the ideas into reality and detailed, then link it
                with the brand design and storytelling.
              </p>
              <div className="mil-up">
                <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                  Get Quote
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
              <h2 className="mil-mb-30 mil-up">Project Management</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                Overseeing projects from inception to completion, ensuring
                seamless execution.
              </p>
              <div className="mil-up">
                <Link href="/contact" className="mil-btn mil-m mil-add-arrow">
                  Get Quote
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service end */}

      {/* call to action */}
      <div className="mil-cta mil-up" style={{ backgroundColor: "#162341" }}>
        <div className="container">
          <div
            className="mil-out-frame mil-p-160-100"
            style={{ backgroundColor: "#0b121f" }}
          >
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">Our Target Markets Include</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 96 96"
                      width="70"
                      height="70"
                      fill="#d2b488"
                      id="fi_5921985"
                    >
                      <g
                        id="Welcome_Drink_Cocktail"
                        data-name="Welcome Drink/Cocktail"
                      >
                        <path d="M38.84,70.34a18.77,18.77,0,0,0-10.33.52,1,1,0,0,0,.32,2,17.82,17.82,0,0,1,9.55-.52,1,1,0,1,0,.46-2Z"></path>
                        <path d="M19,75.76A1.22,1.22,0,1,0,20.23,77,1.22,1.22,0,0,0,19,75.76Z"></path>
                        <path d="M22.67,90.76a1,1,0,0,0-1.41,0L20,92a1,1,0,0,0,.71,1.71c.53,0,.65-.24,2-1.56A1,1,0,0,0,22.67,90.76Z"></path>
                        <path d="M89.06,61.39H73.82c.32-6,2.14-39.88,2.55-47.43a1,1,0,0,0-1-1.05H70.22l1.09-6.56,8.59-1a1,1,0,0,0,.89-1.11L80.4.89A1,1,0,0,0,79.31,0L69.87.94a4.46,4.46,0,0,0-4,3.73l-1.32,8.24H59.16a10.05,10.05,0,0,0-.64-2.77s0,0,0-.07a.42.42,0,0,1-.07-.14v0A10.3,10.3,0,0,0,45.14,4.32.58.58,0,0,0,45,4.4a10.22,10.22,0,0,0-5.5,5.45,9.91,9.91,0,0,0-.15,7.69,2.23,2.23,0,0,0,.12.34v0a10.44,10.44,0,0,0,9,6.34c2,36,1.55,28.63,2,37.15H41.15V57.28c2.78-16.76,1-5.84,3.25-19.68a1,1,0,0,0-1-1.16H17.14a1,1,0,0,0-1,1.16c1.6,9.68.92,5.53,3.26,19.68v4.11H6.94a3.38,3.38,0,0,0,0,6.76H24.27a31.38,31.38,0,0,0-4.17,2.11,2.76,2.76,0,0,0-3.31.37l-4.12,4.12a2.69,2.69,0,0,0,0,3.79l.49.49-3.05,3a1,1,0,0,0,1.42,1.42l3.05-3L25.37,91.24l-3.05,3.05A1,1,0,0,0,23,96a1,1,0,0,0,.71-.29l3.05-3,.49.49a2.69,2.69,0,0,0,3.79,0L35.18,89a2.66,2.66,0,0,0,.74-2.42H58.46A10.24,10.24,0,0,0,65.27,84l11.8-10.54a4.21,4.21,0,0,0,.79-5.32h11.2a3.38,3.38,0,0,0,0-6.76ZM19.72,46.88H40.84l-1.54,9.3h-18Zm1.69,11.3H39.15v3.2H21.41ZM18.32,38.44H42.24l-1.07,6.44H19.38Zm48-23.53h1.56L66.11,25.39h-1.5Zm7.34,12.48L72.16,54.85a2.48,2.48,0,0,1-2.48,2.36H54.62a2.48,2.48,0,0,1-2.48-2.36L50.66,27.39Zm.67-12.48-.56,10.48H68.14l1.74-10.48ZM67.89,5a2.46,2.46,0,0,1,2.18-2.06l8.46-.84.16,1.42-8.36.94a1,1,0,0,0-.87.83l-1.27,7.63H66.62Zm-27,11A7.65,7.65,0,0,1,41,11.58l5.35,2.3ZM57,11.76a8.67,8.67,0,0,1,.23,1.15H54.11Zm-.76-1.85L50.8,12.08l2.3-5.36A8.3,8.3,0,0,1,56.21,9.91Zm-5-4L49,11.28c0-.1.31.78-2.17-5.4A8.24,8.24,0,0,1,51.26,5.92Zm-6.32.7L47.11,12,41.75,9.74A8.16,8.16,0,0,1,44.94,6.62ZM41.66,17.9l5.4-2.16-2.29,5.35A8.59,8.59,0,0,1,41.66,17.9Zm4.94,4,1.56-3.64s0-.06.21,4A8,8,0,0,1,46.6,21.9Zm3.39-7H64.26L62.58,25.39h-12C50.47,23.6,50.16,18,50,14.91Zm2.35,43.67a4.44,4.44,0,0,0,2.28.63H69.68A4.44,4.44,0,0,0,72,58.58l-.15,2.81H52.49Zm-18.57,29-4.11,4.11a.68.68,0,0,1-1,0c-.1-.1,1.41,1.42-14.6-14.6a.68.68,0,0,1,0-1c4.39-4.39,4.19-4.31,4.59-4.31s-.91-1.2,15.09,14.8A.68.68,0,0,1,33.77,87.62ZM75.73,72,63.94,82.52a8.25,8.25,0,0,1-5.48,2.09H34.55L21.62,71.67A27.06,27.06,0,0,1,32,68.15h5.81c5.95.71,9.16,3.37,9.91,3.37h9.4a2.48,2.48,0,0,1,.12,5l-12.55,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1l15.23-.07c.49,0-.53.68,13-9.87a2.22,2.22,0,0,1,1-.44h.69A2.2,2.2,0,0,1,75.73,72ZM57.12,69.52H48c-1.2-.65-1.52-.83-2.7-1.37H70.21L61.49,75A4.48,4.48,0,0,0,57.12,69.52Zm31.94-3.37H38a25.65,25.65,0,0,0-6.13,0H6.94a1.38,1.38,0,1,1,0-2.76H89.06a1.38,1.38,0,0,1,0,2.76Z"></path>
                      </g>
                    </svg>
                  </div>
                  <h5 className="mil-mb-20 mil-up">Food and Beverage</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    From unique cafes to high-end restaurants, we invest in
                    creating standout dining experiences
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up">
                    <svg
                      id="fi_12678880"
                      height="70"
                      viewBox="0 0 64 64"
                      width="70"
                      fill="#d2b488"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Sale dress"
                    >
                      <path d="m57.83 56.35-7.11-13.52c-1.31-2.51-2.84-4.93-4.54-7.22v-9.74c0-.68-.23-1.35-.66-1.88l-2.04-2.55c.34-1.11.53-2.27.53-3.44v-1.38c.79-.46 1.5-1.03 2.13-1.7.78-.83 1.4-1.77 1.84-2.8l.41-.94c.2-.45.04-.98-.38-1.24l-2.81-1.79c-.25-.16-.55-.2-.83-.11s-.51.29-.62.56c-.34.78-.96 1.64-1.68 2.31l-9.05-4.53v-3.38c-.02-1.66-1.37-3-3.02-3s-3 1.35-3 3c0 .55.45 1 1 1s1-.45 1-1 .45-1 1-1 1 .45 1 1v3.38l-9.05 4.53c-.72-.67-1.34-1.52-1.69-2.31-.12-.27-.35-.47-.62-.56-.28-.08-.58-.04-.83.11l-2.81 1.79c-.42.26-.58.79-.38 1.24l.41.93c.44 1.03 1.06 1.98 1.84 2.8.63.67 1.34 1.25 2.13 1.71v1.39c0 2.1.57 4.17 1.64 5.97.89 1.5 1.36 3.21 1.36 4.95v.65c-3.89 3.91-7.16 8.37-9.72 13.25l-7.11 13.52c-.21.41-.12.91.22 1.22.34.3.67.62 1 .94 1.03 1 2.09 2.04 3.47 2.49 1.4.46 2.87.24 4.29.03 1.11-.17 2.16-.32 3.04-.13.89.19 1.79.76 2.74 1.37 1.21.77 2.46 1.56 3.91 1.71.18.02.35.03.53.03 1.26 0 2.47-.45 3.65-.89 1.06-.39 2.06-.76 2.97-.76s1.91.37 2.97.76c1.18.44 2.39.89 3.65.89.17 0 .35 0 .53-.03 1.45-.15 2.7-.94 3.91-1.71.95-.61 1.85-1.18 2.74-1.37.88-.19 1.93-.03 3.04.13 1.42.21 2.89.43 4.29-.03 1.39-.45 2.45-1.49 3.48-2.49.33-.32.66-.64 1-.94.35-.3.44-.81.22-1.22zm-13.65-30.48v12.3c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1v-12.3c0-.23.08-.45.22-.62l2.96-3.7c.19-.24.48-.38.78-.38h.04v2c0 .55.45 1 1 1s1-.45 1-1v-2h.04c.3 0 .59.14.78.38l2.96 3.7c.14.18.22.4.22.62zm-12.17-12.58c-1.94-1.52-4.5-2.07-6.9-1.42l-.83.22-.15-.04 7.89-3.94 7.89 3.94-.15.04-.83-.22c-2.41-.64-4.98-.09-6.91 1.42zm-10 4.72v-1.98c0-.38-.22-.73-.56-.9-.79-.39-1.5-.92-2.12-1.58s-1.11-1.4-1.46-2.22l-.07-.16 1.17-.75c.54.88 1.29 1.75 2.16 2.42.01.01.03.02.05.04.62.47 1.31.84 2.03 1.02l.81.2c.17.04.34.04.5 0l1.09-.29c2.03-.54 4.2.04 5.68 1.52.39.39 1.02.39 1.41 0 1.48-1.47 3.66-2.05 5.68-1.52l1.08.29c.16.04.33.05.5 0l.82-.2c1.78-.45 3.32-1.97 4.24-3.47l1.17.75-.07.17c-.35.81-.84 1.56-1.46 2.22-.61.65-1.32 1.18-2.11 1.58-.34.17-.56.52-.56.9v1.98c0 .56-.05 1.12-.14 1.67-.48-.32-1.05-.51-1.65-.51h-.04v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-.04c-.92 0-1.77.41-2.34 1.13l-2.96 3.7c-.42.53-.66 1.2-.66 1.88v3.13h-7.17v-.06c0-2.1-.57-4.17-1.64-5.97-.89-1.5-1.36-3.21-1.36-4.95zm19.98 42.56c-1.06.67-2.06 1.31-3.04 1.41-.99.1-2.1-.31-3.27-.75-1.18-.44-2.39-.89-3.66-.89s-2.49.45-3.66.89c-1.18.44-2.29.85-3.27.75s-1.99-.74-3.04-1.41c-.89-.57-1.82-1.13-2.83-1.46 7.26-4.37 11.18-10.08 12.81-12.93 1.63 2.86 5.55 8.57 12.81 12.93-1.01.33-1.94.89-2.83 1.46zm13.22-3.49c-.9.88-1.75 1.71-2.69 2.02-.95.31-2.13.13-3.38-.05-.1-.01-.2-.03-.3-.04-11.52-5.52-15.87-15.31-15.91-15.41-.35-.78-1.49-.78-1.84 0-.04.1-4.4 9.89-15.91 15.41-.1.01-.2.03-.3.04-1.25.18-2.43.36-3.38.05-.94-.3-1.79-1.14-2.69-2.02-.16-.16-.33-.32-.49-.48l6.75-12.84c2.47-4.7 5.63-9 9.37-12.76h7.75v7.17c0 1.65 1.35 3 3 3h8c1.39 0 2.55-.95 2.89-2.24 1.05 1.56 2.02 3.18 2.89 4.83l6.75 12.84c-.17.16-.33.32-.49.48z"></path>
                      <path d="m36.34 34.62c-.31.46-.18 1.08.28 1.39.17.11.36.17.55.17.32 0 .64-.16.83-.45l4-6c.31-.46.18-1.08-.28-1.39s-1.08-.18-1.39.28l-4 6z"></path>
                      <circle cx="41.17" cy="35.17" r="1"></circle>
                      <circle cx="37.17" cy="29.17" r="1"></circle>
                    </svg>
                  </div>
                  <h5 className="mil-mb-20 mil-up">Fashion Retail </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Supporting innovative brands and retail ventures to thrive
                    in competitive markets
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  {" "}
                  <div className="mil-mb-30 mil-up">
                    <svg
                      id="fi_2962303"
                      enable-background="new 0 0 64 64"
                      height="70"
                      viewBox="0 0 64 64"
                      width="70"
                      fill="#d2b488"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m60.501 26.72-3.752-3.002c-.015-.012-.03-.027-.045-.039l3.493-.699c.467-.093.803-.503.803-.98v-3c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v1.752c-.023-.031-.046-.062-.069-.093-.063-.174-.175-.316-.317-.429-.563-.797-1.045-1.595-1.359-2.285l-1.69-3.717c-1.077-2.371-3.961-4.228-6.565-4.228h-24c-2.604 0-5.488 1.857-6.565 4.228l-1.689 3.716c-.314.69-.796 1.489-1.359 2.286-.142.113-.253.255-.317.429-.023.031-.045.061-.069.093v-1.752c0-.552-.448-1-1-1h-5.001c-.552 0-1 .448-1 1v3c0 .477.336.887.804.98l3.493.699c-.015.012-.03.027-.045.039l-3.753 3.002c-1.962 1.57-3.499 4.768-3.499 7.28v17c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-2h36v2c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-17c0-2.512-1.537-5.71-3.499-7.28zm-9.087 20.28-2.293-2.293c-.973-.973-2.745-1.707-4.121-1.707h-26.5c-1.376 0-3.148.734-4.121 1.707l-2.293 2.293h-7.086c-1.654 0-3-1.346-3-3v-5h1v1c0 2.206 1.794 4 4 4h3c.552 0 1-.448 1-1s-.448-1-1-1h-3c-1.103 0-2-.897-2-2v-1h2c.83 0 2.12.534 2.707 1.121.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414-.973-.973-2.744-1.707-4.121-1.707h-5v-3c0-.353.056-.734.135-1.123.64.668 1.571 1.123 2.865 1.123h8c.265 0 .519-.105.707-.293l1.293-1.293 1.293 1.293c.187.188.442.293.707.293h11.586l2.707 2.707c.195.195.451.293.707.293s.512-.098.707-.293l2.707-2.707h11.586c.265 0 .52-.105.707-.293l1.293-1.293 1.293 1.293c.187.188.442.293.707.293h8c1.294 0 2.225-.455 2.865-1.123.079.389.135.77.135 1.123v3h-5c-1.376 0-3.148.734-4.121 1.707-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.587-.587 1.877-1.121 2.707-1.121h2v1c0 1.103-.897 2-2 2h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c2.206 0 4-1.794 4-4v-1h1v5c0 1.654-1.346 3-3 3zm-2.828 0h-33.672l.879-.879c.587-.587 1.877-1.121 2.707-1.121h26.5c.83 0 2.12.534 2.707 1.121zm-37.026-25h40.88c.969 1.281 2.076 2.493 3.059 3.28l1.203.962-7.073 2.829c-.001 0-.001.001-.002.001-.121.049-.235.122-.333.22l-1 1-1.708 1.708h-11.586c-.265 0-.52.105-.707.293l-2.293 2.293-2.293-2.293c-.187-.188-.442-.293-.707-.293h-11.586l-1.707-1.707-1-1c-.098-.098-.212-.171-.333-.22-.001 0-.001-.001-.002-.001l-7.073-2.829 1.203-.962c.982-.788 2.089-2 3.058-3.281zm49.381 8.419c-.201 1.045-.849 1.581-1.941 1.581h-7.586l-1-1 .148-.148 7.935-3.174.754.604c.634.507 1.219 1.278 1.69 2.137zm-4.941-10.419h3v1.18l-3 .6zm-42.435-1.228 1.689-3.716c.754-1.657 2.927-3.056 4.746-3.056h24c1.819 0 3.992 1.399 4.745 3.055l1.69 3.717c.176.386.405.803.656 1.228h-38.182c.251-.425.481-.842.656-1.228zm-8.565 1.228h3v1.78l-3-.6zm-.252 8.282.754-.604 7.936 3.174.148.148-1 1h-7.586c-1.092 0-1.74-.536-1.941-1.581.471-.859 1.055-1.63 1.689-2.137zm6.252 23.718h-8c-.551 0-1-.449-1-1v-3.025c.838.634 1.87 1.025 3 1.025h7v2c0 .551-.449 1-1 1zm50 0h-8c-.551 0-1-.449-1-1v-2h7c1.13 0 2.162-.391 3-1.025v3.025c0 .551-.449 1-1 1z"></path>
                    </svg>
                  </div>
                  <h5 className="mil-mb-20 mil-up">Motors and Automotive</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Investing in ventures that cater to automotive enthusiasts
                    and the broader motor industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* quote */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30">Board of Directors</h2>
              <p
                className="mil-text-m mil-soft mil-mb-30"
                style={{ marginBottom: "4rem" }}
              >
                Shiro Concepts Investment is led by a dynamic and experienced
                board of directors with diverse expertise across industries.
                Their collective vision, leadership, and commitment drive the
                company’s mission and ensure its sustained success.
                <span
                  className="mil-text-m mil-soft"
                  style={{
                    marginTop: "1.8rem",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <br />
                  MEET OUR BOARD
                </span>
              </p>

              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Jamil Shiro</h5>
                        <p className="mil-text-m mil-soft">
                          [a small description about Mr. Jamil and his position
                          and experience with photo]
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Housam Aslan</h5>
                        <p className="mil-text-m mil-soft">
                          [a small description about Mr. Housam and his position
                          and experience with photo]
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
    </PlaxLayout>
  );
};
export default page;
