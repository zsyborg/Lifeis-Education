'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  UserCircleIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  BellIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onMenuToggle?: () => void
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const { data: session, status } = useSession()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center px-4 sm:px-6 py-3 h-16">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button 
              onClick={onMenuToggle}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors lg:hidden"
            >
              <Bars3Icon className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={onMenuToggle}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors hidden lg:block"
            >
              <Bars3Icon className="h-5 w-5 text-gray-700" />
            </button>
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 sm:p-2 rounded-xl">
                <BookOpenIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 hidden xs:block">EduTube</span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Search Button */}
            <button 
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors md:hidden"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
            </button>
            
            {/* Notifications - Hidden on mobile */}
            <button className="hidden sm:block p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative">
              <BellIcon className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Cart */}
            <Link 
              href="/cart" 
              className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative"
            >
              <ShoppingCartIcon className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">3</span>
            </Link>
            
            {status === 'loading' ? (
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-200 rounded-full animate-pulse" />
            ) : session ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-1.5 hover:bg-gray-100 rounded-xl transition-colors">
                  {session.user?.image ? (
                    <img 
                      src={session.user.image} 
                      alt={session.user.name || ''} 
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-gray-200"
                    />
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <UserCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  )}
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white rounded-2xl shadow-xl border border-gray-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="p-2">
                    <div className="px-3 py-2 border-b border-gray-100 mb-2">
                      <p className="font-semibold text-gray-900 text-sm">{session.user?.name}</p>
                      <p className="text-gray-500 text-xs">{session.user?.email}</p>
                    </div>
                    <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                      <BookOpenIcon className="h-4 w-4 mr-3" />
                      My Learning
                    </Link>
                    <Link href="/profile" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                      <UserCircleIcon className="h-4 w-4 mr-3" />
                      Profile Settings
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <button 
                      onClick={() => signOut()}
                      className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link 
                  href="/auth/signin"
                  className="hidden sm:block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Log in
                </Link>
                <Link 
                  href="/auth/signin"
                  className="px-3 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <span className="hidden sm:inline">Sign up</span>
                  <span className="sm:hidden">Join</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="md:hidden px-4 pb-3 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500 transition-all"
                autoFocus
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
