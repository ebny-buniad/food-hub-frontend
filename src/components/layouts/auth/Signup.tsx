"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Roles } from "@/constants/role"
import { authClient } from "@/lib/auth-client"
import { useForm } from "@tanstack/react-form"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(1, "Name field is required"),
  password: z.string().min(8, "Minimum length is 8"),
  email: z.email(),
  role: z.string().min(1, "Please select a role"),
});



export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  // const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating user");
      try {
        const { data, error } = await authClient.signUp.email(value);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("User Created Successfully", { id: toastId });

        // if(data?.user?.role === Roles.provider){
        //   router.replace("/")
        // }else{
        //   router.replace("/")
        // }


      } catch (err) {
        toast.error("Something went wrong, please try again.", { id: toastId });
      }
    }
  })

  return (
    <Card {...props} className="w-96 my-10 mx-auto">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}>
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />


            <form.Field name="role">
              {(field) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Role</label>

                  <RadioGroup
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    className="grid gap-3"
                  >
                    <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-medium">User</p>
                        <p className="text-sm text-muted-foreground">Order food easily</p>
                      </div>
                      <RadioGroupItem value={`${Roles.user}`} />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-medium">Provider</p>
                        <p className="text-sm text-muted-foreground">Manage your restaurant</p>
                      </div>
                      <RadioGroupItem value={`${Roles.provider}`} />
                    </label>
                  </RadioGroup>

                  {/* ERROR MESSAGE */}
                  {field.state.meta.errors?.length > 0 && (
                    <p className="text-sm text-red-500">{String(field.state.meta.errors[0]?.message)}</p>
                  )}
                </div>
              )}
            </form.Field>

            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>

                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/auth/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
