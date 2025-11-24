'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://jxozwbhpvxpqxxsoumse.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4b3p3YmhwdnhwcXh4c291bXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTY1NDQsImV4cCI6MjA3OTU3MjU0NH0.Tdw_TLVIgZo8k_461dNHe4BjYVBM9RpPeMDyqmOEwTI"
)

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

type FormState = {
  loading: boolean
  success: string | null
  error: string | null
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: null,
    error: null,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState({ loading: true, success: null, error: null })

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      full_name: (formData.get('full_name') as string)?.trim() || '',
      email: (formData.get('email') as string)?.trim() || '',
      phone: (formData.get('phone') as string)?.trim() || null,
      role: (formData.get('role') as string)?.trim() || null,
      organization: (formData.get('organization') as string)?.trim() || null,
      who_are_you: (formData.get('who_are_you') as string) || null,
      interests: Array.from(formData.getAll('interests')) as string[],
      city_or_venue: (formData.get('city_or_venue') as string)?.trim() || null,
      date_notes: (formData.get('date_notes') as string)?.trim() || null,
      message: (formData.get('message') as string)?.trim() || null,
      source: (formData.get('source') as string)?.trim() || null,
    }

    if (!payload.full_name || !payload.email) {
      setFormState({
        loading: false,
        success: null,
        error: 'Please provide your name and a valid email address.',
      })
      return
    }

    try {
      const { error: insertError } = await supabase
        .from('register_trupti')
        .insert(payload)

      if (insertError) throw insertError

      setFormState({
        loading: false,
        success: "Thank you! We'll get back to you shortly.",
        error: null,
      })
      form.reset()
    } catch (err: any) {
      setFormState({
        loading: false,
        success: null,
        error: err.message ?? 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <section className="relative w-full bg-white mt-18">
      {/* Header */}
      <div className="pl-6 sm:pl-10 lg:pl-20 pt-10 sm:pt-12">
        <p className="text-sm font-semibold tracking-wide text-zinc-600">
          Get In Touch
        </p>
        <h2 className="mt-2 max-w-[20ch] text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Let's Connect and Create Impact Together
        </h2>
      </div>

      {/* Content Area */}
      <div className="relative mt-10 grid min-h-[560px] w-full grid-cols-1 pl-6 sm:pl-10 lg:pl-20">
        {/* Form Card */}
        <div className="z-10 mb-16 w-full max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h3 className="text-xl font-semibold text-zinc-900">Contact Us</h3>
          <p className="mt-1 text-sm text-zinc-600">
            We're here to help you every step of the way.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInput
                label="Full Name"
                name="full_name"
                type="text"
                required
              />
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                required
              />
            </div>

            {/* Phone & Role */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInput label="Phone (optional)" name="phone" type="tel" />
              <FormInput label="Role / Title" name="role" type="text" />
            </div>

            {/* Organization */}
            <FormInput
              label="Organization (if applicable)"
              name="organization"
              type="text"
            />

            {/* Who Are You */}
            <RadioGroup
              name="who_are_you"
              label="I'm reaching out as"
              options={[
                { label: 'Individual', value: 'Individual' },
                { label: 'Team', value: 'Team' },
                { label: 'Organization', value: 'Organization' },
              ]}
              required
            />

            {/* Interests */}
            <CheckboxGroup
              name="interests"
              label="I'm interested in"
              options={INTERESTS}
            />

            {/* City/Venue */}
            <FormInput label="City / Venue" name="city_or_venue" type="text" />

            {/* Date Notes */}
            <FormInput
              label="If specific date, share details"
              name="date_notes"
              type="text"
            />

            {/* Message */}
            <FormTextarea label="Message" name="message" rows={4} />

            {/* Source */}
            <FormSelect
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

            {/* Success/Error Messages */}
            {formState.success && (
              <div className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-700">
                {formState.success}
              </div>
            )}
            {formState.error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {formState.error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState.loading}
              className="inline-flex items-center justify-center rounded-full bg-[#7C4BA2] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#6a3f8f] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState.loading ? 'Submitting…' : 'SUBMIT'}
            </button>
          </form>
        </div>

        {/* Right Image (Desktop) */}
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

/* ==================== Form Components ==================== */

interface FormInputProps {
  label: string
  name: string
  type?: string
  required?: boolean
}

function FormInput({ label, name, type = 'text', required = false }: FormInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-zinc-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all duration-200 outline-none focus:border-[#7C4BA2] focus:ring-2 focus:ring-[#7C4BA2]/20"
      />
    </div>
  )
}

interface FormTextareaProps {
  label: string
  name: string
  rows?: number
}

function FormTextarea({ label, name, rows = 4 }: FormTextareaProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-zinc-700"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="w-full resize-none rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all duration-200 outline-none focus:border-[#7C4BA2] focus:ring-2 focus:ring-[#7C4BA2]/20"
      />
    </div>
  )
}

interface RadioOption {
  label: string
  value: string
}

interface RadioGroupProps {
  name: string
  label: string
  options: RadioOption[]
  required?: boolean
}

function RadioGroup({ name, label, options, required = false }: RadioGroupProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-medium text-zinc-700">
        {label}
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="group inline-flex cursor-pointer items-center gap-2.5 text-sm text-zinc-900 transition-colors hover:text-[#7C4BA2]"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              required={required}
              className="h-4 w-4 cursor-pointer border-zinc-300 text-[#7C4BA2] transition-all focus:ring-2 focus:ring-[#7C4BA2]/30"
            />
            <span className="font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

interface CheckboxGroupProps {
  name: string
  label: string
  options: string[]
}

function CheckboxGroup({ name, label, options }: CheckboxGroupProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-medium text-zinc-700">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="group relative cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              className="peer sr-only"
            />
            <span className="inline-block rounded-full border-2 border-zinc-300 bg-white px-4 py-2 text-xs font-medium text-zinc-900 transition-all duration-200 peer-checked:border-[#7C4BA2] peer-checked:bg-[#7C4BA2]/5 peer-checked:text-[#7C4BA2] hover:border-zinc-400 peer-checked:hover:border-[#6a3f8f]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

interface FormSelectProps {
  label: string
  name: string
  options: string[]
}

function FormSelect({ label, name, options }: FormSelectProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-zinc-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full cursor-pointer rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 transition-all duration-200 outline-none focus:border-[#7C4BA2] focus:ring-2 focus:ring-[#7C4BA2]/20"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}