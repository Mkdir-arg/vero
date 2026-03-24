import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Invitation from './pages/Invitation'
import RSVP from './pages/RSVP'
import Gallery from './pages/Gallery'
import Upload from './pages/Upload'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
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
