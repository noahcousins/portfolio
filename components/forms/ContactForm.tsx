'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      content: ''
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    // TODO: pass formData to onSubmit
    onSubmit(values);
    form.reset();
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ### Parse formData like below:
    // const name = formData.get('name') as string;
    // const email = formData.get('email') as string;
    // const phone = formData.get('phone') as string;
    // const message = formData.get('content') as string;

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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="What's your name?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="What's your email?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="What's your #?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Text</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Add Statement</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
