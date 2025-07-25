'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import Footer from '@/components/ui/footer';

const IconShowcase = () => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'base' | 'large' | 'xl'>('base');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const iconCategories = {
    'Basic Icons': [
      'Search', 'Login', 'Pencil', 'Calendar', 'Check', 'X', 'Menu', 'Plus', 'Minus'
    ],
    'Navigation': [
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
      'ChevronUp', 'ChevronDown', 'ChevronLeft', 'ChevronRight'
    ],
    'Communication': [
      'Mail', 'Phone', 'Message', 'Bell'
    ],
    'Files & Documents': [
      'File', 'Folder', 'Book', 'Download', 'Upload'
    ],
    'Media': [
      'Image', 'Video', 'Music', 'Camera'
    ],
    'Technology': [
      'Computer', 'Smartphone', 'Wifi', 'Bluetooth'
    ],
    'Business': [
      'Briefcase', 'Dollar', 'CreditCard', 'ShoppingCart'
    ],
    'Location': [
      'MapPin', 'Globe', 'Navigation'
    ],
    'Weather': [
      'Sun', 'Cloud', 'Rain'
    ],
    'User': [
      'User', 'Users', 'Heart'
    ],
    'Settings': [
      'Settings', 'Lock', 'Unlock'
    ],
    'Time': [
      'Clock', 'Alarm'
    ]
  };

  const copyToClipboard = (iconName: string) => {
    const importStatement = `import { ${iconName}Icon } from '@/components/ui/icons';`;
    const usageExample = `<${iconName}Icon className="text-blue-500" size="${selectedSize}" />`;
    const fullCode = `${importStatement}\n\n// Usage:\n${usageExample}`;
    
    navigator.clipboard.writeText(fullCode);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    if (!IconComponent) return null;
    
    return (
      <Card 
        key={iconName}
        className="group relative p-6 bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer hover:bg-slate-800/50"
        onClick={() => copyToClipboard(iconName)}
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/10 transition-colors duration-300">
            <IconComponent 
              className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300" 
              size={selectedSize}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
              {iconName}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {copiedIcon === iconName ? 'Copied!' : 'Click to copy'}
            </p>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400/80 font-light tracking-[0.2px] mt-2">
                  Comprehensive collection of SVG icons for your design system
                </p>
              </div>
              
              {/* Size Controls */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-400 font-light">Size:</span>
                {(['small', 'base', 'large', 'xl'] as const).map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={`
                      ${selectedSize === size 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-transparent text-slate-400 border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
                      }
                      font-light tracking-[0.1px] transition-all duration-300
                    `}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Usage Instructions */}
          <Card className="mb-12 p-8 bg-slate-900/30 border-slate-800/50">
            <h2 className="text-xl font-light text-white mb-4 tracking-[-0.01em]">
              How to Use Icons
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-slate-300 mb-2">Import</h3>
                <div className="bg-slate-950/50 rounded-lg p-4 font-mono text-sm text-slate-300 border border-slate-800/50">
                  {`import { SearchIcon } from '@/components/ui/icons';`}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-300 mb-2">Usage</h3>
                <div className="bg-slate-950/50 rounded-lg p-4 font-mono text-sm text-slate-300 border border-slate-800/50">
                  {`<SearchIcon className="text-blue-500" size="large" />`}
                </div>
              </div>
            </div>
            <p className="text-slate-400/80 text-sm mt-4 font-light">
              Click any icon below to copy its import and usage code to your clipboard.
            </p>
          </Card>

          {/* Icon Categories */}
          {Object.entries(iconCategories).map(([category, iconNames]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-light text-white mb-6 tracking-[-0.01em]">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {iconNames.map(renderIcon)}
              </div>
            </div>
          ))}

          {/* Stats */}
          <Card className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-slate-800/50">
            <div className="text-center">
              <h3 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">
                {Object.values(iconCategories).flat().length} Icons Available
              </h3>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">
                Organized in {Object.keys(iconCategories).length} categories for easy discovery
              </p>
            </div>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default IconShowcase;