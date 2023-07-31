'use client'

import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            className="h-10 w-10 rounded-full p-2 shadow-lg shadow-teal-400/20"
            onClick={scrollToTop}
          >
            <BsArrowUp size={16} className="font-bold" />
          </Button>
        </div>
      )}
    </>
  )
}

export default BackToTop
