'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { toast } from 'sonner';

import { Mail } from 'lucide-react';

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
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a vaild email.'
  }),
  content: z.string().min(20, {
    message: 'Message must be at least 20 characters.'
  })
});

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false); // State to manage loading indicator

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      content: ''
    }
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true); // Set loading state to true before submission

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          emailAddress: values.email,
          content: values.content
        })
      });

      if (response.ok) {
        // Handle success case
        toast('Message sent successfully!');
        form.reset(); // Clear the form upon successful submission
      } else {
        // Handle error case
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Handle any unexpected errors
      toast(
        'An error occurred while sending the message. Please try again later.'
      );
      console.error(error);
    } finally {
      setLoading(false); // Set loading state back to false after submission
    }
  };

  return (
    <section className="mx-auto flex w-full py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <p className="pointer-events-none max-w-xl text-4xl font-bold">
              Contact
            </p>
            <p className="pointer-events-none font-light">
              Looking to collaborate on a project? Drop a line for inquiries,
              quotes, or to discuss potential collaborations. Let's build
              something amazing together.
            </p>
            <a
              href="mailto:noahcousins.dev@gmail.com"
              className="w-fit items-center text-base text-primary transition-all duration-200 ease-in-out hover:text-primary/60"
            >
              <span className="group flex items-center gap-2">
                <Mail
                  className="scale-90 items-center transition-transform duration-200 ease-in-out group-hover:scale-100"
                  size={20}
                />
                noahcousins.dev@gmail.com
              </span>
            </a>
          </div>

          <div className="rounded-lg lg:col-span-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="rounded-xl"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormLabel className="pl-1 text-xs">Name</FormLabel> */}

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
                        <FormControl>
                          <Input
                            className="rounded-xl"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormLabel className="pl-1 text-xs">Email</FormLabel> */}

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
                      <FormControl>
                        <Textarea
                          className="rounded-xl"
                          placeholder="Enter your message here"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormLabel className="pl-1 text-xs">Text</FormLabel> */}

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  className="rounded-xl"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
