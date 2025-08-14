import {Button} from '@kubacovo-monorepo/ui-components'

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Your Name</h1>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>
      </header>

      <Button>Magick button</Button>
      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Welcome to my portfolio! I'm a passionate developer who loves creating
            amazing web applications and solving complex problems.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project 1</h3>
              <p className="text-gray-600 mb-4">Description of your first project.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">View Project →</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project 2</h3>
              <p className="text-gray-600 mb-4">Description of your second project.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">View Project →</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project 3</h3>
              <p className="text-gray-600 mb-4">Description of your third project.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">View Project →</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> your.email@example.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>GitHub:</strong> <a href="#" className="text-blue-600 hover:text-blue-800">github.com/yourusername</a>
            </p>
            <p className="text-gray-600">
              <strong>LinkedIn:</strong> <a href="#" className="text-blue-600 hover:text-blue-800">linkedin.com/in/yourprofile</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
