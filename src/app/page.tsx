import CourseCard from "@/components/course/CourseCard";

// Mock data for demonstration
const mockCourses = [
  {
    id: "1",
    title: "The 7-Figure Sales System - Master High-Ticket Closing",
    description: "Learn proven frameworks to master sales psychology, handle objections, and close high-ticket deals consistently. Transform from amateur to elite closer.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "12h 45m",
    rating: 4.9,
    ratingCount: 8923,
    price: 197.99,
    originalPrice: 497.99,
    isFree: false,
    level: "Intermediate" as const,
    category: "Sales",
    studentCount: 34210
  },
  {
    id: "2",
    title: "Atomic Habits Masterclass - Build Systems for Success",
    description: "Master the science of habit formation and behavior change. Create systems that make success inevitable and transform your daily routines.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Dr. Sarah Chen"
    },
    duration: "8h 30m",
    rating: 4.8,
    ratingCount: 12456,
    price: 0,
    isFree: true,
    level: "Beginner" as const,
    category: "Self Improvement",
    studentCount: 89234
  },
  {
    id: "3",
    title: "Startup Founder's Playbook - Zero to Million Dollar Business",
    description: "The complete roadmap from idea validation to scaling your business. Learn fundraising, team building, and growth strategies from successful founders.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "15h 20m",
    rating: 4.9,
    ratingCount: 6789,
    price: 297.99,
    originalPrice: 597.99,
    isFree: false,
    level: "Advanced" as const,
    category: "Entrepreneurship",
    studentCount: 18945
  },
  {
    id: "4",
    title: "The Psychology of Persuasion - Influence and Win",
    description: "Master the art of persuasion and influence in business and life. Learn psychological principles that drive human decision-making.",
    thumbnail: "https://images.unsplash.com/photo-1551836026-d5c4d90d3596?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Dr. Michael Tan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c2b73c8c?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "9h 15m",
    rating: 4.7,
    ratingCount: 5432,
    price: 147.99,
    isFree: false,
    level: "Intermediate" as const,
    category: "Sales",
    studentCount: 23456
  },
  {
    id: "5",
    title: "Mindset Mastery - Reprogram Your Brain for Success",
    description: "Break through limiting beliefs and develop the mindset of high achievers. Learn neuroscience-backed techniques for peak performance.",
    thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417dad?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Lisa Park"
    },
    duration: "7h 45m",
    rating: 4.8,
    ratingCount: 8921,
    price: 127.99,
    originalPrice: 227.99,
    isFree: false,
    level: "Beginner" as const,
    category: "Self Improvement",
    studentCount: 45678
  },
  {
    id: "6",
    title: "Digital Entrepreneurship - Build Your Online Empire",
    description: "Learn to identify profitable niches, create digital products, and build automated online businesses that generate passive income.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Jordan Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "14h 20m",
    rating: 4.6,
    ratingCount: 3456,
    price: 0,
    isFree: true,
    level: "Beginner" as const,
    category: "Entrepreneurship",
    studentCount: 56789
  },
  {
    id: "7",
    title: "Cold Calling Domination - From Rejection to Revenue",
    description: "Transform cold calls into warm conversations and closed deals. Master scripts, tonality, and objection handling that actually works.",
    thumbnail: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Brian Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "6h 30m",
    rating: 4.7,
    ratingCount: 2987,
    price: 87.99,
    originalPrice: 187.99,
    isFree: false,
    level: "Intermediate" as const,
    category: "Sales",
    studentCount: 15632
  },
  {
    id: "8",
    title: "The 5 AM Miracle - Productivity Secrets of Billionaires",
    description: "Discover the morning routines and productivity systems used by the world's most successful people to 10x your daily output.",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Rachel Simmons"
    },
    duration: "5h 15m",
    rating: 4.9,
    ratingCount: 11234,
    price: 67.99,
    isFree: false,
    level: "Beginner" as const,
    category: "Self Improvement",
    studentCount: 67845
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-48 translate-x-24 sm:translate-x-32 lg:translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-32 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32"></div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                  🎓 New courses every week
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Learn Without
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Limits
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
                Discover thousands of courses from expert instructors. Master new skills with our interactive video platform and join millions of learners worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  🚀 Start Learning
                </button>
                <button className="border-2 border-white/30 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                  👥 Join Community
                </button>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-8 mt-8 sm:mt-12 text-white/80">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">50K+</div>
                  <div className="text-xs sm:text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">1,200+</div>
                  <div className="text-xs sm:text-sm">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                  <div className="text-xs sm:text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Trending Courses */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">🔥 Trending Now</h2>
              <p className="text-base sm:text-lg text-gray-600">Most popular courses this week</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {mockCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Free Courses */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">🎁 Free Courses</h2>
              <p className="text-base sm:text-lg text-gray-600">High-quality education at zero cost</p>
            </div>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {mockCourses.filter(course => course.isFree).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Recently Added */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">✨ Recently Added</h2>
              <p className="text-base sm:text-lg text-gray-600">Fresh content from our instructors</p>
            </div>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {mockCourses.slice(2, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">📚 Stay Updated</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest courses, exclusive deals, and learning tips delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
