import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white text-center p-4 shadow-inner mt-10">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#92A8D1] hover:text-[#F7CAC9] transition text-xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#92A8D1] hover:text-[#F7CAC9] transition text-xl">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#92A8D1] hover:text-[#F7CAC9] transition text-xl">
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Monsoon. All rights reserved.</p>
    </footer>
  )
}
