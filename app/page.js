"use client";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
import OrganizationStructuredData from "../components/OrganizationStructuredData";

const page = () => {
  useEffect(() => {
    document.querySelector("#smooth-wrapper").style.backgroundColor = "#192626";
  }, []);
  return (
    <>
      <Head>
        <title>Shiro Concepts Investment - The Value Beyond Compare</title>
        <meta
          name="description"
          content="Shiro Concepts Investment is a visionary company based in Dubai, specializing in transforming ideas into unique realities and managing them to achieve excellence."
        />
        <meta
          name="keywords"
          content="Shiro Concepts, Investment, Dubai, Innovative Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <OrganizationStructuredData />
      <PlaxLayout dark footer={3}>
        {/* banner */}
        <div className="mil-banner mil-dark-2">
          <div className="mil-radial-g-2" />
          <div className="mil-radial-g-3" />
          <div className="container">
            <div className="row align-items-center mil-mb-80">
              <div className="col-xl-5">
                <div className="mil-banner-text" style={{ zIndex: "100" }}>
                  {" "}
                  {/* <div className="mil-text-l mil-light mil-mb-20">
                    Shiro Concepts Investment
                  </div> */}
                  <h1
                    className="mil-display mil-light"
                    style={{
                      marginBottom: "35px",
                      fontFamily: "neue-heading",
                      letterSpacing: "1.5px",
                    }}
                  >
                    The Value Beyond Compare
                  </h1>
                  <div className="mil-buttons-frame">
                    <Link
                      href="contact"
                      className="mil-btn mil-md mil-add-arrow"
                      aria-label="Link to contact us"
                      style={{
                        fontFamily: "neue-heading",
                        letterSpacing: "1.5px",
                      }}
                    >
                      GET QUOTE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="mil-banner-img mil-banner-img-out">
                  <img
                    src="img/home-5/1.png"
                    loading="lazy"
                    alt="A company logo that represent a lion"
                    style={{
                      width: "3000px",
                      marginBottom: "1rem",
                      zIndex: "98",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* about */}
        <div className="mil-cta" style={{ backgroundColor: " #162341" }}>
          <div className="container">
            <div className="mil-out-frame mil-out-top mil-visible">
              <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                <div className="col-xl-5 mil-mb-60">
                  <h2
                    className="mil-mb-30 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1.5px",
                      color: "#d2b488",
                    }}
                  >
                    Who We Are ?
                  </h2>
                  <p
                    className="mil-text-l mil-pale-2 mil-up mil-mb-60"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Shiro Concepts Investment is a visionary company based in
                    Dubai, specializing in transforming ideas into unique
                    realities and managing them to achieve excellence in their
                    respective industries.
                  </p>
                  <div className="mil-up">
                    <Link
                      href="about"
                      className="mil-btn mil-m mil-add-arrow"
                      aria-label="Link to about us"
                    >
                      ABOUT US
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <img
                    src="img/home-5/2.png"
                    loading="lazy"
                    alt="Promotional image for Shiro Company Investment"
                    style={{ width: "100%" }}
                    className="mil-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about end */}
        {/* icon boxes */}
        <div
          className="icon-boxes mil-p-160-130"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container">
            <div className="mil-text-center">
              <h2
                className="mil-light mil-mb-30 mil-up"
                style={{
                  fontFamily: "neue-heading",
                  letterSpacing: "1.5px",
                }}
              >
                Discover The Reasons <br />
                To Choose Us
              </h2>
              <p
                className="mil-text-l mil-pale-2 mil-mb-60 mil-up"
                style={{
                  fontFamily: "neue-text",
                  letterSpacing: "1.5px",
                }}
              >
                Here's The Reasons What <br />
                Sets Shiro Apart
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-4 mil-mb-30">
                <div className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up">
                  <div className="mil-mb-30 mil-up">
                    <svg
                      id="fi_3159310"
                      enable-background="new 0 0 512.01 512.01"
                      height="70"
                      viewBox="0 0 512.01 512.01"
                      width="70"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#162341"
                    >
                      <g>
                        <path d="m447.183 66.584h-6.075c11.58-18.853 7.304-44.164-11.281-57.953-20.025-14.856-48.482-10.074-62.457 10.81l-31.546 47.144h-270.997c-22.275 0-40.397 18.122-40.397 40.397v258.274c0 22.275 18.122 40.397 40.397 40.397h156.914l-11.856 49.797h-25.589c-16.677 0-30.245 13.567-30.245 30.244v6.315h-31.545c-5.523 0-10 4.478-10 10s4.477 10 10 10h266.999c5.523 0 10-4.478 10-10s-4.477-10-10-10h-31.545v-6.315c0-16.677-13.568-30.244-30.245-30.244h-25.589l-11.856-49.797h156.914c22.275 0 40.397-18.122 40.397-40.397v-56.83-201.445c0-22.275-18.122-40.397-40.398-40.397zm-143.282 175.799c-15.635 10.945-44.926-3.932-72.898 10.994-6.825-35.455-2.522-68.8 33.003-76.16 4.591-.957 9.534-1.39 13.742-1.306 12.024 8.921 24.186 17.944 36.176 26.841 5.249 15.268 3.279 30.32-10.023 39.631zm10.078-107.188 28.307 21.002-21.769 26.541c-8.962-6.649-16.666-12.365-25.628-19.015 1.861-2.781 17.389-25.987 19.09-28.528zm70.014-104.631c7.574-11.321 23.021-13.955 33.917-5.87 10.9 8.086 12.852 23.632 4.215 34.163-15.325 18.683-51.759 63.104-67.142 81.859l-29.87-22.162zm-46.034 455.13v6.315h-163.908v-6.315c0-5.648 4.596-10.244 10.245-10.244h143.418c5.649 0 10.245 4.596 10.245 10.244zm-56.393-30.244h-51.122l11.856-49.797h27.41zm186.015-90.194c0 11.247-9.15 20.397-20.397 20.397-15.874 0-364.508 0-382.356 0-11.247 0-20.397-9.15-20.397-20.397v-46.83h28.576c5.523 0 10-4.478 10-10s-4.477-10-10-10h-28.578v-191.445c0-11.247 9.15-20.397 20.397-20.397h257.615c-9.58 14.317-37.529 56.085-46.382 69.314-19.597.177-39.162 7.004-51.97 21.956-17.429 20.345-20.491 52.313-9.101 95.015 1.947 7.302 11.058 9.918 16.571 4.652 25.857-24.707 58.061 2.243 86.9-21.099 17.604-14.25 21.77-36.904 15.132-58.088 8.973-10.94 82.664-100.784 91.658-111.75h21.933c11.247 0 20.397 9.15 20.397 20.397v191.444h-314.574c-5.523 0-10 4.478-10 10s4.477 10 10 10h314.576z"></path>
                        <path d="m111.075 298.619c-4.814.984-8.04 5.145-8.04 9.811 0 6.255 5.719 11.045 11.95 9.8 5.537-1.124 8.91-6.46 7.85-11.76-1.113-5.47-6.419-8.926-11.76-7.851z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3
                    className="mil-mb-20 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "0.6px",
                      color: "#162341",
                    }}
                  >
                    Unique By Design{" "}
                  </h3>
                  <p
                    className="mil-text-s mil-soft mil-up"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                      color: "#162341",
                    }}
                  >
                    We don’t just follow trends; we craft them. Every project
                    becomes one-of-a-kind through our bespoke strategies and
                    innovative touch.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-30">
                <div className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up">
                  <div className="mil-mb-30 mil-up">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="fi_4221516"
                      viewBox="0 0 512 512"
                      width="70"
                      height="70"
                      fill="#162341"
                    >
                      <path d="M488,144H440a8,8,0,0,0-8,8V456a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,488,144Zm-8,304H448V160h32Z"></path>
                      <path d="M408,464a8,8,0,0,0,8-8V216a8,8,0,0,0-8-8H360a8,8,0,0,0-8,8V456a8,8,0,0,0,8,8ZM368,224h32V448H368Z"></path>
                      <path d="M328,464a8,8,0,0,0,8-8V272a8,8,0,0,0-8-8H280a8,8,0,0,0-8,8V456a8,8,0,0,0,8,8ZM288,280h32V448H288Z"></path>
                      <path d="M248,464a8,8,0,0,0,8-8V336a8,8,0,0,0-8-8H200a8,8,0,0,0-8,8V456a8,8,0,0,0,8,8ZM208,344h32V448H208Z"></path>
                      <path d="M168,464a8,8,0,0,0,8-8V368a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8Zm-40-88h32v72H128Z"></path>
                      <path d="M88,464a8,8,0,0,0,8-8V408a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8ZM48,416H80v32H48Z"></path>
                      <path d="M216,144h16a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v9.376A24,24,0,0,0,216,176a8,8,0,0,1,0,16H200a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-9.376A24,24,0,0,0,216,160a8,8,0,0,1,0-16Z"></path>
                      <path d="M488,48H440a8,8,0,0,0,0,16h28.686l-112,112H311.664c.219-2.639.336-5.306.336-8a96,96,0,1,0-113.677,94.362L164.687,296H104a8,8,0,0,0-5.657,2.343l-80,80a8,8,0,0,0,11.314,11.314L107.313,312H168a8,8,0,0,0,5.657-2.343l45.723-45.723A96.19,96.19,0,0,0,308.963,192H360a8,8,0,0,0,5.657-2.343L480,75.314V104a8,8,0,0,0,16,0V56A8,8,0,0,0,488,48ZM216,248a80,80,0,1,1,80-80A80.091,80.091,0,0,1,216,248Z"></path>
                    </svg>
                  </div>
                  <h3
                    className="mil-mb-20 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "0.6px",
                      color: "#162341",
                    }}
                  >
                    Adding Value At Every Step{" "}
                  </h3>
                  <p
                    className="mil-text-s mil-soft mil-up"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                      color: "#162341",
                    }}
                  >
                    From initial concept creation to execution, Shiro’s hands-on
                    approach ensures measurable impact and lasting value.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-30">
                <div className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up">
                  <div className="mil-mb-30 mil-up">
                    <svg
                      id="fi_12472564"
                      enable-background="new 0 0 512 512"
                      height="70"
                      viewBox="0 0 512 512"
                      width="70"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#162341"
                    >
                      <path d="m480.038 392.604c-4.897 0-9.727.955-14.353 2.839l-2.278.928c1.179-6.916.011-13.813-3.478-19.76-5.371-9.147-15.465-14.608-27.001-14.608-4.871 0-9.75.995-14.327 2.903-.337-.708-.701-1.396-1.091-2.06-5.376-9.157-15.48-14.624-27.028-14.624-6.594 0-13.173 1.816-19.025 5.252l-78.051 45.814c-2.118-3.425-4.776-6.485-7.937-9.134-.083-.069-.17-.137-.259-.199l-103.712-73.345c-.675-.478-1.482-.734-2.31-.734h-104.54v-11.186c0-10.558-8.59-19.149-19.149-19.153l-36.354-.003c-10.557 0-19.145 8.59-19.145 19.148l.001 157.18c0 10.557 8.59 19.148 19.15 19.152h36.341.007c5.097 0 9.9-1.996 13.524-5.621 3.624-3.624 5.62-8.428 5.62-13.525v-11.604l125.719 51.347c.48.196.994.297 1.512.297l168.02.006c.517 0 1.029-.101 1.508-.295l117.957-48.019c17.855-7.271 27.074-26.23 20.552-42.263-4.633-11.38-16.358-18.733-29.873-18.733zm-277.376 101.303-128.017-52.284.004-117.747h103.268l102.538 72.513c3.342 2.829 5.961 6.239 7.788 10.14.013.026.032.049.046.075 4.093 8.807 3.216 18.358-2.301 24.947-3.968 4.742-9.857 7.424-16.595 7.566-.024-.001-.047-.008-.072-.008-.021 0-.042 0-.064.001-6.773.097-13.492-2.362-18.966-6.945-.13-.108-.268-.209-.411-.301l-68.536-43.891c-1.861-1.191-4.334-.649-5.526 1.211s-.649 4.334 1.211 5.525l68.328 43.757c6.766 5.589 15.076 8.646 23.484 8.646.115 0 .231-.002.347-.002.045.001.086.013.131.013h89.854c.517 0 1.029-.101 1.508-.295l97.94-39.863c.028-.011.05-.029.078-.041l10.004-4.072c3.664-1.492 7.478-2.249 11.335-2.249 10.245 0 19.063 5.397 22.463 13.749 4.861 11.947-2.388 26.229-16.159 31.837l-117.23 47.724zm-147.162-20.893h-.006-36.341c-6.149-.002-11.152-5.005-11.152-11.152l-.001-157.18c0-6.146 5-11.147 11.15-11.147l36.347.003c6.149.002 11.151 5.006 11.151 11.153l-.004 157.177c0 2.961-1.164 5.756-3.277 7.869s-4.907 3.277-7.867 3.277zm334.982-116.792c8.68 0 16.205 3.99 20.13 10.676.327.556.62 1.142.895 1.745l-97.532 57.25-17.032 2.473c2.521-6.735 2.537-14.416-.073-21.834l78.638-46.159c4.624-2.716 9.803-4.151 14.974-4.151zm63.576 43.964-95.668 38.938h-68.563c.636-.601 1.238-1.243 1.822-1.906l24.25-3.521c.512-.075 1.005-.248 1.451-.51l100.578-59.038c.066-.039.119-.091.183-.134.091-.043.189-.067.277-.117 4.513-2.549 9.541-3.896 14.541-3.896 8.669 0 16.184 3.984 20.102 10.658 3.36 5.728 3.712 12.769 1.027 19.526z"></path>
                      <path d="m59.739 438.521c0-12.36-10.056-22.417-22.415-22.417-12.36 0-22.415 10.057-22.415 22.417 0 12.359 10.055 22.414 22.415 22.414s22.415-10.055 22.415-22.414zm-22.415 14.414c-7.948 0-14.415-6.466-14.415-14.414 0-7.949 6.467-14.417 14.415-14.417s14.415 6.468 14.415 14.417c0 7.948-6.467 14.414-14.415 14.414z"></path>
                      <path d="m273.023 85.285c1.685 0 3.405-.5 5.113-1.485l49.542-28.602c3.11-1.797 4.893-4.536 4.892-7.516-.001-2.979-1.785-5.716-4.893-7.508l-49.542-28.604c-1.708-.985-3.428-1.484-5.113-1.484-4.649 0-7.896 3.698-7.896 8.994v10.298c-75.58 11.808-132.14 77.61-132.14 154.495 0 50.783 24.81 98.592 66.366 127.888 3.422 2.414 7.441 3.69 11.62 3.69 6.566 0 12.741-3.201 16.515-8.559 3.109-4.406 4.314-9.76 3.394-15.075s-3.854-9.954-8.263-13.061c-30.839-21.739-49.251-57.21-49.251-94.884 0-55.128 38.307-102.101 91.759-113.446v5.86c0 5.299 3.248 8.999 7.897 8.999zm-78.031 18.245c-19.104 22.403-29.625 50.937-29.625 80.344 0 40.271 19.679 78.186 52.642 101.423 2.662 1.876 4.434 4.677 4.989 7.886s-.171 6.439-2.05 9.101c-2.279 3.236-6.009 5.169-9.976 5.169-2.519 0-4.943-.771-7.01-2.229-39.434-27.8-62.976-73.164-62.976-121.35 0-74.063 55.315-137.289 128.669-147.068 1.987-.265 3.471-1.96 3.471-3.965v-13.76c0-.454.058-.77.115-.963.185.044.485.145.896.382l49.542 28.604c.395.228.64.436.779.582-.139.146-.385.356-.78.585l-49.54 28.601c-.409.236-.708.338-.896.381-.058-.192-.115-.509-.115-.964v-10.698c0-1.179-.52-2.297-1.42-3.057-.901-.762-2.09-1.087-3.252-.887-28.488 4.861-54.577 19.735-73.463 41.883z"></path>
                      <path d="m251.052 327.574 49.541 28.603c1.708.985 3.429 1.485 5.114 1.485 2.37 0 4.476-.998 5.931-2.809 1.285-1.601 1.964-3.741 1.964-6.189v-10.296c75.58-11.806 132.142-77.607 132.142-154.494 0-50.784-24.809-98.592-66.364-127.888-3.425-2.414-7.443-3.689-11.621-3.689-6.564 0-12.737 3.199-16.515 8.558-6.414 9.101-4.23 21.722 4.869 28.136 30.839 21.738 49.25 57.209 49.25 94.884 0 55.13-38.308 102.101-91.76 113.443v-5.856c0-5.299-3.246-8.999-7.895-8.999-1.687 0-3.409.501-5.115 1.487l-49.539 28.601c-3.109 1.793-4.894 4.53-4.895 7.509-.001 2.978 1.781 5.717 4.893 7.514zm4-8.095 49.542-28.603c.408-.235.705-.337.894-.381.058.193.115.51.115.966v10.693c0 1.179.52 2.297 1.42 3.057.9.761 2.09 1.084 3.252.887 28.487-4.858 54.577-19.731 73.463-41.88 19.104-22.402 29.625-50.937 29.625-80.344 0-40.272-19.679-78.188-52.641-101.423-5.494-3.872-6.813-11.493-2.939-16.987 2.281-3.235 6.009-5.167 9.976-5.167 2.519 0 4.943.771 7.012 2.229 39.432 27.798 62.974 73.162 62.974 121.349 0 74.065-55.316 137.29-128.67 147.066-1.987.265-3.472 1.96-3.472 3.965v13.759c0 .456-.058.772-.115.966-.185-.044-.485-.146-.895-.382l-49.539-28.602c-.396-.229-.642-.438-.781-.585.138-.147.383-.355.779-.583z"></path>
                      <path d="m287.737 281.579c.03.014.059.031.09.044.212.088.43.152.65.202.059.013.117.024.177.034.235.043.473.072.71.072s.475-.029.71-.072c.06-.01.118-.021.177-.034.221-.05.438-.114.65-.202.032-.013.06-.031.091-.045.125-.056.251-.113.372-.183l81.456-47.03c1.237-.714 2-2.035 2-3.464v-94.055c0-.139-.013-.275-.027-.411-.003-.035-.003-.069-.007-.104-.029-.226-.083-.445-.149-.661-.019-.059-.039-.116-.06-.174-.08-.223-.173-.441-.291-.646-.001-.001-.001-.003-.001-.003-.001-.002-.002-.003-.003-.004-.119-.205-.262-.396-.415-.577-.039-.046-.077-.091-.118-.135-.153-.166-.317-.323-.5-.462-.027-.021-.058-.037-.086-.059-.111-.08-.223-.159-.343-.229l-81.456-47.03c-1.237-.715-2.763-.715-4 0l-81.456 47.03c-.115.066-.221.143-.328.22-.034.024-.07.044-.104.069-.18.138-.342.293-.494.457-.042.045-.083.093-.124.141-.152.181-.294.369-.413.574 0 .001-.001.002-.002.003s-.001.003-.002.004c-.118.204-.21.423-.29.646-.021.058-.042.115-.06.174-.066.216-.121.436-.15.661-.004.035-.003.069-.007.104-.014.136-.028.272-.028.411v94.055c0 1.429.763 2.75 2 3.464l81.456 47.03c.123.071.249.128.375.185zm45.18-161.997-75.455 43.563c-.039.022-.068.053-.105.076-.073.045-.145.09-.215.14-.072.052-.141.108-.21.166-.072.059-.143.117-.209.181-.057.054-.112.109-.166.166-.059.063-.113.128-.167.194-.061.073-.122.146-.177.224-.051.071-.096.146-.142.22-.021.034-.05.063-.07.098-.021.036-.03.074-.049.11-.042.077-.084.154-.12.234-.04.087-.072.176-.106.267-.029.079-.058.156-.082.235-.022.077-.044.153-.063.231-.021.092-.037.185-.052.278-.014.084-.029.166-.037.25-.009.088-.012.176-.015.264-.001.045-.013.086-.013.13v17.649l-12.039-6.951v-19.959l77.453-44.719zm29.903 17.265-73.456 42.409-21.903-12.647 73.454-42.408zm-69.455 134.156v-84.819l73.456-42.409v84.817zm-53.943-120.582-23.513-13.574 73.456-42.411 23.511 13.575zm-27.513-6.647 23.514 13.575v22.267c0 1.429.762 2.75 2 3.464l20.039 11.569c.619.357 1.31.536 2 .536s1.381-.179 2-.536c1.237-.714 2-2.035 2-3.464v-17.649l21.903 12.647v84.819l-73.456-42.411z"></path>
                    </svg>
                  </div>
                  <h3
                    className="mil-mb-20 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "0.6px",
                      color: "#162341",
                    }}
                  >
                    A Collaborative Journey{" "}
                  </h3>
                  <p
                    className="mil-text-s mil-soft mil-up"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                      marginBottom: "1.5rem",
                      color: "#162341",
                    }}
                  >
                    We partner closely with visionaries, bringing ideas to life
                    with a blend of expertise, creativity, and bold thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* icon boxes end */}
        {/* call to action */}
        <div
          className="mil-cta mil-p-0-160 mil-up"
          style={{ backgroundColor: " #162341" }}
        >
          <div className="container" style={{ backgroundColor: " #162341" }}>
            <div
              className="mil-out-frame mil-bg-2"
              style={{ backgroundColor: " #162341", paddingLeft: "100px" }}
            >
              <div className="row justify-content-center align-items-center mil-p-160-160">
                <div className="col-xl-7 mil-text-center">
                  <h2
                    className="mil-light mil-mb-30 mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Explore Our Services And Start With Us
                  </h2>
                  <p
                    className="mil-text-l mil-light mil-mb-60 mil-up"
                    style={{
                      fontFamily: "neue-text",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Shiro Concepts Investment work on a comprehensive range of
                    services designed to ensure the success of every venture we
                    undertake.
                  </p>
                  <div className="mil-up">
                    <Link
                      href="services"
                      className="mil-btn mil-md mil-add-arrow"
                      aria-label="Link to our services"
                      style={{
                        fontFamily: "neue-heading",
                        letterSpacing: "1.5px",
                      }}
                    >
                      EXPLORE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* call to action end */}
        {/* features */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: "#162341" }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-6 mil-mb-80">
                <h2
                  className="mil-mb-30 mil-light mil-up"
                  style={{
                    fontFamily: "neue-heading",
                    letterSpacing: "1.5px",
                    color: "#d2b488",
                  }}
                >
                  Target Market and Industry Focus{" "}
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-60 mil-up"
                  style={{
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  Shiro Concepts Investment focuses on high-growth industries
                  and sectors with substantial potential <br /> Our expertise
                  spans a wide range of commercial enterprise investment
                  opportunities
                </p>
                <ul className="mil-list-1 mil-accent">
                  <li>
                    <div className="mil-up">
                      <a href="#." className="mil-up">
                        <h3
                          className="mil-mb-15 mil-light mil-up"
                          style={{
                            fontFamily: "neue-heading",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Food and Beverage{" "}
                        </h3>
                        <p
                          className="mil-text-m mil-pale-2 mil-up"
                          style={{
                            fontFamily: "neue-text",
                            letterSpacing: "1.5px",
                          }}
                        >
                          From unique cafes to high-end restaurants
                          <br />
                          we invest in creating standout dining experiences
                        </p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mil-up">
                      <a href="#." className="mil-up">
                        <h3
                          className="mil-mb-15 mil-light mil-up"
                          style={{
                            fontFamily: "neue-heading",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Fashion Retail{" "}
                        </h3>
                        <p
                          className="mil-text-m mil-pale-2 mil-up"
                          style={{
                            fontFamily: "neue-text",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Supporting innovative brands and retail
                          <br />
                          ventures to thrive in competitive markets{" "}
                        </p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mil-up">
                      <a href="#." className="mil-up">
                        <h3
                          className="mil-mb-15 mil-light mil-up"
                          style={{
                            fontFamily: "neue-heading",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Motors and Automotive{" "}
                        </h3>
                        <p
                          className="mil-text-m mil-pale-2 mil-up"
                          style={{
                            fontFamily: "neue-text",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Investing in ventures that cater to automotive
                          <br />
                          enthusiasts and the broader motor industry
                        </p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mil-up">
                      <a href="#." className="mil-up">
                        <h3
                          className="mil-mb-15 mil-light mil-up"
                          style={{
                            fontFamily: "neue-heading",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Supermarkets and Hypermarkets{" "}
                        </h3>
                        <p
                          className="mil-text-m mil-pale-2 mil-up"
                          style={{
                            fontFamily: "neue-text",
                            letterSpacing: "1.5px",
                          }}
                        >
                          Expanding retail horizons with strategic <br />
                          investments in essential services
                        </p>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img
                    src="img/home-5/3.png"
                    loading="lazy"
                    alt="Promotional Image For Shiro Concepts Investment"
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
        {/* features */}
        <div
          className="mil-features mil-p-0-80"
          style={{ backgroundColor: " #162341" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-xl-8 mil-mb-80">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h2
                    className="mil-mb-30 mil-light mil-up"
                    style={{
                      fontFamily: "neue-heading",
                      letterSpacing: "3px",
                      color: "#d2b488",
                    }}
                  >
                    Our Philosophy{" "}
                  </h2>
                  <div>
                    <svg
                      id="fi_9725400"
                      height="80"
                      viewBox="0 0 512 512"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#d2b488"
                    >
                      <path d="m464.362 223.063c22.913 0 41.558-18.645 41.558-41.561v-43.838c0-4.453-3.608-8.061-8.06-8.061h-58.93v-63.854c0-22.911-18.647-41.558-41.558-41.558h-317.223c-22.372 0-40.574 18.197-40.574 40.571v381.467c-.033 14-11.454 25.419-25.453 25.456-4.451.011-8.047 3.625-8.043 8.074.006 4.444 3.613 8.049 8.064 8.049h317.222c22.373 0 40.576-18.199 40.576-40.569v-48.311c30.206-12.02 50.34-24.685 61.16-38.456 1.708-2.176 2.185-5.068 1.263-7.674-.92-2.604-3.113-4.557-5.804-5.17-.333-.075-.657-.147-.977-.222 34.605-21.358 38.054-42.48 41.142-61.396 2.5-15.299 4.657-28.518 24.452-42.462 2.987-2.104 4.186-5.955 2.917-9.382-1.267-3.432-4.678-5.591-8.318-5.233-42.728 4.03-82.494 19.846-115.835 44.188v-50.058zm25.437-77.335v35.775c0 14.026-11.413 25.436-25.437 25.436h-1.925c-.225-.04-.432-.108-.657-.134-12.997-1.351-22.814-12.236-22.849-25.302v-35.775zm-92.413-105.414c14.016.008 25.421 11.415 25.421 25.435v115.775c.022 9.553 3.265 18.369 8.719 25.414h-59.584v-141.167c.032-13.999 11.448-25.416 25.444-25.457zm-41.57 406.925c0 13.477-10.967 24.446-24.45 24.446h-71.146c10.823-16.46 21.643-32.007 32.455-46.656 25.356-10.085 43.085-15.729 52.592-16.688.585-.059 1.163-.181 1.721-.369 3.022-1 5.956-2.007 8.827-3.016v42.283zm96.999-163.829c-3.201 19.604-6.224 38.118-49.979 59.081-2.754 1.314-4.52 4.068-4.582 7.119-.058 3.044 1.606 5.864 4.306 7.282 1.333.704 3.456 1.591 8.376 2.974-13.874 11.147-36.729 22.053-68.215 32.538-7.375.879-17.866 3.7-31.636 8.484 41.547-52.37 82.831-91.157 123.319-115.731 3.806-2.313 5.02-7.271 2.714-11.076-2.314-3.804-7.259-5.018-11.079-2.711-39.05 23.703-78.64 59.934-118.334 108.107 27.479-66.134 86.614-115.818 157.248-130.778-8.42 11.944-10.359 23.809-12.138 34.711zm-172.918 131.8c-12.991 17.579-25.977 36.373-38.947 56.476h-194.033c5.482-7.04 8.761-15.865 8.784-25.435v-381.488c0-13.479 10.969-24.448 24.448-24.448h284.448c-5.477 7.038-8.755 15.865-8.781 25.435v220.254c-37.899 33.053-65.335 78.026-75.919 129.206zm30.069-287.537c0 4.452-3.611 8.06-8.064 8.06h-192.288c-4.454 0-8.063-3.607-8.063-8.06 0-4.454 3.61-8.065 8.063-8.065h192.288c4.453-.001 8.064 3.611 8.064 8.065zm0 51.331c0 4.451-3.611 8.06-8.064 8.06h-192.288c-4.454 0-8.063-3.608-8.063-8.06 0-4.454 3.61-8.063 8.063-8.063h192.288c4.453-.001 8.064 3.609 8.064 8.063zm0 51.329c0 4.453-3.611 8.063-8.064 8.063h-192.288c-4.454 0-8.063-3.609-8.063-8.063 0-4.452 3.61-8.06 8.063-8.06h192.288c4.453 0 8.064 3.608 8.064 8.06zm0 51.33c0 4.454-3.611 8.062-8.064 8.062h-192.288c-4.454 0-8.063-3.607-8.063-8.062 0-4.453 3.61-8.061 8.063-8.061h192.288c4.453.001 8.064 3.608 8.064 8.061zm-8.664 51.333c0 4.456-3.61 8.063-8.063 8.063h-183.625c-4.454 0-8.063-3.607-8.063-8.063 0-4.452 3.61-8.058 8.063-8.058h183.625c4.453 0 8.063 3.606 8.063 8.058zm-23.224 51.331c0 4.452-3.611 8.063-8.064 8.063h-160.4c-4.454 0-8.063-3.611-8.063-8.063 0-4.453 3.61-8.061 8.063-8.061h160.399c4.454.001 8.065 3.608 8.065 8.061z"></path>
                    </svg>
                  </div>
                </div>
                <p
                  className="mil-text-l mil-pale-2  mil-up"
                  style={{
                    padding: "2rem",
                    marginBottom: "1rem",
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  We believe that every project has a story, and our role is to
                  help write a chapter that stands out. By blending vision with
                  execution, we bring concepts to life in ways that resonate far
                  beyond financial success.
                </p>
                <p
                  className="mil-text-l mil-pale-2 mil-mb-60 mil-up"
                  style={{
                    backgroundColor: "#111b30",
                    padding: "2rem",
                    fontFamily: "neue-text",
                    letterSpacing: "1.5px",
                  }}
                >
                  At Shiro, we’re not just shaping investments — we’re shaping
                  the future. Together, let’s make something extraordinary.
                </p>
                <div
                  className="mil-up"
                  style={{ fontFamily: "neue-heading", letterSpacing: "1.5px" }}
                >
                  <Link
                    href="about"
                    className="mil-btn mil-m mil-add-arrow"
                    aria-label="Link to about us section"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
              {/* <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img
                    src="img/home-5/4.png"
                    loading="lazy"
                    alt="Promotional Image For Shiro Concepts Investment"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* features end */}
      </PlaxLayout>
    </>
  );
};
export default page;
