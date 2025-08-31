const LAYOUT_ADVANCED = {
  Container: {
    folder: 'layout',
    htmlElement: 'div',
    isLayoutComponent: true,
    layoutSpecificProps: `size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;`,
    defaultPropValues: `size = 'lg',
  padding = 'md',
  center = true,`,
    layoutLogic: `const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12',
  };`,
    baseClasses: 'w-full',
    classComposition: `\${sizeClasses[size]} \${paddingClasses[padding]} \${center ? 'mx-auto' : ''}`,
    argTypes: `size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    center: {
      control: { type: 'boolean' },
    },`,
    defaultArgs: `size: 'lg',
    padding: 'md',
    center: true,`,
    layoutDemonstrations: `<div className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium">Size Variations</label>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-ui-text-secondary">Small (max-w-sm)</span>
                <div className="bg-ui-border/20 p-1">
                  <Container size="sm" className="bg-ui-primary/10 p-4">
                    <div className="text-center">Small container content</div>
                  </Container>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs text-ui-text-secondary">Medium (max-w-md)</span>
                <div className="bg-ui-border/20 p-1">
                  <Container size="md" className="bg-ui-secondary/10 p-4">
                    <div className="text-center">Medium container content</div>
                  </Container>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs text-ui-text-secondary">Large (max-w-4xl)</span>
                <div className="bg-ui-border/20 p-1">
                  <Container size="lg" className="bg-ui-success/10 p-4">
                    <div className="text-center">Large container content</div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>`,
    mixedContentProps: `size="lg" padding="md"`,
    responsiveExamples: `<div className="space-y-4">
          <Container size="sm" className="bg-ui-primary/10 p-4 md:bg-ui-secondary/10">
            <div className="text-center">Responsive container: sm on mobile, changes color on md+</div>
          </Container>
          <Container size="lg" className="bg-ui-success/10 p-2 md:p-6">
            <div className="text-center">Different padding on mobile vs desktop</div>
          </Container>
        </div>`,
    themeSurfaceProps: `size="md" padding="sm"`,
    themeShowcaseProps: `size="lg" padding="md"`
  },
  Stack: {
    folder: 'layout',
    htmlElement: 'div',
    isLayoutComponent: true,
    layoutSpecificProps: `direction?: 'row' | 'column';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;`,
    defaultPropValues: `direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,`,
    layoutLogic: `const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
  };

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2', 
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center', 
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };`,
    baseClasses: 'flex',
    classComposition: `\${directionClasses[direction]} \${gapClasses[gap]} \${alignClasses[align]} \${justifyClasses[justify]} \${wrap ? 'flex-wrap' : ''}`,
    argTypes: `direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: {
      control: { type: 'boolean' },
    },`,
    defaultArgs: `direction: 'column',
    gap: 'md',`,
    layoutDemonstrations: `<div className="space-y-4">
          <label className="text-sm font-medium">Direction Variations</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Column (default)</span>
              <Stack direction="column" gap="sm">
                <DemoCard title="Item 1" />
                <DemoCard title="Item 2" />
                <DemoCard title="Item 3" />
              </Stack>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Row</span>
              <Stack direction="row" gap="sm">
                <DemoCard title="A" />
                <DemoCard title="B" />
                <DemoCard title="C" />
              </Stack>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <label className="text-sm font-medium">Gap Variations</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Small Gap</span>
              <Stack gap="sm">
                <DemoCard title="Compact" />
                <DemoCard title="Layout" />
              </Stack>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Medium Gap</span>
              <Stack gap="md">
                <DemoCard title="Standard" />
                <DemoCard title="Layout" />
              </Stack>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Large Gap</span>
              <Stack gap="lg">
                <DemoCard title="Spacious" />
                <DemoCard title="Layout" />
              </Stack>
            </div>
          </div>
        </div>`,
    mixedContentProps: `direction="column" gap="lg"`,
    responsiveExamples: `<Stack direction="column" gap="md" className="md:flex-row">
          <DemoCard title="Responsive Item 1" description="Stacks vertically on mobile, horizontally on desktop" />
          <DemoCard title="Responsive Item 2" description="Layout adapts to screen size automatically" />
          <DemoCard title="Responsive Item 3" description="Uses Tailwind responsive classes" />
        </Stack>`,
    themeSurfaceProps: `direction="row" gap="sm"`,
    themeShowcaseProps: `direction="column" gap="md"`
  },
  Grid: {
    folder: 'layout',
    htmlElement: 'div',
    isLayoutComponent: true,
    layoutSpecificProps: `columns?: number | 'auto-fit' | 'auto-fill';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  minItemWidth?: string;`,
    defaultPropValues: `columns = 'auto-fit',
  gap = 'md',
  minItemWidth = '200px',`,
    layoutLogic: `const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const gridTemplateColumns = typeof columns === 'number'
    ? \`repeat(\${columns}, 1fr)\`
    : columns === 'auto-fit'
    ? \`repeat(auto-fit, minmax(\${minItemWidth}, 1fr))\`
    : \`repeat(auto-fill, minmax(\${minItemWidth}, 1fr))\`;`,
    baseClasses: 'grid',
    classComposition: `\${gapClasses[gap]}`,
    argTypes: `columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 'auto-fit', 'auto-fill'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    minItemWidth: {
      control: { type: 'text' },
    },`,
    defaultArgs: `columns: 'auto-fit',
    gap: 'md',
    minItemWidth: '200px',`,
    layoutDemonstrations: `<div className="space-y-8">
          <div className="space-y-4">
            <label className="text-sm font-medium">Fixed Columns</label>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-ui-text-secondary">2 Columns</span>
                <Grid columns={2} gap="sm">
                  <div className="bg-ui-primary/20 p-4 rounded">Item 1</div>
                  <div className="bg-ui-secondary/20 p-4 rounded">Item 2</div>
                  <div className="bg-ui-success/20 p-4 rounded">Item 3</div>
                  <div className="bg-ui-warning/20 p-4 rounded">Item 4</div>
                </Grid>
              </div>
              <div className="space-y-2">
                <span className="text-xs text-ui-text-secondary">3 Columns</span>
                <Grid columns={3} gap="sm">
                  <div className="bg-ui-primary/20 p-4 rounded">Item 1</div>
                  <div className="bg-ui-secondary/20 p-4 rounded">Item 2</div>
                  <div className="bg-ui-success/20 p-4 rounded">Item 3</div>
                  <div className="bg-ui-warning/20 p-4 rounded">Item 4</div>
                  <div className="bg-ui-error/20 p-4 rounded">Item 5</div>
                  <div className="bg-ui-primary/20 p-4 rounded">Item 6</div>
                </Grid>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-medium">Auto-fit (responsive)</label>
            <div className="space-y-2">
              <span className="text-xs text-ui-text-secondary">Resize browser to see adaptation</span>
              <Grid columns="auto-fit" minItemWidth="150px" gap="md">
                <div className="bg-ui-primary/20 p-4 rounded">Responsive 1</div>
                <div className="bg-ui-secondary/20 p-4 rounded">Responsive 2</div>
                <div className="bg-ui-success/20 p-4 rounded">Responsive 3</div>
                <div className="bg-ui-warning/20 p-4 rounded">Responsive 4</div>
                <div className="bg-ui-error/20 p-4 rounded">Responsive 5</div>
              </Grid>
            </div>
          </div>
        </div>`,
    mixedContentProps: `columns="auto-fit" minItemWidth="250px" gap="lg"`,
    responsiveExamples: `<Grid columns="auto-fit" minItemWidth="200px" gap="md" className="md:gap-lg">
          <div className="bg-ui-primary/20 p-4 rounded">Responsive grid item</div>
          <div className="bg-ui-secondary/20 p-4 rounded">Adapts to screen size</div>
          <div className="bg-ui-success/20 p-4 rounded">Changes gap on larger screens</div>
          <div className="bg-ui-warning/20 p-4 rounded">Maintains min item width</div>
        </Grid>`,
    themeSurfaceProps: `columns={2} gap="sm"`,
    themeShowcaseProps: `columns="auto-fit" minItemWidth="180px" gap="md"`
  },
  Spacer: {
    folder: 'layout',
    htmlElement: 'div',
    isLayoutComponent: true,
    layoutSpecificProps: `size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  direction?: 'horizontal' | 'vertical';`,
    defaultPropValues: `size = 'md',
  direction = 'vertical',`,
    layoutLogic: `const sizeClasses = {
    horizontal: {
      xs: 'w-1',
      sm: 'w-2',
      md: 'w-4',
      lg: 'w-6',
      xl: 'w-8',
      '2xl': 'w-12',
      '3xl': 'w-16',
    },
    vertical: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-4',
      lg: 'h-6',
      xl: 'h-8',
      '2xl': 'h-12',
      '3xl': 'h-16',
    },
  };`,
    baseClasses: 'flex-shrink-0',
    classComposition: `\${sizeClasses[direction][size]}`,
    argTypes: `size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },`,
    defaultArgs: `size: 'md',
    direction: 'vertical',`,
    layoutDemonstrations: `<div className="space-y-8">
          <div className="space-y-4">
            <label className="text-sm font-medium">Vertical Spacing</label>
            <div className="space-y-4">
              <div className="border border-ui-border rounded p-4">
                <div className="bg-ui-primary/20 p-2 rounded">Element 1</div>
                <Spacer size="xs" direction="vertical" />
                <div className="bg-ui-secondary/20 p-2 rounded">Element 2 (xs spacer above)</div>
                <Spacer size="md" direction="vertical" />
                <div className="bg-ui-success/20 p-2 rounded">Element 3 (md spacer above)</div>
                <Spacer size="xl" direction="vertical" />
                <div className="bg-ui-warning/20 p-2 rounded">Element 4 (xl spacer above)</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-medium">Horizontal Spacing</label>
            <div className="border border-ui-border rounded p-4">
              <div className="flex items-center">
                <div className="bg-ui-primary/20 p-2 rounded">A</div>
                <Spacer size="xs" direction="horizontal" />
                <div className="bg-ui-secondary/20 p-2 rounded">B</div>
                <Spacer size="md" direction="horizontal" />
                <div className="bg-ui-success/20 p-2 rounded">C</div>
                <Spacer size="xl" direction="horizontal" />
                <div className="bg-ui-warning/20 p-2 rounded">D</div>
              </div>
            </div>
          </div>
        </div>`,
    mixedContentProps: `size="lg" direction="vertical"`,
    responsiveExamples: `<div className="space-y-4">
          <div className="bg-ui-primary/20 p-4 rounded">Content Block 1</div>
          <Spacer size="md" direction="vertical" className="md:h-8" />
          <div className="bg-ui-secondary/20 p-4 rounded">Content Block 2 (responsive spacer above)</div>
        </div>`,
    themeSurfaceProps: `size="sm" direction="vertical"`,
    themeShowcaseProps: `size="md" direction="vertical"`
  }
};

module.exports = { LAYOUT_ADVANCED };