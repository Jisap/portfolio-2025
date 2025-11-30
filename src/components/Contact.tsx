import { motion } from "motion/react"
import { Form, useForm } from "react-hook-form"
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { SectionHeader } from "./SectionHeader"
import { fadeUp } from "@/lib/animations"


type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}




export const Contact = () => {

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    }
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="mt-30 scroll-mt-10"
      id="contact"
    >
      <SectionHeader
        title="Let's make something awesome together!"
        subtitle="Contact"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto space-y-4 mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </motion.section>
  )
}
