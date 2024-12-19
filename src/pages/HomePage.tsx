import React from 'react';
import { Hero } from '../components/Hero';
import { ToolGrid } from '../components/ToolGrid';
import { tools } from '../data/tools';
import { useToolNavigation } from '../hooks/useToolNavigation';

export default function HomePage() {
  const { handleToolClick } = useToolNavigation();

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Tools</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most used developer tools and utilities
          </p>
        </div>
        <ToolGrid tools={tools} onToolClick={handleToolClick} />
      </div>
    </div>
  );
}