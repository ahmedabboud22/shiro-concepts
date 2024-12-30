import Head from "next/head";

const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiro Concepts Investment",
    url: "https://www.shiroconcepts.com",
    logo: "https://www.shiroconcepts.com/logo.png",
    description:
      "Shiro Concepts Investment is a visionary company based in Dubai, specializing in transforming ideas into unique realities.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "UAE",
    },
    service: [
      {
        "@type": "Service",
        name: "Idea Development",
        description:
          "Transforming innovative concepts into practical and profitable business models.",
      },
      {
        "@type": "Service",
        name: "Market Analysis",
        description:
          "Conducting in-depth research to identify opportunities and trends within target markets.",
      },
      {
        "@type": "Service",
        name: "Concept Creation",
        description:
          "Developing the ideas into reality and linking them with brand design and storytelling.",
      },
      {
        "@type": "Service",
        name: "Project Management",
        description:
          "Overseeing projects from inception to completion, ensuring seamless execution.",
      },
      {
        "@type": "Service",
        name: "Brand Positioning",
        description:
          "Building strong, recognizable brands that resonate with target audiences.",
      },
      {
        "@type": "Service",
        name: "Growth Optimization",
        description:
          "Developing strategies to scale businesses and maximize returns.",
      },
      {
        "@type": "Service",
        name: "Operational Excellence",
        description:
          "Providing ongoing management support to enhance efficiency and sustainability.",
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ structuredData }),
        }}
      />
    </Head>
  );
};

export default OrganizationStructuredData;
