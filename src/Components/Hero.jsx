import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#EAF0F6] to-white pt-20">
      <h1 className="text-5xl font-bold text-[#5D6D7E]">Hey, I'm Monsoon</h1>
      <p className="mt-4 text-xl text-[#4D4D4D] max-w-xl">
        A passionate learner & creative soul. Welcome to my digital space.
      </p>
      <Link to="/projects" className="mt-6 bg-[#92A8D1] text-white px-6 py-2 rounded-full hover:bg-[#F7CAC9] transition">
        Open me
      </Link>
    </section>
  )
}
