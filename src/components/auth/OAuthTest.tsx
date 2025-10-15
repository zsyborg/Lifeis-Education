'use client'

import { useSession } from 'next-auth/react'

export default function OAuthTest() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="p-4 bg-blue-50 rounded-lg">Loading session...</div>
  }

  if (status === 'unauthenticated') {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Not authenticated. Please sign in to test OAuth.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-green-50 rounded-lg border border-green-200">
      <h3 className="text-lg font-semibold text-green-800 mb-4">✅ OAuth Authentication Successful!</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Provider:</span>
          <span className="text-gray-900">{session.provider || 'Unknown'}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">User ID:</span>
          <span className="text-gray-900 font-mono text-xs">{session.user?.id}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Name:</span>
          <span className="text-gray-900">{session.user?.name}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-900">{session.user?.email}</span>
        </div>
        
        {session.user?.image && (
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Avatar:</span>
            <img 
              src={session.user.image} 
              alt="User avatar" 
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
        
        {session.accessToken && (
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Access Token:</span>
            <span className="text-gray-900 font-mono text-xs">
              {session.accessToken.substring(0, 20)}...
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 p-3 bg-white rounded border">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Full Session Data:</h4>
        <pre className="text-xs text-gray-600 overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}