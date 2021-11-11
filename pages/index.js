import Link from 'next/link';

export default function Home() {
  return (
    <div className="header">
      <div className="flex mx-auto p-1 bg-gradient-to-b from-gray-800 to-gray-700">
        <h1 className="text-white ml-4">Kliwon Night</h1>
        <div className="flex absolute right-8">
          <div className="flex ml-6">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </div>
          <div className="flex ml-4">
            <Link href="/blog">
              <a className="text-white">Blog</a>
            </Link>
          </div>

          <div className="flex ml-4">
            <Link href="shop">
              <a className="text-white">Shop</a>
            </Link>
          </div>
          <div className="flex ml-4">
            <Link href="/event">
              <a className="text-white">Event</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="bg-gray-300"></div>
      </div>
    </div>
  );
}
