import { Button } from '@kubacovo-monorepo/ui-components';
import { ThemeToggle } from '../components/ThemeToggle';

export function App() {
  return (
    <div className='min-h-screen bg-ui-background transition-colors'>
      <header className='bg-ui-surface shadow-sm border-b border-ui-border'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div>
            <h1 className='text-2xl font-bold text-ui-text-primary'>
              Your Name
            </h1>
            <p className='text-ui-text-secondary'>Full Stack Developer</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* UI Components Test */}
      <section className='container mx-auto px-6 py-8'>
        <div className='bg-ui-surface rounded-lg shadow-sm p-6 mb-8 border border-ui-border'>
          <h2 className='text-xl font-bold text-ui-text-primary mb-4'>
            Button Variants
          </h2>
          <div className='flex flex-wrap gap-3 mb-4'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='danger'>Danger</Button>
            <Button variant='outline'>Outline</Button>
          </div>
          <div className='flex flex-wrap gap-3 items-center'>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
          </div>
        </div>
      </section>

      <main className='container mx-auto px-6 py-12'>
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-ui-text-primary mb-6'>
            About Me
          </h2>
          <p className='text-lg text-ui-text-secondary leading-relaxed max-w-3xl'>
            Welcome to my portfolio! I'm a passionate developer who loves
            creating amazing web applications and solving complex problems. This
            portfolio demonstrates our new dark mode theming system.
          </p>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-ui-text-primary mb-6'>
            Projects
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-ui-surface rounded-lg shadow-md p-6 border border-ui-border'>
              <h3 className='text-xl font-semibold text-ui-text-primary mb-3'>
                UI Components Library
              </h3>
              <p className='text-ui-text-secondary mb-4'>
                A React component library with full dark mode support and theme
                switching.
              </p>
              <Button variant='outline' size='sm'>
                View Project →
              </Button>
            </div>
            <div className='bg-ui-surface rounded-lg shadow-md p-6 border border-ui-border'>
              <h3 className='text-xl font-semibold text-ui-text-primary mb-3'>
                Portfolio Website
              </h3>
              <p className='text-ui-text-secondary mb-4'>
                This very website, built with React and our custom theming
                system.
              </p>
              <Button variant='outline' size='sm'>
                View Project →
              </Button>
            </div>
            <div className='bg-ui-surface rounded-lg shadow-md p-6 border border-ui-border'>
              <h3 className='text-xl font-semibold text-ui-text-primary mb-3'>
                Theme System
              </h3>
              <p className='text-ui-text-secondary mb-4'>
                CSS-based theming with automatic system preference detection.
              </p>
              <Button variant='outline' size='sm'>
                View Project →
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-ui-text-primary mb-6'>
            Contact
          </h2>
          <div className='bg-ui-surface rounded-lg shadow-md p-6 max-w-md border border-ui-border'>
            <p className='text-ui-text-secondary mb-2'>
              <strong className='text-ui-text-primary'>Email:</strong>{' '}
              your.email@example.com
            </p>
            <p className='text-ui-text-secondary mb-2'>
              <strong className='text-ui-text-primary'>GitHub:</strong>{' '}
              <a
                href='#'
                className='text-ui-primary hover:opacity-80 transition-opacity'
              >
                github.com/yourusername
              </a>
            </p>
            <p className='text-ui-text-secondary'>
              <strong className='text-ui-text-primary'>LinkedIn:</strong>{' '}
              <a
                href='#'
                className='text-ui-primary hover:opacity-80 transition-opacity'
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className='bg-ui-surface border-t border-ui-border text-ui-text-secondary text-center py-6 mt-16'>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
