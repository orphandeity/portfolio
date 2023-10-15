import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const body = await request.json()

  let name = String(body.name)
  let email = String(body.email)
  let content = String(body.message)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_USER_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  })

  let message = {
    from: `${name} <${email}>`,
    to: 'jrw1982@mac.com',
    subject: `Portfolio Website Message from ${name}`,
    html: `
      <h1>⭐️ New Message from Portfolio Website</h1>
      <p><strong>Name: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${content}</p>
    `,
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      NextResponse.json({ error })
    } else {
      NextResponse.json({
        message: 'Email sent successfully.',
        info: info.messageId,
      })
    }
  })
}
