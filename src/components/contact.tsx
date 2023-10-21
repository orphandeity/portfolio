import sendMail from '@/service/mailService'
import { ContactForm } from './contact-form'
import { redirect } from 'next/navigation'

export default function Contact() {
  const action = async (formData: FormData) => {
    'use server'

    let data = Object.fromEntries(formData.entries()) as Record<
      'name' | 'email' | 'message',
      string
    >

    try {
      await sendMail(data)
      redirect('/?sent=true')
    } catch (error) {
      console.error(error)
      redirect('/?error')
    }
  }

  return (
    <section
      id="contact"
      className="container flex flex-col lg:grid lg:grid-cols-2 lg:gap-20"
    >
      <div>
        <h2>Contact</h2>
        <p className="mb-8">
          I&apos;m currently looking for new opportunities. If you&apos;d like
          to get in touch, please fill out the form below.
        </p>
      </div>
      <ContactForm action={action} />
    </section>
  )
}
