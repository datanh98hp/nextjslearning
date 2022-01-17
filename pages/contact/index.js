import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";


export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send me your message"/>
      </Head>
      <ContactForm></ContactForm>
    </Fragment>
  )
}
