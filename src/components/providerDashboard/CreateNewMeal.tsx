"use client";

import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import * as z from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type Category = {
  id: string;
  cuisine: string;
};

const mealSchema = z.object({
  name: z.string().min(2, "Meal name is required"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  price: z.number().min(1, "Price must be greater than 0"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
  categoryId: z.string().min(1, "Category is required"),
});

export default function AddMealForm({ categories }: { categories: Category[] }) {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      thumbnail: "",
      categoryId: "",
    },
    validators: {
      onSubmit: mealSchema
    },
    onSubmit: async ({ value }) => {
      try {
        console.log("Meal Payload:", value);

        form.reset();
      } catch (error) {
        console.error("Create Meal Failed:", error);
      }
    },
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-5"
        >
          <FieldGroup>
            {/* Meal Name */}
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Meal Name</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      placeholder="Enter meal name"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Description */}
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      placeholder="Write meal description"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Price */}
            <form.Field
              name="price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Price (৳)</FieldLabel>
                    <Input
                      type="number"
                      id={field.name}
                      name={field.name}
                      placeholder="Enter price"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Thumbnail */}
            <form.Field
              name="thumbnail"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Thumbnail URL
                    </FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      placeholder="https://image-url.jpg"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Category Select (Dynamic from DB) */}
            <form.Field
              name="categoryId"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Category</FieldLabel>

                    <Select
                      value={field.state.value || ""}
                      onValueChange={(value) => field.handleChange(value)}
                    >
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>

                      <SelectContent>
                        {categories?.map((cat) => (
                          <SelectItem key={cat?.id} value={cat?.id}>
                            {cat?.cuisine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          {/* Submit Button with TanStack Subscribe */}
          <form.Subscribe selector={(state) => [state.isSubmitting]}>
            {([isSubmitting]) => (
              <Button
                type="submit"
                className="w-full text-lg mt-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Meal..." : "Add Meal"}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </div>
    </div>
  );
}
