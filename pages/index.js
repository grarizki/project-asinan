import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-500 to-gray-700 min-h-screen text-white">
      <nav>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-4/12 px-2">Kliwon Night</div>
            <div className="w-6/12">
              <div className="space-x-12 flex items-center">Search</div>
            </div>
            <div className="w-2/12">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:underline">
                    Ghosts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Event
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
