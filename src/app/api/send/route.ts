import ContactMeEmail from '@/src/components/email/Email';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';
import { toast } from 'sonner';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  content: z.string().min(20)
});

export async function POST(req: NextRequest) {
  const { name, emailAddress, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const { data, error } = await resend.emails.send({
    from: 'no-reply@noahcousins.com',
    to: 'noahcousins.dev@gmail.com',
    subject: `${name} has a message!`,
    reply_to: emailAddress,
    react: ContactMeEmail({
      name,
      emailAddress,
      content
    })
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}
