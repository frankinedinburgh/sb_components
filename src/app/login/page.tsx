"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  return (
    <>
      <p>{watch("email")}</p>
      <p>{watch("password")}</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <>
                <Form.Control
                  type="email"
                  onChange={onChange}
                  name={name}
                  value={value}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                {error && <pre>{JSON.stringify(error, null, 4)}</pre>}
              </>
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <Form.Control
                type="password"
                onChange={onChange}
                name={name}
                value={value}
                placeholder="Password"
              />
            )}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <DevTool control={control} />
    </>
  );
};

export default Login;
