'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { toast } from './ui/use-toast'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please enter a name with at least 2 characters.' })
    .max(50),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  content: z.string().min(10, { message: 'Please enter a message.' }),
})

export type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm({
  action,
}: {
  action: (formData: FormData) => Promise<never>
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Message sent',
      description: 'Thanks for reaching out! I will get back to you soon.',
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form
        action={action}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="shadow-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="shadow-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none shadow-sm"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send message</Button>
      </form>
    </Form>
  )
}
