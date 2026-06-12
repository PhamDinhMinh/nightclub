"use client";

import { Globe2, Mail, Map, MapPin, Phone, Send, Share2, Camera, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import type { AppMessages } from "@/types/i18n.types";

interface FeedbackScreenProps {
  messages: AppMessages;
}

const mapVisualImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0hUtUunWBcOcNgfh_OaQAkUGBTnfpr1q9TwFnXqSMR0lVWPufCPlcxH108IbiofX9yilzuhQepVE4waEopWH0aWW2hzGlbVcX9VDGQpsEri3JIcxUdvlf0c4dxTJip8Cmm_4GHuAsuVO5UquSS7hQiVvguotTT_OV2aYpDuAvh8DmAi5E7JTzqL06Gj81Yr7X1Q1z2bMP5KiyaVYHTP_jW5SvU3V8IiFBYByHvH8j7m267VRgEa62WIiJIvGDL0Ldg4YcW0YdGU";

const contactIcons = [MapPin, Phone, Mail];
const socialIcons = [Share2, Globe2, Camera];

type SubmitState = "idle" | "sending" | "success" | "error";

export const FeedbackScreen = ({ messages }: FeedbackScreenProps) => {
  const content = messages.screens.feedback;
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setSubmitState("success");
      form.reset();
      window.setTimeout(() => setSubmitState("idle"), 2200);
      return;
    }

    setSubmitState("error");
  };

  const submitLabel =
    submitState === "sending"
      ? content.sending
      : submitState === "success"
        ? content.success
        : content.submit;

  return (
    <>
      <main className="pt-32 pb-[120px]">
        <div className="mx-auto max-w-[1440px] px-8">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <section className="space-y-12 lg:col-span-5">
              <div className="space-y-4">
                <span className="text-secondary block text-sm font-semibold tracking-[0.2em] uppercase">
                  {content.eyebrow}
                </span>
                <h1 className="font-display text-[32px] leading-[1.2] font-bold md:text-5xl">
                  {content.title} <span className="text-primary">{content.highlightedTitle}</span>{" "}
                  {content.titleSuffix}
                </h1>
                <p className="text-muted-foreground max-w-md text-lg leading-[1.6]">
                  {content.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {content.contactCards.map((card, index) => {
                  const Icon = contactIcons[index] ?? MapPin;

                  return (
                    <div className="group flex items-start gap-6" key={card.title}>
                      <div className="glass-panel text-secondary group-hover:neon-glow-secondary flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold tracking-widest uppercase">
                          {card.title}
                        </h4>
                        <p className="text-muted-foreground leading-7">
                          {card.lines.map((line) => (
                            <span className="block" key={line}>
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 pt-8">
                {content.socialLabels.map((label, index) => {
                  const Icon = socialIcons[index] ?? Share2;

                  return (
                    <button
                      aria-label={label}
                      className="glass-panel hover:bg-primary/20 flex size-10 items-center justify-center rounded-full transition-all"
                      key={label}
                      type="button"
                    >
                      <Icon className="size-4" />
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="lg:col-span-7">
              <div className="glass-panel relative overflow-hidden rounded-3xl p-8 md:p-12">
                <div className="bg-primary/20 absolute -top-24 -right-24 size-64 rounded-full blur-[100px]" />
                <div className="bg-secondary/10 absolute -bottom-24 -left-24 size-64 rounded-full blur-[100px]" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="font-display mb-2 text-[32px] leading-[1.3] font-semibold">
                      {content.formTitle}
                    </h2>
                    <p className="text-muted-foreground">{content.formDescription}</p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField label={content.fields.name}>
                        <input
                          className="feedback-input"
                          name="name"
                          placeholder={content.placeholders.name}
                          type="text"
                        />
                      </FormField>
                      <FormField label={content.fields.email}>
                        <input
                          className="feedback-input"
                          name="email"
                          placeholder={content.placeholders.email}
                          type="email"
                        />
                      </FormField>
                    </div>

                    <FormField label={content.fields.subject}>
                      <select className="feedback-input appearance-none" name="subject" required>
                        {content.subjects.map((subject) => (
                          <option key={subject.value} value={subject.label}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label={content.fields.message}>
                      <textarea
                        className="feedback-input resize-none"
                        name="message"
                        placeholder={content.placeholders.message}
                        required
                        rows={5}
                      />
                    </FormField>

                    {submitState === "error" && (
                      <p className="text-destructive text-sm font-semibold">{content.error}</p>
                    )}

                    <Button
                      className="neon-glow-primary h-auto w-full rounded-xl px-10 py-5 text-lg font-semibold md:w-auto"
                      disabled={submitState === "sending"}
                      type="submit"
                    >
                      {submitState === "success" ? (
                        <CheckCircle2 className="size-5" />
                      ) : (
                        <Send className="size-5" />
                      )}
                      {submitLabel}
                    </Button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <section className="relative mb-[120px] h-96 w-full overflow-hidden [clip-path:polygon(0_0,100%_5%,100%_100%,0_95%)]">
        <div className="bg-muted absolute inset-0">
          <img
            alt={content.mapImageAlt}
            className="h-full w-full object-cover opacity-40 grayscale"
            src={mapVisualImage}
          />
          <div className="from-background to-background absolute inset-0 bg-gradient-to-t via-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="text-center">
            <div className="glass-panel text-secondary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <Map className="size-4" />
              <span className="text-sm font-semibold tracking-widest uppercase">
                {content.mapBadge}
              </span>
            </div>
            <h3 className="font-display text-4xl font-bold text-white md:text-5xl">
              {content.mapTitle}{" "}
              <span className="text-secondary">{content.mapHighlightedTitle}</span>
            </h3>
          </div>
        </div>
      </section>

      <LandingFooter content={messages.landing.footer} navigation={messages.navigation} />
    </>
  );
};

const FormField = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <label className="space-y-2">
      <span className="text-muted-foreground ml-1 block text-sm font-semibold tracking-widest uppercase">
        {label}
      </span>
      {children}
    </label>
  );
};
