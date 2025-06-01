import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
            The page might have been moved or doesn't exist.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go Back Home
          </Link>

          <div className="text-sm text-gray-500">
            <Link
              href="/recipes"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Browse Recipes
            </Link>
            {' | '}
            <Link
              href="/guides"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}