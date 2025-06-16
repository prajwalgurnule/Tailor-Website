import { useState, useEffect } from 'react'
import './ScrollToTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`} 
      aria-label="Scroll to top" 
      title="Scroll to top" 
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon fontSize="medium" />
    </button>
  )
}

export default ScrollToTop