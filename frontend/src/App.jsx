import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Invitation from './pages/Invitation'
import RSVP from './pages/RSVP'
import Gallery from './pages/Gallery'
import Upload from './pages/Upload'
import Admin from './pages/Admin'
import GlobalAudioPlayer from './components/GlobalAudioPlayer'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    resetScroll()
    window.addEventListener('pageshow', resetScroll)

    return () => {
      window.removeEventListener('pageshow', resetScroll)
    }
  }, [])

  return null
}

function App() {
  return (
    <Router>
      <GlobalAudioPlayer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
