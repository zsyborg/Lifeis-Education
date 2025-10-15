'use client'

import Link from 'next/link'
import { PlayIcon, ClockIcon, StarIcon, UserIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    thumbnail: string
    instructor: {
      name: string
      avatar?: string
    }
    duration: string
    rating: number
    ratingCount: number
    price: number
    originalPrice?: number
    isFree: boolean
    level: 'Beginner' | 'Intermediate' | 'Advanced'
    category: string
    studentCount: number
  }
  variant?: 'default' | 'compact'
}

export default function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < fullStars ? (
              <StarSolidIcon className="h-4 w-4 text-yellow-400" />
            ) : i === fullStars && hasHalfStar ? (
              <StarSolidIcon className="h-4 w-4 text-yellow-400" />
            ) : (
              <StarIcon className="h-4 w-4 text-gray-300" />
            )}
          </span>
        ))}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={`/course/${course.id}`} className="group block">
        <div className="flex space-x-3">
          <div className="relative flex-shrink-0">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-32 h-20 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
              <PlayIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{course.instructor.name}</p>
            <div className="flex items-center mt-1 space-x-2">
              {renderStars(course.rating)}
              <span className="text-xs text-gray-500">({course.ratingCount})</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-gray-900">
                {course.isFree ? 'Free' : `$${course.price}`}
              </span>
              {!course.isFree && course.originalPrice && (
                <span className="text-xs text-gray-500 line-through">
                  ${course.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/course/${course.id}`} className="group block">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <PlayIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <span className={cn(
              'px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full backdrop-blur-sm',
              course.isFree ? 'bg-emerald-100/90 text-emerald-800' : 'bg-blue-100/90 text-blue-800'
            )}>
              {course.isFree ? 'Free' : 'Premium'}
            </span>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium">
            {course.duration}
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
            <span className={cn(
              'px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-semibold rounded-full backdrop-blur-sm',
              course.level === 'Beginner' && 'bg-emerald-100/90 text-emerald-800',
              course.level === 'Intermediate' && 'bg-amber-100/90 text-amber-800',
              course.level === 'Advanced' && 'bg-red-100/90 text-red-800'
            )}>
              {course.level}
            </span>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="mb-2 sm:mb-3">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{course.category}</span>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 sm:mb-3 leading-tight">
            {course.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-3 sm:mb-4 leading-relaxed hidden sm:block">
            {course.description}
          </p>
          
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            {course.instructor.avatar ? (
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-gray-100"
              />
            ) : (
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            )}
            <span className="text-sm font-medium text-gray-700">{course.instructor.name}</span>
          </div>
          
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(course.rating) ? (
                      <StarSolidIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                    ) : (
                      <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                    )}
                  </span>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                {course.rating}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">
                ({course.ratingCount.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
              <UserIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">{course.studentCount > 1000 ? `${Math.floor(course.studentCount/1000)}k` : course.studentCount}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {course.isFree ? (
                <span className="text-xl sm:text-2xl font-bold text-emerald-600">Free</span>
              ) : (
                <>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="text-base sm:text-lg text-gray-400 line-through">
                      ${course.originalPrice}
                    </span>
                  )}
                </>
              )}
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:shadow-lg hover:scale-105 transition-all duration-200">
              <span className="hidden sm:inline">Enroll Now</span>
              <span className="sm:hidden">Enroll</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}