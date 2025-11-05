"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI创意工坊
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">功能特色</Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition-colors">AI工具</Link>
            <Link href="#models" className="text-gray-700 hover:text-blue-600 transition-colors">模型库</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">价格方案</Link>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
              开始使用
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">功能特色</Link>
              <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition-colors">AI工具</Link>
              <Link href="#models" className="text-gray-700 hover:text-blue-600 transition-colors">模型库</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">价格方案</Link>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all w-full">
                开始使用
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}