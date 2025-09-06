"use client";

import { mailchimp, newsletter } from "@/resources";
import {
  Button,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Row,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  /* ───────────────────────────────── state ───────────────────────────────── */
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ─────────────────────────── helpers & validation ───────────────────────── */
  const validateEmail = (v: string) =>
    v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setEmail(v);
    setError(v && !validateEmail(v) ? "Please enter a valid email address." : "");
  };

  /* ───────────────────────── submit (optimistic UI) ───────────────────────── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    /* show “Thanks” instantly */
    setSubmitted(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxtaO9FNrMmGZXjidfQZJRUJdZyoGl4C2e2RByJvXVjpLybfWKkxdSVpdP3gJgPk1aB/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `email=${encodeURIComponent(email)}`,
        }
      );
    } catch {
      /* optional rollback if needed
         setSubmitted(false);
         setError("Submission failed. Please try again.");
      */
    }

    setEmail(""); // clear the field for next time
  };

  if (!newsletter.display) return null;

  /* ────────────────────────────── UI ────────────────────────────── */
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{ ...mailchimp.effects.mask }}
        gradient={{
          ...mailchimp.effects.gradient,
          opacity: mailchimp.effects.gradient.opacity as opacity,
        }}
        dots={{
          ...mailchimp.effects.dots,
          size: "m",
          opacity: mailchimp.effects.dots.opacity as opacity,
        }}
        grid={{
          ...mailchimp.effects.grid,
          opacity: mailchimp.effects.grid.opacity as opacity,
        }}
        lines={{
          ...mailchimp.effects.lines,
          size: "m",
          opacity: mailchimp.effects.lines.opacity as opacity,
        }}
      />

      {/* headline */}
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text
          wrap="balance"
          marginBottom="l"
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          {newsletter.description}
        </Text>
      </Column>

      {/* form  ⇄  thank-you */}
      {submitted ? (
        <Text
          variant="body-default-l"
          style={{
            color: "#2e7d32",
            marginTop: "12px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          ✓ Thanks&nbsp;for&nbsp;subscribing!
        </Text>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          id="newsletter-subscribe-form"
          name="newsletter-subscribe-form"
        >
          <Row
            id="newsletter_signup_scroll"
            fillWidth
            maxWidth={24}
            s={{ direction: "column" }}
            gap="8"
          >
            <Input
              formNoValidate
              id="newsletter-EMAIL"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleChange}
              errorMessage={error}
            />

            <div className="clear">
              <Row height="48" vertical="center">
                <Button type="submit" size="m" fillWidth>
                  Subscribe
                </Button>
              </Row>
            </div>
          </Row>
        </form>
      )}
    </Column>
  );
};
