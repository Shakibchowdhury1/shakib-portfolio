import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-aqua">
        <span className="h-px w-8 bg-aqua/60" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">{copy}</p>}
    </Reveal>
  )
}
