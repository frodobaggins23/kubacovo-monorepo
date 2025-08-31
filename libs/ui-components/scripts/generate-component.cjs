#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load component presets from separate files
const { PRIMITIVES } = require('./presets/primitives.cjs');
const { FORMS } = require('./presets/forms.cjs');
const { LAYOUT } = require('./presets/layout.cjs');
const { LAYOUT_ADVANCED } = require('./presets/layout-advanced.cjs');
const { FEEDBACK } = require('./presets/feedback.cjs');
const { COMPONENT_SPECIFICS } = require('./presets/component-specifics.cjs');

// Component category mappings
const CATEGORY_TITLES = {
  primitives: '01. Primitives',
  layout: '02. Layout', 
  forms: '03. Forms',
  feedback: '04. Feedback',
  navigation: '05. Navigation',
  'data-display': '06. Data Display'
};

// Combine all component presets
const COMPONENT_PRESETS = {
  ...PRIMITIVES,
  ...FORMS,
  ...LAYOUT,
  ...LAYOUT_ADVANCED,
  ...FEEDBACK
};

function generateComponent(componentName) {
  const preset = COMPONENT_PRESETS[componentName];
  if (!preset) {
    console.error(`No preset found for component: ${componentName}`);
    console.log(`Available presets: ${Object.keys(COMPONENT_PRESETS).join(', ')}`);
    process.exit(1);
  }

  const componentDir = path.join(__dirname, '..', 'src', 'lib', preset.folder, componentName);
  const templatesDir = path.join(__dirname, 'templates');

  // Create component directory
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Template substitution function
  function processTemplate(template, data) {
    return template
      .replace(/\{\{ComponentName\}\}/g, data.ComponentName)
      .replace(/\{\{htmlElement\}\}/g, data.htmlElement)
      .replace(/\{\{baseClasses\}\}/g, data.baseClasses)
      .replace(/\{\{categoryTitle\}\}/g, data.categoryTitle)
      // Layout-specific replacements
      .replace(/\{\{layoutSpecificProps\}\}/g, data.layoutSpecificProps || '')
      .replace(/\{\{defaultPropValues\}\}/g, data.defaultPropValues || '')
      .replace(/\{\{layoutLogic\}\}/g, data.layoutLogic || '')
      .replace(/\{\{classComposition\}\}/g, data.classComposition || '')
      .replace(/\{\{argTypes\}\}/g, data.argTypes || '')
      .replace(/\{\{defaultArgs\}\}/g, data.defaultArgs || '')
      .replace(/\{\{layoutDemonstrations\}\}/g, data.layoutDemonstrations || '')
      .replace(/\{\{mixedContentProps\}\}/g, data.mixedContentProps || '')
      .replace(/\{\{responsiveExamples\}\}/g, data.responsiveExamples || '')
      .replace(/\{\{themeSurfaceProps\}\}/g, data.themeSurfaceProps || '')
      .replace(/\{\{themeShowcaseProps\}\}/g, data.themeShowcaseProps || '')
      // Traditional component replacements (fallback for layout components)
      .replace(/\{\{defaultVariant\}\}/g, data.defaultVariant || '')
      .replace(/\{\{additionalVariants\}\}/g, data.additionalVariants || '')
      .replace(/\{\{smClasses\}\}/g, data.smClasses || '')
      .replace(/\{\{mdClasses\}\}/g, data.mdClasses || '')
      .replace(/\{\{lgClasses\}\}/g, data.lgClasses || '')
      .replace(/\{\{defaultVariantClasses\}\}/g, data.defaultVariantClasses || '')
      .replace(/\{\{variantClassMappings\}\}/g, data.variantClassMappings || '')
      .replace(/\{\{variantOptions\}\}/g, data.variantOptions || '')
      .replace(/\{\{variantStories\}\}/g, data.variantStories || '')
      .replace(/\{\{sampleContent\}\}/g, data.sampleContent || '')
      .replace(/\{\{allVariantsRender\}\}/g, data.allVariantsRender || '')
      .replace(/\{\{surfaceSmallContent\}\}/g, data.surfaceSmallContent || '')
      .replace(/\{\{surfaceDefaultContent\}\}/g, data.surfaceDefaultContent || '')
      .replace(/\{\{sizeSmallContent\}\}/g, data.sizeSmallContent || '')
      .replace(/\{\{sizeMediumContent\}\}/g, data.sizeMediumContent || '')
      .replace(/\{\{sizeLargeContent\}\}/g, data.sizeLargeContent || '')
      .replace(/\{\{disabledContent\}\}/g, data.disabledContent || '');
  }

  // Prepare template data
  const templateData = {
    ComponentName: componentName,
    htmlElement: preset.htmlElement,
    // Layout-specific properties
    ...(preset.isLayoutComponent ? {
      layoutSpecificProps: preset.layoutSpecificProps || '',
      defaultPropValues: preset.defaultPropValues || '',
      layoutLogic: preset.layoutLogic || '',
      classComposition: preset.classComposition || '',
      argTypes: preset.argTypes || '',
      defaultArgs: preset.defaultArgs || '',
      layoutDemonstrations: preset.layoutDemonstrations || '',
      mixedContentProps: preset.mixedContentProps || '',
      responsiveExamples: preset.responsiveExamples || '',
      themeSurfaceProps: preset.themeSurfaceProps || '',
      themeShowcaseProps: preset.themeShowcaseProps || '',
    } : {
      // Traditional component properties
      defaultVariant: preset.defaultVariant,
      additionalVariants: preset.variants.slice(1).map(v => ` | '${v}'`).join(''),
      smClasses: preset.sizes.sm,
      mdClasses: preset.sizes.md,
      lgClasses: preset.sizes.lg,
      defaultVariantClasses: preset.variantClasses[preset.defaultVariant],
      variantClassMappings: Object.entries(preset.variantClasses)
        .filter(([key]) => key !== preset.defaultVariant)
        .map(([key, value]) => `${key}: '${value}'`)
        .join(',\n    '),
      variantOptions: preset.variants.map(v => `'${v}'`).join(', '),
    }),
    baseClasses: preset.baseClasses,
    // Traditional component properties that layout components don't need
    variantStories: preset.variants ? preset.variants
      .filter(v => v !== preset.defaultVariant)
      .map(variant => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1);
        return `export const ${capitalizedVariant}: Story = {
  args: {
    variant: '${variant}',
    children: '${preset.sampleContent}',
  },
};`;
      })
      .join('\n\n') : '',
    sampleContent: preset.sampleContent || '',
    allVariantsRender: preset.variants ? preset.variants
      .map((variant, index) => {
        const specifics = COMPONENT_SPECIFICS[componentName];
        if (specifics && specifics.generateContent) {
          const content = specifics.generateContent(variant, index);
          return `<${componentName} variant="${variant}">${content}</${componentName}>`;
        }
        return `<${componentName} variant="${variant}">${capitalizeFirst(variant)}</${componentName}>`;
      })
      .join('\n        ') : '',
    surfaceSmallContent: COMPONENT_SPECIFICS[componentName]?.surfaceSmallContent || 'Small on surface',
    surfaceDefaultContent: COMPONENT_SPECIFICS[componentName]?.surfaceDefaultContent || 'Default on surface',
    sizeSmallContent: COMPONENT_SPECIFICS[componentName]?.sizeSmallContent || 'Small',
    sizeMediumContent: COMPONENT_SPECIFICS[componentName]?.sizeMediumContent || 'Medium',
    sizeLargeContent: COMPONENT_SPECIFICS[componentName]?.sizeLargeContent || 'Large',
    disabledContent: COMPONENT_SPECIFICS[componentName]?.disabledContent || 'Disabled',
    categoryTitle: CATEGORY_TITLES[preset.folder] || '0. Uncategorized'
  };

  // Generate component files - use layout-specific templates for layout components
  const isLayoutComponent = preset.isLayoutComponent || false;
  const templates = isLayoutComponent 
    ? ['layout-component.tsx.template', 'layout-stories.tsx.template', 'index.ts.template']
    : ['component.tsx.template', 'stories.tsx.template', 'index.ts.template'];
  const outputFiles = [`${componentName}.tsx`, `${componentName}.stories.tsx`, 'index.ts'];

  templates.forEach((templateFile, index) => {
    const templatePath = path.join(templatesDir, templateFile);
    const outputPath = path.join(componentDir, outputFiles[index]);

    if (fs.existsSync(templatePath)) {
      const template = fs.readFileSync(templatePath, 'utf8');
      const processed = processTemplate(template, templateData);
      fs.writeFileSync(outputPath, processed);
      console.log(`✅ Created: ${outputFiles[index]}`);
    }
  });

  console.log(`\n🎉 Component '${componentName}' generated successfully!`);
  console.log(`📁 Location: src/lib/${preset.folder}/${componentName}/`);
  console.log(`\n📝 Next steps:`);
  console.log(`1. Add export to src/index.ts:`);
  console.log(`   export * from './lib/${preset.folder}/${componentName}';`);
  console.log(`2. Review and customize the generated component`);
  console.log(`3. Test in Storybook`);
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// CLI usage
const componentName = process.argv[2];
if (!componentName) {
  console.log('Usage: node generate-component.js <ComponentName>');
  console.log(`Available presets: ${Object.keys(COMPONENT_PRESETS).join(', ')}`);
  process.exit(1);
}

generateComponent(componentName);