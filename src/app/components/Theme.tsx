'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

const Theme = () => {
  const { setTheme, systemTheme } = useTheme()

  const [enabled, setEnabled] = useState(systemTheme === 'light')
  const [mounted, setMounted] = useState(false)

  setTheme(enabled ? 'light' : 'dark')

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <Switch
      className="dark:bg-white"
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  )
}

export default Theme
