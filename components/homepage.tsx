import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import Footer from '@/components/ui/footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/img/logo-sharp.svg" 
                  alt="DesignCost Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="footer-link font-light tracking-[0.1px]">Home</a>
              <a href="/styleguide" className="footer-link font-light tracking-[0.1px]">Style Guide</a>
              <a href="/calculator" className="footer-link font-light tracking-[0.1px]">Calculator</a>
              <a href="/blog" className="footer-link font-light tracking-[0.1px]">Blog</a>
              <a href="/icons" className="footer-link font-light tracking-[0.1px]">Icons</a>
              <a href="/buttons" className="footer-link font-light tracking-[0.1px]">Buttons</a>
              <Button size="sm" className="font-light tracking-[0.1px]">
                <Icons.Login />
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-slate-400/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-[0.2px]">
              Get accurate project estimates with our professional cost calculator. 
              Streamline your design workflow and deliver precise quotes to clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="font-light tracking-[0.1px]">
                <Icons.Calendar />
                Start Calculating
              </Button>
              <Button variant="outline-dark" size="lg" className="font-light tracking-[0.1px]">
                <Icons.Search />
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 tracking-[-0.01em] text-white">Why Choose DesignCost?</h2>
            <p className="text-xl text-slate-400/80 max-w-3xl mx-auto font-light tracking-[0.2px] leading-relaxed">
              Professional tools designed for designers, agencies, and freelancers 
              who need accurate project estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="primary" glow className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icons.Calendar className="text-white" size="large" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4 font-light tracking-[-0.01em] text-white">Accurate Estimates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400/80 leading-relaxed font-light tracking-[0.1px]">
                  Get precise project costs based on complexity, features, and timeline. 
                  Our algorithm considers all project variables.
                </p>
              </CardContent>
            </Card>

            <Card variant="purple" glow className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icons.Pencil className="text-white" size="large" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4 font-light tracking-[-0.01em] text-white">Easy Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400/80 leading-relaxed font-light tracking-[0.1px]">
                  Tailor estimates to your specific needs with customizable parameters 
                  and project types.
                </p>
              </CardContent>
            </Card>

            <Card variant="orange" glow className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icons.Check className="text-white" size="large" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4 font-light tracking-[-0.01em] text-white">Professional Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400/80 leading-relaxed font-light tracking-[0.1px]">
                  Generate professional quotes and proposals that impress clients 
                  and win more projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-light text-emerald-400 tracking-[-0.01em]">10K+</div>
              <div className="text-slate-400/80 font-light tracking-[0.1px]">Projects Estimated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-purple-400 tracking-[-0.01em]">95%</div>
              <div className="text-slate-400/80 font-light tracking-[0.1px]">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-orange-400 tracking-[-0.01em]">2.5K+</div>
              <div className="text-slate-400/80 font-light tracking-[0.1px]">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-blue-400 tracking-[-0.01em]">24/7</div>
              <div className="text-slate-400/80 font-light tracking-[0.1px]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="secondary" className="p-12">
            <h2 className="text-4xl font-light mb-6 tracking-[-0.01em] text-white">Ready to Get Started?</h2>
            <p className="text-xl text-slate-400/80 mb-8 font-light tracking-[0.2px] leading-relaxed">
              Join thousands of designers who trust DesignCost for accurate project estimates.
            </p>12.             <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-light tracking-[0.1px]">
                <Icons.ArrowRight />
                Start Your First Estimate
              </Button>
              <Button variant="outline-dark" size="lg" className="font-light tracking-[0.1px]">
                <Icons.Search />
                Explore Style Guide
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default memo(Homepage);