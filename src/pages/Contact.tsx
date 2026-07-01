import { useState, type FormEvent } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/content";

const fieldClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-body outline-none transition-colors focus:border-botanical focus:ring-2 focus:ring-botanical/20";

function ContactForm() {
  const { form } = contact;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend yet — wiring `form.endpoint` (e.g. Formspree) comes later.
    setSent(true);
  };

  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <SectionHeading title={form.heading} align="center" className="mx-auto" />
        {sent ? (
          <Card className="mt-8 text-center">
            <p className="font-heading text-h3 text-cocoa">Thanks for reaching out!</p>
            <p className="mt-2 text-charcoal/70">
              We've received your message and will be in touch soon.
            </p>
          </Card>
        ) : (
          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <input className={fieldClass} placeholder="Name" required />
            <input className={fieldClass} type="email" placeholder="Email" required />
            <select className={fieldClass} defaultValue="">
              <option value="" disabled>
                Hair texture
              </option>
              {form.textureOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <textarea className={fieldClass} rows={5} placeholder="Message" required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}

function TrustAnchor() {
  const { trust } = contact;
  return (
    <Section bg="white">
      <div className="grid items-center gap-10 tablet:grid-cols-[280px_1fr]">
        <ImageFrame
          src={trust.founderPhoto}
          alt="Out of Many Beauty founder"
          ratio="aspect-[4/5]"
          className="mx-auto w-full max-w-[280px]"
        />
        <div>
          <SectionHeading title={trust.heading} />
          <p className="mt-6 text-lg italic text-charcoal/80">"{trust.missionSnippet}"</p>
          <p className="mt-6 text-charcoal/70">{trust.note}</p>
        </div>
      </div>
    </Section>
  );
}

export default function Contact() {
  return (
    <>
      <ContactForm />
      <TrustAnchor />
    </>
  );
}
