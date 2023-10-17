import nodemailer from 'nodemailer'

export default async function sendMail({
  name,
  email,
  content,
}: Record<'name' | 'email' | 'content', string>) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  let mailOptions = {
    from: `${name} <${email}>`,
    to: 'jrw1982@mac.com',
    subject: '✨ New Message from Contact Form',
    html: `
      <h1>New Message from Contact Form</h1>
      <p><strong>Name: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${content}</p>
    `,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info.messageId)
      }
    })
  })
  return true
}
