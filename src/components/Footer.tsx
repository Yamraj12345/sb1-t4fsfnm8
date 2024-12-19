import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              About DevTools Hub
            </h3>
            <p className="text-gray-600 text-sm">
              Free online tools for developers and designers. Convert, compress, and manipulate files with ease.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@devtoolshub.com" className="text-gray-400 hover:text-gray-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Tools
            </h3>
            <ul className="space-y-2">
              <li><Link to="/pdf" className="text-gray-600 hover:text-indigo-600">PDF Tools</Link></li>
              <li><Link to="/image" className="text-gray-600 hover:text-indigo-600">Image Tools</Link></li>
              <li><Link to="/text" className="text-gray-600 hover:text-indigo-600">Text Tools</Link></li>
              <li><Link to="/media" className="text-gray-600 hover:text-indigo-600">Media Tools</Link></li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Developer
            </h3>
            <ul className="space-y-2">
              <li><Link to="/dev" className="text-gray-600 hover:text-indigo-600">Dev Tools</Link></li>
              <li><Link to="/qr" className="text-gray-600 hover:text-indigo-600">QR Tools</Link></li>
              <li><Link to="/utility" className="text-gray-600 hover:text-indigo-600">Utilities</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm flex items-center justify-center">
            © {currentYear} DevTools Hub. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by developers for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}