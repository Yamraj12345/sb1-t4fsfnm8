import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">All-in-One</span>
                <span className="block text-indigo-600">Developer Toolkit</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Free online tools for developers and designers. Convert, compress, and manipulate files with ease.
                No installation required - all tools run directly in your browser.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <div className="relative max-w-xl w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search for tools..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">30+</div>
                  <div className="text-sm text-gray-600">Tools Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">100%</div>
                  <div className="text-sm text-gray-600">Free</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">0</div>
                  <div className="text-sm text-gray-600">Installation</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}