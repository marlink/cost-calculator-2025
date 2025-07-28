import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { MultipleChoice } from '@/components/ui/multiple-choice';
import Footer from '@/components/ui/footer';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import AnimatedLogo from '@/components/ui/animated-logo';
import MultiColumnText, { TwoColumnText } from '@/components/ui/multi-column-text';
import PatternBackground from '@/components/ui/pattern-background';
import PageLoader, { usePageLoader } from '@/components/ui/page-loader';
import Newsletter from '@/components/ui/newsletter';
import MultiSelectButtonGroup, { SingleSelectButtonGroup } from '@/components/ui/button-group';

const StyleGuide: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string>('option1');
  const [showLoader, setShowLoader] = useState(false);
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>(['option1']);
  const [singleSelectValue, setSingleSelectValue] = useState<string>('option1');

  const choiceOptions = [
    {
      id: 'basic',
      title: 'Basic Package',
      description: 'Essential features for small projects',
      value: 'basic'
    },
    {
      id: 'professional',
      title: 'Professional Package',
      description: 'Advanced features for growing businesses',
      value: 'professional'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Package',
      description: 'Full-featured solution for large organizations',
      value: 'enterprise'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/img/logo-debug.svg" 
                  alt="DesignCost Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="footer-link">Home</a>
              <a href="/calculator" className="footer-link">Calculator</a>
              <a href="/blog" className="footer-link">Blog</a>
              <a href="/icons" className="footer-link">Icons</a>
              <a href="/buttons" className="footer-link">Buttons</a>
              <ThemeSwitcher />
              <Button size="sm" className="font-light tracking-[0.1px]">
                <Icons.Login className="mr-2" />
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive collection of design tokens, components, and patterns 
            for building consistent and beautiful user interfaces.
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Emerald Colors */}
            <Card variant="primary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Emerald</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-emerald-50 rounded border"></div>
                  <span className="text-sm">#ecfdf5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-emerald-500 rounded"></div>
                  <span className="text-sm">#10b981</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-emerald-700 rounded"></div>
                  <span className="text-sm">#047857</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-emerald-900 rounded"></div>
                  <span className="text-sm">#064e3b</span>
                </div>
              </div>
            </Card>

            {/* Purple Colors */}
            <Card variant="purple" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Purple</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-purple-50 rounded border"></div>
                  <span className="text-sm">#faf5ff</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  <span className="text-sm">#9333ea</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-purple-700 rounded"></div>
                  <span className="text-sm">#6d28d9</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-purple-900 rounded"></div>
                  <span className="text-sm">#581c87</span>
                </div>
              </div>
            </Card>

            {/* Orange Colors */}
            <Card variant="orange" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Orange</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-orange-50 rounded border"></div>
                  <span className="text-sm">#fff7ed</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                  <span className="text-sm">#f97316</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-orange-700 rounded"></div>
                  <span className="text-sm">#c2410c</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-orange-900 rounded"></div>
                  <span className="text-sm">#9a3412</span>
                </div>
              </div>
            </Card>

            {/* Blue Colors */}
            <Card variant="blue" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Blue</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-blue-50 rounded border"></div>
                  <span className="text-sm">#eff6ff</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  <span className="text-sm">#3b82f6</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-blue-700 rounded"></div>
                  <span className="text-sm">#1d4ed8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-blue-900 rounded"></div>
                  <span className="text-sm">#1e3a8a</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <Card variant="secondary" className="p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                <code className="text-sm text-slate-400">text-4xl font-bold</code>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-2">Heading 3</h3>
                <code className="text-sm text-slate-400">text-3xl font-semibold</code>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">Heading 4</h4>
                <code className="text-sm text-slate-400">text-2xl font-semibold</code>
              </div>
              <div>
                <p className="text-lg mb-2">Large body text for important content</p>
                <code className="text-sm text-slate-400">text-lg</code>
              </div>
              <div>
                <p className="text-base mb-2">Regular body text for general content</p>
                <code className="text-sm text-slate-400">text-base</code>
              </div>
              <div>
                <p className="text-sm mb-2">Small text for captions and labels</p>
                <code className="text-sm text-slate-400">text-sm</code>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
              <div className="space-y-4">
                <Button className="w-full">Primary Button</Button>
                <Button size="sm" className="w-full">Small Primary</Button>
                <Button size="lg" className="w-full">Large Primary</Button>
                <Button className="w-full">
                  <Icons.Check className="mr-2" />
                  With Icon
                </Button>
              </div>
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Secondary Buttons</h3>
              <div className="space-y-4">
                <Button variant="secondary" className="w-full">Secondary Button</Button>
                <Button variant="outline-dark" className="w-full">Outline Button</Button>
                <Button variant="ghost" className="w-full">Ghost Button</Button>
                <Button variant="secondary" className="w-full">
                  <Icons.Pencil className="mr-2" />
                  Edit
                </Button>
              </div>
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Color Variants</h3>
              <div className="space-y-4">
                <Button variant="destructive" className="w-full">Destructive Button</Button>
                <Button variant="outline" className="w-full">Light Outline</Button>
                <Button variant="link" className="w-full">Link Button</Button>
                <Button disabled className="w-full">Disabled Button</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="primary" glow className="p-6">
              <CardHeader>
                <CardTitle>Primary Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Bold design with strong background color and border. 
                  Perfect for highlighting important content.
                </p>
              </CardContent>
            </Card>

            <Card variant="secondary" className="p-6">
              <CardHeader>
                <CardTitle>Secondary Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Subtle design with light background and gentle shadow. 
                  Great for general content containers.
                </p>
              </CardContent>
            </Card>

            <Card variant="tertiary" className="p-6">
              <CardHeader>
                <CardTitle>Tertiary Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Minimalist style with border-only design. 
                  Perfect for clean, understated layouts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Icons</h2>
          <Card variant="secondary" className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Object.entries(Icons).map(([name, IconComponent]) => (
                <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <IconComponent className="text-emerald-400" />
                  <span className="text-sm text-slate-400">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Form Elements</h2>
          <Card variant="secondary" className="p-8">
            <div className="space-y-8">
              {/* Multiple Choice Buttons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Multiple Choice Buttons</h3>
                <p className="text-slate-400 mb-6">Interactive selection buttons with larger ticks when selected</p>
                <MultipleChoice
                  options={choiceOptions}
                  selectedId={selectedChoice}
                  onSelect={(option) => setSelectedChoice(option.id)}
                  className="max-w-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enhanced Checkboxes</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="checkbox-enhanced" defaultChecked />
                      <span>Selected option with larger tick</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="checkbox-enhanced" />
                      <span>Unselected option</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enhanced Radio Buttons</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="demo" className="radio-enhanced" defaultChecked />
                      <span>Selected radio option</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="demo" className="radio-enhanced" />
                      <span>Unselected radio option</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Usage Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="tertiary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Button Usage</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<Button>
  Primary Action
</Button>

<Button variant="outline-dark">
  Secondary Action
</Button>

<Button variant="destructive">
  <Icons.Check />
  With Icon
</Button>`}</code>
              </pre>
            </Card>

            <Card variant="tertiary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Card Usage</h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<Card variant="primary" glow>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>`}</code>
              </pre>
            </Card>
          </div>
        </section>

        {/* Theme Switcher */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Theme Switcher</h2>
          <Card variant="secondary" className="p-8">
            <div className="flex flex-col items-center gap-6">
              <p className="text-slate-400 text-center">Toggle between light, dark, and system themes</p>
              <ThemeSwitcher />
            </div>
          </Card>
        </section>

        {/* Animated Logo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Animated Logo</h2>
          <Card variant="secondary" className="p-8">
            <div className="flex flex-col items-center gap-6">
              <p className="text-slate-400 text-center">Dynamic logo with color-changing gradient animation</p>
              <AnimatedLogo />
            </div>
          </Card>
        </section>

        {/* Button Groups */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Button Groups</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Multi-Select Button Group</h3>
              <p className="text-slate-400 mb-6">Select multiple options from a group</p>
              <MultiSelectButtonGroup
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                  { value: 'option4', label: 'Option 4' }
                ]}
                value={multiSelectValues}
                onChange={setMultiSelectValues}
                minSelections={1}
                maxSelections={3}
              />
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Single-Select Button Group</h3>
              <p className="text-slate-400 mb-6">Select one option from a group</p>
              <SingleSelectButtonGroup
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
                ]}
                value={singleSelectValue}
                onChange={setSingleSelectValue}
              />
            </Card>
          </div>
        </section>

        {/* Multi-Column Text */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Multi-Column Text</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Two Columns</h3>
              <MultiColumnText columns={2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </MultiColumnText>
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Three Columns</h3>
              <MultiColumnText columns={3} gap="lg">
                <h4>Column Heading</h4>
                <p>Shorter text content that works well in three columns. Perfect for lists, features, or brief descriptions.</p>
                <ul>
                  <li>Feature one</li>
                  <li>Feature two</li>
                  <li>Feature three</li>
                </ul>
              </MultiColumnText>
            </Card>
          </div>
        </section>

        {/* Pattern Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Animated Pattern Backgrounds</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="secondary" className="p-6 relative overflow-hidden">
              <PatternBackground variant="dots" intensity="medium" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-4">Dots Pattern</h3>
                <p className="text-slate-400">Subtle animated dots background with floating animation</p>
              </div>
            </Card>

            <Card variant="secondary" className="p-6 relative overflow-hidden">
              <PatternBackground variant="particles" intensity="strong" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-4">Particles Pattern</h3>
                <p className="text-slate-400">Dynamic particles background with more intense animation</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Page Loader */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Page Loader</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Bar Loader</h3>
              <div className="flex flex-col items-center gap-4">
                <Button onClick={() => setShowLoader(!showLoader)}>
                  {showLoader ? 'Hide' : 'Show'} Loader
                </Button>
                {showLoader && <PageLoader variant="bar" />}
              </div>
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Dots Loader</h3>
              <div className="flex flex-col items-center gap-4">
                <PageLoader variant="dots" />
              </div>
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Pulse Loader</h3>
              <div className="flex flex-col items-center gap-4">
                <PageLoader variant="pulse" />
              </div>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Newsletter Components</h2>
          <div className="space-y-6">
            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Default Newsletter</h3>
              <Newsletter />
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Compact Newsletter</h3>
              <Newsletter variant="compact" />
            </Card>

            <Card variant="secondary" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Inline Newsletter</h3>
              <Newsletter variant="inline" />
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default StyleGuide;