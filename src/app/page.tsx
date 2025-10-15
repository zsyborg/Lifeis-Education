import CourseCard from "@/components/course/CourseCard";

// Mock data for demonstration
const mockCourses = [
  {
    id: "1",
    title: "Complete React Developer Course with Redux, Hooks, and GraphQL",
    description: "Learn React from the ground up and build amazing web applications with the latest features including Hooks, Context API, and more.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "14h 30m",
    rating: 4.8,
    ratingCount: 12485,
    price: 89.99,
    originalPrice: 129.99,
    isFree: false,
    level: "Intermediate" as const,
    category: "Web Development",
    studentCount: 45230
  },
  {
    id: "2",
    title: "Python for Beginners - Complete Python Programming Masterclass",
    description: "Master Python programming from basics to advanced concepts. Perfect for beginners with no prior programming experience.",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Sarah Wilson"
    },
    duration: "18h 45m",
    rating: 4.9,
    ratingCount: 8967,
    price: 0,
    isFree: true,
    level: "Beginner" as const,
    category: "Programming",
    studentCount: 67890
  },
  {
    id: "3",
    title: "Advanced Node.js and Express Development",
    description: "Build scalable backend applications with Node.js, Express, MongoDB, and deploy to production.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "12h 15m",
    rating: 4.7,
    ratingCount: 5643,
    price: 74.99,
    originalPrice: 99.99,
    isFree: false,
    level: "Advanced" as const,
    category: "Backend Development",
    studentCount: 23456
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals with Figma",
    description: "Learn the principles of user interface and user experience design using Figma. Create stunning designs that users love.",
    thumbnail: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c2b73c8c?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "10h 20m",
    rating: 4.6,
    ratingCount: 3421,
    price: 59.99,
    isFree: false,
    level: "Beginner" as const,
    category: "Design",
    studentCount: 15678
  },
  {
    id: "5",
    title: "Data Science with Python and Machine Learning",
    description: "Comprehensive course covering data analysis, visualization, and machine learning using Python, pandas, and scikit-learn.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Dr. Alex Kumar"
    },
    duration: "22h 10m",
    rating: 4.8,
    ratingCount: 7890,
    price: 119.99,
    originalPrice: 159.99,
    isFree: false,
    level: "Intermediate" as const,
    category: "Data Science",
    studentCount: 34567
  },
  {
    id: "6",
    title: "Digital Marketing Mastery - Complete Course",
    description: "Learn SEO, social media marketing, content marketing, and paid advertising to grow your business online.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=entropy&auto=format&q=60",
    instructor: {
      name: "Lisa Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
    },
    duration: "16h 40m",
    rating: 4.5,
    ratingCount: 2156,
    price: 0,
    isFree: true,
    level: "Beginner" as const,
    category: "Marketing",
    studentCount: 28934
  },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
