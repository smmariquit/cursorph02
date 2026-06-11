// voice-chat-backend/app/page.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Voice Chat Backend API
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Powered by Gemini AI • Ready for voice chat integration
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-800 dark:text-green-200 font-medium">API Status: Online</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Backend is running and ready to process voice chat requests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API Endpoint</h3>
                <code className="text-sm text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                  POST /api/chat
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Model</h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">Gemini Pro</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Environment Setup</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                Make sure to set your GEMINI_API_KEY environment variable:
              </p>
              <code className="text-xs text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded block">
                GEMINI_API_KEY=your_api_key_here
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
