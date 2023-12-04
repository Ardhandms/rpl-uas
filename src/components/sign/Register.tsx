'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/components/ui/use-toast";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(3, 'Name must be minimal 3 characters'),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters").nonempty("Password is required"),
});

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true);

    fetch('/api/auth/signup', {
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          navigate.push('/login');
          return;
        }

        toast({
          title: res.status,
          description: res.message,
          variant: 'destructive'
        });
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: (error as Error).message,
          variant: 'destructive'
        });
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <section className="mt-8 min-h-[400px] flex flex-col items-center justify-center">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm mt-10 space-y-4" action="#">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-semibold">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Masukan nama lengkap" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Masukan email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-semibold">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Masukan password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-1">
            <Button
              disabled={loading}
              type="submit"
              className="w-full"
            >
              {loading ? (
                <AiOutlineLoading3Quarters
                  fontSize={24}
                  className="mx-auto animate-spin"
                />
              ) : 'Signup'}
            </Button>
            <p className="text-gray-700 text-sm">
              Sudah mempunyai akun? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default Register;
