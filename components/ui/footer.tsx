import React from 'react';
import { Icons } from './icons';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`footer-base py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand/Company Info */}
          <div className="footer-column">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/img/logo-circle-m.svg" 
                  alt="DesignCost Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="footer-heading text-2xl">DesignCost</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Professional cost estimation tools for web design projects. 
              Get accurate quotes and streamline your project planning with our 
              comprehensive calculator.
            </p>
            <div className="flex gap-4">
              <a href="#" className="footer-social glow-button">
                <Icons.Search size="small" />
              </a>
              <a href="#" className="footer-social glow-button">
                <Icons.Calendar size="small" />
              </a>
              <a href="#" className="footer-social glow-button">
                <Icons.Pencil size="small" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="space-y-3">
              <a href="/" className="footer-link block">
                Home
              </a>
              <a href="/styleguide" className="footer-link block">
                Style Guide
              </a>
              <a href="#solutions" className="footer-link block">
                Solutions
              </a>
              <a href="#case-studies" className="footer-link block">
                Case Studies
              </a>
              <a href="#pricing" className="footer-link block">
                Pricing
              </a>
              <a href="#contact" className="footer-link block">
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Contact/CTA */}
          <div className="footer-column">
            <h4 className="footer-heading">Let's Connect</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Icons.Calendar className="text-emerald-400" size="small" />
                <span className="text-slate-400">hello@designcost.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.Search className="text-emerald-400" size="small" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
            </div>
            <button className="btn-primary glow-button w-full mb-4">
              <Icons.Login size="small" />
              Let's Chat
            </button>
            <p className="text-slate-500 text-sm">
              Ready to start your project? Get in touch for a free consultation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 DesignCost. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
              <a href="#terms" className="footer-link">
                Terms of Service
              </a>
              <a href="#cookies" className="footer-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;