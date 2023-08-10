import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const body = await request.json()

  let name = String(body.name)
  let email = String(body.email)
  let message = String(body.message)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.GOOGLE_USER_EMAIL,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: process.env.GOOGLE_USER_EMAIL,
      to: 'jrw1982@mac.com',
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>You have a new contact form submission!</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
    })

    console.log('Message sent: %s', mail.messageId)
    return NextResponse.json({ message: 'Message successfully sent!' })
  } catch (err) {
    console.log(err)
  }

  return NextResponse.json({ message: 'Something went wrong.' })
}
