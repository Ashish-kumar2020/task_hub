import { signInSchema } from '@/lib/schema'
import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type SigninFormData = z.infer<typeof signInSchema>
const SignIn = () => {
  const form = useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues : {
      email: "",
      password: ""
    }
  });

const handleOnSubmit = (values: SigninFormData) =>{
  console.log(values)
}
  return (
    
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-6xl shadow-xl h-[25rem]">
          <CardHeader className="text-center mb-5">
            <CardTitle className='text-2xl font-bold'>Welcome Back</CardTitle>
            <CardDescription className="text-sm text-muted-foreground" >Sign in to your account to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-6'>
                    <FormField
                        control={form.control}
                        name='email'
                        render = {({field}) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type='email' placeholder='email@example.com' className='w-full' {...field}/>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render = {({field}) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type='password' placeholder='********' className='w-full' {...field}/>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                    />
                    <Button type='submit' className='w-full cursor-pointer'>
                          Sign In
                    </Button>
                </form>
            </Form>
          </CardContent>
      </Card>
    </div>
  )
}

export default SignIn