import nodemailer from 'nodemailer'

export async function sendMail(name: string, email: string, content: string) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_USER_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  })

  let mailOptions = {
    from: process.env.GOOGLE_USER_EMAIL,
    to: 'jeffwilliams.dev23@gmail.com',
    subject: `Portfolio Website Message from ${name}`,
    html: `
      <h1>⭐️ New Message from Portfolio Website</h1>
      <p><strong>Name: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${content}</p>
    `,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err)
      } else {
        console.log(info.messageId)
        resolve(info.messageId)
      }
    })
  }).then(() => true)
}
