
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { createBrowserClient } from '@/lib/supabase'

// Chips for interests
const INTERESTS = [
  '1 on 1 Coaching',
  'Group Sessions',
  'Customized Coaching',
  'Public Speaking & Presentation Skills',
  'Corporate / Organizational Program',
  'Personality Development Workshop',
  'Confidence Building',
  'Conflict Resolution / Emotional Intelligence',
  'Personal Branding & Charisma',
]

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      full_name: (data.get('full_name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      phone: (data.get('phone') as string)?.trim() || null,
      role: (data.get('role') as string)?.trim() || null,
      organization: (data.get('organization') as string)?.trim() || null,
      who_are_you: (data.get('who_are_you') as string) as 'Individual' | 'Team' | 'Organization',
      interests: Array.from(data.getAll('interests')) as string[],
      preferred_format: (data.get('preferred_format') as string) as 'In-person' | 'Virtual' | 'Hybrid',
      city_or_venue: (data.get('city_or_venue') as string)?.trim() || null,
      timeline: (data.get('timeline') as string) as 'ASAP' | 'This Month' | 'This Quarter' | 'Specific date',
      date_notes: (data.get('date_notes') as string)?.trim() || null,
      message: (data.get('message') as string)?.trim() || null,
      source: (data.get('source') as string)?.trim() || null,
    }

    // Basic guard
    if (!payload.full_name || !payload.email) {
      setError('Please provide your name and a valid email address.')
      setLoading(false)
      return
    }

    try {
      const supabase = createBrowserClient()
      const { error: insertError } = await supabase.from('register-trupti').insert({
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        role: payload.role,
        organization: payload.organization,
        who_are_you: payload.who_are_you,
        interests: payload.interests, // stored as array
        preferred_format: payload.preferred_format,
        city_or_venue: payload.city_or_venue,
        timeline: payload.timeline,
        date_notes: payload.date_notes,
        message: payload.message,
        source: payload.source,
      })

      if (insertError) throw insertError

      setSuccess('Thank you! We\'ll get back to you shortly.')
      form.reset()
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full bg-white mt-18">
      {/* Top eyebrow + headline */}
      <div className="pl-6 sm:pl-10 lg:pl-20 pt-10 sm:pt-12">
        <p className="text-sm font-semibold tracking-wide text-zinc-600">Get In Touch</p>
        <h2 className="mt-2 max-w-[20ch] text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Let’s Connect and Create Impact Together
        </h2>
      </div>

      {/* Content area: left margin only; image sticks to right edge */}
      <div className="relative mt-10 grid min-h-[560px] w-full grid-cols-1 pl-6 sm:pl-10 lg:pl-20">
        {/* Form card */}
        <div className="z-10 mb-16 w-full max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h3 className="text-xl font-semibold text-zinc-900">Contact Us</h3>
          <p className="mt-1 text-sm text-zinc-600">
            We’re here to help you every step of the way. Contact us for guidance.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Full Name" name="full_name" required />
              <Input label="Email Address" type="email" name="email" required />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Phone (optional)" name="phone" />
              <Input label="Role / Title" name="role" />
            </div>

            <Input label="Organization (if applicable)" name="organization" />

            <RadioRow
              name="who_are_you"
              label="I’m reaching out as"
              options={[
                { label: 'Individual', value: 'Individual' },
                { label: 'Team', value: 'Team' },
                { label: 'Organization', value: 'Organization' },
              ]}
              required
            />

            <CheckboxChips name="interests" label="I’m interested in" options={INTERESTS} />

            <RadioRow
              name="preferred_format"
              label="Preferred format"
              options={[
                { label: 'In-person', value: 'In-person' },
                { label: 'Virtual', value: 'Virtual' },
                { label: 'Hybrid', value: 'Hybrid' },
              ]}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="City / Venue" name="city_or_venue" />
              <Select
                label="Timeline"
                name="timeline"
                options={[
                  'ASAP',
                  'This Month',
                  'This Quarter',
                  'Specific date',
                ]}
              />
            </div>

            <Input label="If specific date, share details" name="date_notes" />

            <Textarea label="Message" name="message" rows={4} />

            <Select
              label="How did you hear about us?"
              name="source"
              options={[
                'Search',
                'Social Media',
                'Referral',
                'Event / Talk',
                'Other',
              ]}
            />

            {/* Alerts */}
            {success && (
              <p className="rounded-md bg-green-50 p-3 text-sm text-green-700">{success}</p>
            )}
            {error && (
              <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-[#7C4BA2] px-5 py-3 text-sm font-semibold text-white shadow-md transition will-change-transform hover:shadow-lg disabled:opacity-60"
            >
              {loading ? 'Submitting…' : 'SUBMIT'}
            </button>
          </form>
        </div>

        {/* Right image (desktop only) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] md:block">
          <Image
            src="/contact-image.png"
            alt="Trupti portrait"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0vw"
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </section>
  )
}

/* --------------------------- UI primitives --------------------------- */
function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-xs font-medium text-zinc-700">
      {children}
    </label>
  )
}

function Input({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = name
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-[#7C4BA2] focus:shadow-[0_0_0_3px_rgba(124,75,162,0.15)]"
      />
    </div>
  )
}

function Textarea({ label, name, rows = 4 }: { label: string; name: string; rows?: number }) {
  const id = name
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="mt-1 w-full resize-none rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#7C4BA2] focus:shadow-[0_0_0_3px_rgba(124,75,162,0.15)]"
      />
    </div>
  )
}

function RadioRow({
  name,
  label,
  options,
  required = false,
}: {
  name: string
  label: string
  options: { label: string; value: string }[]
  required?: boolean
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="inline-flex items-center gap-2 text-sm text-zinc-700">
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              className="h-4 w-4 border-zinc-300 text-[#7C4BA2] focus:ring-[#7C4BA2]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}

function CheckboxChips({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="cursor-pointer select-none rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-700 transition hover:border-[#7C4BA2] hover:text-zinc-900"
          >
            <input type="checkbox" name={name} value={opt} className="peer sr-only" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  )
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  const id = name
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        name={name}
        className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#7C4BA2] focus:shadow-[0_0_0_3px_rgba(124,75,162,0.15)]"
      >
        <option value="" disabled selected>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}


