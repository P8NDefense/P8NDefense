interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1 max-w-8 bg-[#b8960c] opacity-60" />
      <span
        className="text-xs font-medium tracking-[0.25em] uppercase text-[#b8960c]"
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui, sans-serif' }}
      >
        {text}
      </span>
      <div className="h-px flex-1 max-w-8 bg-[#b8960c] opacity-60" />
    </div>
  )
}
