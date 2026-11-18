"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

interface ContactUsProps {
  isDarkMode: boolean;
  onSubmit?: (values: ContactValues) => Promise<void>;
}

interface ContactValues {
  name: string;
  email: string;
  service: string;
  details: string;
}

type Errors = Partial<Record<keyof ContactValues, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const services = [
  "Custom web application",
  "Business system (HRIS, scoreboard, etc.)",
  "Website",
  "Mobile app",
  "Something else",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.details.trim()) {
    errors.details = "Tell us about your project.";
  } else if (values.details.trim().length < 10) {
    errors.details = "Add at least 10 characters.";
  }

  return errors;
}

export default function ContactUs({ isDarkMode, onSubmit }: ContactUsProps) {
  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    service: services[0],
    details: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const gold = isDarkMode ? "#d9bb63" : "#a98428";

  const sectionText = isDarkMode ? "text-[#eef1f7]" : "text-[#181f30]";

  const mutedText = isDarkMode ? "text-[#aab2c5]" : "text-[#667085]";

  const card = isDarkMode
    ? "bg-[#141b30] border-[#28334c]"
    : "bg-white border-[#e5e7eb]";

  const field = isDarkMode
    ? "bg-[#101729] border-[#303b54] text-[#eef1f7] placeholder:text-[#7c869d]"
    : "bg-[#f8f9fc] border-[#dfe3eb] text-[#181f30] placeholder:text-[#8a92a3]";

  const errorText = isDarkMode ? "text-[#ff9b9b]" : "text-[#b42318]";

  const errorBorder = isDarkMode ? "!border-[#ff9b9b]" : "!border-[#b42318]";

  const fieldClass = (hasError: boolean) =>
    `mt-2 w-full rounded-xl border px-4 py-3.5 text-sm transition-all
    focus:outline-none focus:ring-2 focus:ring-[#d9bb63]/50
    ${field} ${hasError ? errorBorder : ""}`;

  const update =
    (key: keyof ContactValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));

      if (errors[key]) {
        setErrors((prev) => ({
          ...prev,
          [key]: undefined,
        }));
      }

      if (status === "sent" || status === "error") {
        setStatus("idle");
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = (["name", "email", "details"] as const).find(
        (key) => found[key],
      );

      if (first) {
        document.getElementById(`contact-${first}`)?.focus();
      }

      return;
    }

    setStatus("sending");

    try {
      const payload: ContactValues = {
        name: values.name.trim(),
        email: values.email.trim(),
        service: values.service,
        details: values.details.trim(),
      };

      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // Demo only. Connect an API before using in production.
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setValues({
        name: "",
        email: "",
        service: services[0],
        details: "",
      });

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-us"
      className={`scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 ${sectionText}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span
            className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: gold }}
          >
            Let's work together
          </span>

          <h2
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            style={{
              color: isDarkMode ? "#eef1f7" : "#181f30",
            }}
          >
            Let's Build Something
            <span style={{ color: gold }}> Great.</span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base ${mutedText}`}
          >
            Have a project in mind? Tell us what you're looking for. We'd be
            happy to discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Main content */}
        <div
          className={`grid overflow-hidden rounded-3xl border shadow-sm md:grid-cols-[0.85fr_1.15fr] ${card}`}
        >
          {/* Left information panel */}
          <div
            className={`relative overflow-hidden p-7 sm:p-10 ${
              isDarkMode ? "bg-[#101729]" : "bg-[#f3f5f9]"
            }`}
          >
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.07] blur-3xl"
              style={{ backgroundColor: gold }}
            />

            <div className="relative z-10">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: gold }}
              >
                Get in touch
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
                Have an idea?
                <br />
                Let's talk about it.
              </h3>

              <p className={`mt-5 text-sm leading-7 ${mutedText}`}>
                Whether you need a business system, web application, or
                technical solution, we're ready to hear about your next project.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${gold}18`,
                      color: gold,
                    }}
                  >
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Email inquiry</p>
                    <p className={`mt-1 text-xs ${mutedText}`}>
                      Send us your project requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${gold}18`,
                      color: gold,
                    }}
                  >
                    <MessageSquare size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Project discussion</p>
                    <p className={`mt-1 text-xs ${mutedText}`}>
                      Let's understand your goals and requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-current/10 pt-6">
                <p className={`text-xs leading-6 ${mutedText}`}>
                  Tell us what you have in mind. The more details you provide,
                  the better we can understand your project.
                </p>
              </div>
            </div>
          </div>

          {/* Right contact form */}
          <div className="p-7 sm:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-bold">Send us a message</h3>

              <p className={`mt-2 text-sm ${mutedText}`}>
                Fill out the form and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={fieldClass(!!errors.name)}
                />

                {errors.name && (
                  <p
                    id="contact-name-error"
                    className={`mt-1.5 text-xs ${errorText}`}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={fieldClass(!!errors.email)}
                />

                {errors.email && (
                  <p
                    id="contact-email-error"
                    className={`mt-1.5 text-xs ${errorText}`}
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="text-sm font-semibold"
                >
                  What do you need?
                </label>

                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    value={values.service}
                    onChange={update("service")}
                    className={`${fieldClass(false)} cursor-pointer appearance-none pr-11`}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <label
                  htmlFor="contact-details"
                  className="text-sm font-semibold"
                >
                  Project details
                </label>

                <textarea
                  id="contact-details"
                  name="details"
                  rows={5}
                  placeholder="Tell us about your project, requirements, and goals..."
                  value={values.details}
                  onChange={update("details")}
                  aria-invalid={!!errors.details}
                  aria-describedby={
                    errors.details ? "contact-details-error" : undefined
                  }
                  className={`${fieldClass(!!errors.details)} min-h-36 resize-y`}
                />

                {errors.details && (
                  <p
                    id="contact-details-error"
                    className={`mt-1.5 text-xs ${errorText}`}
                  >
                    {errors.details}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bb63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                    isDarkMode
                      ? "bg-[#eef1f7] text-[#181f30] hover:bg-white"
                      : "bg-[#181f30] text-white hover:bg-[#252f49]"
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 min-h-6 text-center text-sm"
                >
                  {status === "sent" && (
                    <span
                      className="inline-flex items-center gap-2"
                      style={{ color: gold }}
                    >
                      <CheckCircle2 size={17} />
                      Message sent successfully. Thank you!
                    </span>
                  )}

                  {status === "error" && (
                    <span className={errorText}>
                      Your message could not be sent. Please try again.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <p className={`mt-8 text-center text-xs ${mutedText}`}>
          Every great project starts with a conversation.
        </p>
      </div>
    </section>
  );
}
