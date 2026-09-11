"use client";

import { FormEvent, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const services = [
  "Massage Therapy",
  "Facial Treatment",
  "Body Treatment",
  "Ultimate Rituals",
  "Hair Treatments",
];

type ContactFormModalProps = {
  label: string;
  className: string;
};

export default function ContactFormModal({ label, className }: ContactFormModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("The enquiry form is not configured yet. Please call us directly.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New service enquiry - Angel's Touch Day Spa");
    formData.append("from_name", "Angel's Touch Day Spa website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeModal() {
    setOpen(false);
    setSubmitted(false);
    setSubmitting(false);
    setError("");
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && createPortal(
        (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-espresso/60 px-4 pb-6 pt-24 backdrop-blur-sm md:items-center md:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-form-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="relative z-[71] w-full max-w-md rounded-[1.25rem] bg-background p-4 shadow-2xl sm:p-5">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close contact form"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-text/60 transition-colors hover:bg-primary/30 hover:text-text"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="py-10 text-center">
                <p className="eyebrow mb-4">Thank You</p>
                <h2 id="contact-form-title" className="heading-md mb-4">Your enquiry is ready to send.</h2>
                <p className="body-text mb-8">Your email app should open with your service request prepared.</p>
                <button type="button" onClick={closeModal} className="btn-primary">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="eyebrow mb-2">Get In Touch</p>
                <h2 id="contact-form-title" className="mb-2 pr-8 font-heading text-2xl leading-tight text-text sm:text-3xl">Tell us how we can care for you.</h2>
                <p className="mb-3 font-body text-xs leading-relaxed text-text/70">Choose a service and share your preferred time. We&rsquo;ll be in touch to confirm.</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="font-body text-xs text-text">
                    Name
                    <input name="name" required className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                  </label>
                  <label className="font-body text-xs text-text">
                    Phone
                    <input name="phone" type="tel" required className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                  </label>
                  <label className="font-body text-xs text-text">
                    Email
                    <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                  </label>
                  <label className="font-body text-xs text-text">
                    Service
                    <select name="service" required defaultValue="" className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent">
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service}>{service}</option>)}
                    </select>
                  </label>
                  <label className="font-body text-xs text-text">
                    Preferred date <span className="text-text/45">(optional)</span>
                    <input name="date" type="date" className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                  </label>
                  <label className="font-body text-xs text-text">
                    Preferred time <span className="text-text/45">(optional)</span>
                    <input name="time" type="time" className="mt-1 w-full rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                  </label>
                </div>

                <label className="mt-2 block font-body text-xs text-text">
                  Message <span className="text-text/45">(optional)</span>
                  <textarea name="message" rows={2} className="mt-1 w-full resize-none rounded-lg border border-text/15 bg-secondary/40 px-3 py-2 text-sm outline-none transition-colors focus:border-accent" />
                </label>

                {error && <p role="alert" className="mt-3 text-center font-body text-xs text-red-700">{error}</p>}
                <button type="submit" disabled={submitting} className="btn-primary !py-3 mt-3 w-full disabled:cursor-wait disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
        ),
        document.body
      )}
    </>
  );
}