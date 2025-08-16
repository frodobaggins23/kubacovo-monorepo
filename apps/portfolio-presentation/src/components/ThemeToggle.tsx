import { Button, useTheme } from '@kubacovo-monorepo/ui-components';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className='flex items-center gap-2'>
      <span className='text-ui-text-secondary text-sm'>Theme:</span>
      <div className='flex gap-1'>
        <Button
          size='sm'
          variant={theme === 'light' ? 'primary' : 'outline'}
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button
          size='sm'
          variant={theme === 'dark' ? 'primary' : 'outline'}
          onClick={() => setTheme('dark')}
        >
          Dark
        </Button>
        <Button
          size='sm'
          variant={theme === 'system' ? 'primary' : 'outline'}
          onClick={() => setTheme('system')}
        >
          System
        </Button>
      </div>
      <span className='text-ui-text-secondary text-xs'>({resolvedTheme})</span>
    </div>
  );
}
