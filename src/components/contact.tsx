import { ContactForm } from './contact-form'

export default function Contact() {
  return (
    <section id="contact" className="container flex flex-col">
      <h2>Contact</h2>
      <p className="mb-4">
        I&apos;m currently looking for new opportunities. If you&apos;d like to
        get in touch, please fill out the form below.
      </p>
      <ContactForm />
    </section>
  )
}
