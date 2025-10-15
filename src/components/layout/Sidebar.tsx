'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  FireIcon, 
  ClockIcon, 
  BookmarkIcon,
  AcademicCapIcon,
  CogIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  PaintBrushIcon,
  SpeakerWaveIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  UserPlusIcon,
  RocketLaunchIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Trending', href: '/trending', icon: FireIcon },
  { name: 'Recently Added', href: '/recent', icon: ClockIcon },
  { name: 'My Courses', href: '/my-courses', icon: AcademicCapIcon },
  { name: 'Watchlist', href: '/watchlist', icon: BookmarkIcon },
]

const categories = [
{ name: 'Sales', href: '/category/sales', icon: CurrencyDollarIcon, color: 'text-green-600' },
{ name: 'Self Improvement', href: '/category/self-improvement', icon: UserPlusIcon, color: 'text-blue-600' },
{ name: 'Entrepreneurship', href: '/category/entrepreneurship', icon: RocketLaunchIcon, color: 'text-purple-600' },
{ name: 'Mindset', href: '/category/mindset', icon: LightBulbIcon, color: 'text-yellow-600' },
{ name: 'Productivity', href: '/category/productivity', icon: ClockIcon, color: 'text-orange-600' },
{ name: 'Business Strategy', href: '/category/business-strategy', icon: ChartBarIcon, color: 'text-indigo-600' },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-transform duration-300 z-50',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64 sm:w-72 overflow-y-auto lg:translate-x-0'
      )}>
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Main Navigation */}
          <div>
            <nav className="space-y-1 sm:space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose} // Close sidebar on mobile when link is clicked
                    className={cn(
                      'flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium rounded-xl sm:rounded-2xl transition-all duration-200',
                      isActive 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <item.icon className={cn(
                      'mr-3 sm:mr-4 h-5 w-5',
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    )} />
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="px-3 sm:px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
              Explore Topics
            </h3>
            <nav className="space-y-1 sm:space-y-2">
              {categories.map((category) => {
                const isActive = pathname === category.href
                return (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={onClose} // Close sidebar on mobile when link is clicked
                    className={cn(
                      'flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium rounded-xl sm:rounded-2xl transition-all duration-200 group',
                      isActive 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <div className={cn(
                      'mr-3 sm:mr-4 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-colors',
                      isActive ? 'bg-white shadow-sm' : 'bg-gray-100 group-hover:bg-gray-200'
                    )}>
                      <category.icon className={cn(
                        'h-3.5 w-3.5 sm:h-4 sm:w-4',
                        isActive ? category.color : 'text-gray-500 group-hover:text-gray-700'
                      )} />
                    </div>
                    <span className="text-sm sm:text-base">{category.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Settings */}
          <div className="pt-3 sm:pt-4 border-t border-gray-200">
            <nav>
              <Link
                href="/settings"
                onClick={onClose} // Close sidebar on mobile when link is clicked
                className={cn(
                  'flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium rounded-xl sm:rounded-2xl transition-all duration-200',
                  pathname === '/settings' 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <CogIcon className={cn(
                  'mr-3 sm:mr-4 h-5 w-5',
                  pathname === '/settings' ? 'text-blue-600' : 'text-gray-500'
                )} />
                <span className="text-sm sm:text-base">Settings</span>
              </Link>
            </nav>
          </div>

        
        </div>
      </aside>
    </>
  )
}
