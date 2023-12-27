'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Email must be in proper format'
  }),
  phone: z.string().min(2, {
    message: 'Phone number must be at least 2 characters.'
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.'
  })
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: implement
    console.log(values);

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        phoneNumber: values.phone,
        content: values.content
      })
    });
  }

  return (
    <section className="mx-auto flex w-full">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <p className="max-w-xl text-4xl font-bold">Contact</p>
            <p className="">
              Ready to bring your ideas into the digital realm? Reach out for
              inquiries, quotes, or to discuss potential collaborations. Let's
              create something remarkable together.
            </p>
            <a
              href="mailto:noahcousins.dev@gmail.com"
              className="text-xl font-semibold"
            >
              noahcousins.dev@gmail.com
            </a>
          </div>

          <div className="rounded-lg lg:col-span-3">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>

                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  {...register('name')}
                />

                {errors?.name && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register('email')}
                  />

                  {errors?.email && (
                    <p className="px-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    {...register('phone')}
                  />

                  {errors?.phone && (
                    <p className="px-1 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  {...register('content')}
                />

                {errors?.content && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.content.message}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
