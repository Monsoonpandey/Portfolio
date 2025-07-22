export default function Projects() {
  return (
    <div className="min-h-screen pt-20 p-6 bg-[#F2F6FC]">
      <h2 className="text-3xl font-bold text-[#92A8D1] text-center">Projects</h2>
      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-[#5D6D7E]">Portfolio Website</h3>
          <p className="text-gray-600 mt-2">Built using React, Tailwind, and Vite. Responsive and smooth with soft pastel vibes.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-[#5D6D7E]">Music Diary</h3>
          <p className="text-gray-600 mt-2">Personal music blog inspired by SEVENTEEN and my creative cover projects.</p>
        </div>
      </div>
    </div>
  )
}
