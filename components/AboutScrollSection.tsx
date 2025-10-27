'use client'

import React from 'react'

/**
 * AboutSectionStatic.tsx
 * Clean, **no-scroll-animations** implementation matching your screenshots.
 * - Centered intro block with big type
 * - "Why I Do What I Do" with purple underline
 * - "My Approach" heading on the left, bullets on the right with separators
 * - "Beyond the Stage" with the same heading treatment
 * - Responsive sizing to fill space on desktop
 */
export default function AboutSectionStatic() {
  return (
    <section className="w-full bg-white text-zinc-900">
      <IntroBlock />
      <WhyBlock />
      <ApproachBlock />
      <BeyondBlock />
    </section>
  )
}

/* ------------------------------- Intro ------------------------------- */
function IntroBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xl leading-8 text-zinc-700 md:text-2xl md:leading-9 lg:text-[28px] lg:leading-[2.2rem]">
          I’m <span className="font-semibold text-zinc-900">Trupti</span> , a communication coach & speaker helping
          professionals find their voice, lead with impact, and win every room.
        </p>
        <p className="mt-6 text-xl leading-8 text-zinc-700 md:text-2xl md:leading-9 lg:text-[28px] lg:leading-[2.2rem]">
          I help you transform how you speak, so every word leaves an <span className="font-semibold">impact</span>.
          Because <span className="font-semibold">confident communication</span> changes everything.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------- Why ------------------------------- */
function WhyBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 md:py-20">
      <HeadingWithUnderline title="Why I Do What I Do" />
      <p className="mt-6 max-w-6xl  text-lg leading-7 text-zinc-700 md:text-2xl text-center md:leading-8">
        Growing up, I realized that talent alone doesn’t open doors—how you express it does. Over the years I’ve combined my background in leadership, psychology, and corporate training with proven communication strategies to help people like you be heard, respected, and remembered.
      </p>
    </section>
  )
}

/* ------------------------------ Approach ----------------------------- */
function ApproachBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-12">
        <div className="sm:col-span-2">
          <HeadingWithUnderline title="My Approach" accentWidth="w-40" />
        </div>
        <div className="sm:col-span-3">
          <Bullet line>
            <span className="text-zinc-900">•</span> <span className="ml-3 text-lg sm:text-lg md:text-2xl">Practical tools, <span className="font-semibold text-lg sm:text-lg md:text-2xl">not just theory</span></span>
          </Bullet>
          <Separator />
          <Bullet line>
            <span className="text-zinc-900">•</span>{' '}
            <span className="ml-3 text-lg sm:text-lg md:text-2xl">Real‑world strategies you can <span className="font-semibold text-lg sm:text-lg md:text-2xl">apply immediately</span></span>
          </Bullet>
          <Separator />
          <Bullet>
            <span className="text-zinc-900">•</span>{' '}
            <span className="ml-3 text-lg sm:text-lg md:text-2xl">A mix of <span className="font-semibold text-lg sm:text-lg md:text-2xl">coaching</span>, storytelling, and mindset shifts</span>
          </Bullet>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------- Beyond ------------------------------ */
function BeyondBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 md:py-20">
      <HeadingWithUnderline title="Beyond the Stage" accentWidth="w-44" />
      <p className="mt-6 max-w-5xl text-base leading-7 text-zinc-700 md:text-2xl md:leading-8">
        When I’m not coaching or speaking, you’ll find me reading, traveling, or enjoying coffee conversations. I
        believe communication isn’t just about success—it’s about connection.
      </p>
    </section>
  )
}

/* ------------------------------ Helpers ------------------------------ */
function HeadingWithUnderline({
  title,
  accentWidth = 'w-48'
}: {
  title: string
  accentWidth?: string
}) {
  return (
    <div className="relative">
      <h2 className="text-[28px] font-semibold tracking-tight text-zinc-900 md:text-[34px]">{title}</h2>
      <div className={`mt-2 h-[3px] rounded-full bg-violet-600 ${accentWidth}`} />
    </div>
  )
}

function Bullet({ children, line = false }: { children: React.ReactNode; line?: boolean }) {
  return (
    <div className="py-4 text-[15px] leading-7 text-zinc-700 md:text-base">
      {children}
    </div>
  )
}

function Separator() {
  return <div className="h-px w-full bg-zinc-200" />
}
