import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/service/mailService'

export async function POST(request: NextRequest) {
  const body = await request.json()

  let name = String(body.name)
  let email = String(body.email)
  let content = String(body.message)

  await sendMail(name, email, content)

  return NextResponse.json({ message: 'Email sent successfully.' })
}
