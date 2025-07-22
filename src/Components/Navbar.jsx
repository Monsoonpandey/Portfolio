import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const linkClass = (path) =>
    `hover:text-[#AEC6CF] transition duration-300 ${location.pathname === path ? 'text-[#F7CAC9] font-semibold' : ''}`

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-20">
      <h1 className="text-2xl font-bold text-[#92A8D1]">Moonfolio</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  )
}
