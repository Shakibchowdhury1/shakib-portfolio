import { HugeiconsIcon } from '@hugeicons/react'

export default function Icon({ icon, size = 20, strokeWidth = 1.7, className = '' }) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
    />
  )
}
