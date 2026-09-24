import { useTranslation } from "react-i18next";
import Form from "../../components/Form/Form";
import css from "./ContactPage.module.css";
import { Helmet } from "react-helmet-async";
import Separator from "../../components/Separator/Separator";
import { Icon } from "@iconify/react";

const ContactPage = () => {
  const { t } = useTranslation();
  const emailAddress = "cristina.stoian@yahoo.com";

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cristinastoian-developer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://cristinastoian-developer.com/contact",
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristina Stoian",
    jobTitle: "Frontend Developer",
    email: emailAddress,
    url: "https://cristinastoian-developer.com",
    description:
      "Get in touch with me for collaborations or job opportunities in frontend development.",
    sameAs: [
      "https://github.com/CristinaSt86",
      "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact | Cristina Stoian | Frontend Developer Portfolio</title>

        <meta
          name="description"
          content="Get in touch with me for collaborations or job opportunities in frontend development."
        />

        <meta
          name="keywords"
          content="contact, frontend developer, collaboration, hire a developer"
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h1 id="contact" className={css.contactMe}>
        {t("contactPage.contactMe")}
      </h1>

      <Separator />

      <div className={css.display}>
        <Form />
      </div>

      <div className={css.contactContainer}>
        <a
          href={`mailto:${emailAddress}`}
          className={css.primaryButton}
        >
          <Icon icon="mdi:email" className={css.icon} />
          {t("contactPage.hireMe")}
        </a>

        <a
          href={`tel:${t("contactPage.mobileNumber")}`}
          className={css.secondaryButton}
        >
          <Icon icon="mdi:cellphone" className={css.icon} />
          {t("contactPage.mobileNumber")}
        </a>

        <a
          href="/CristinaStoianDE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={css.secondaryButton}
        >
          <Icon icon="mdi:file-account" className={css.icon} />
          {t("contactPage.cvButton")}
        </a>
      </div>
    </>
  );
};

export default ContactPage;