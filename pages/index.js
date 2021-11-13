import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-500 to-gray-700 min-h-screen text-white">
      <nav>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-4/12">Kliwon Night</div>
            <div className="w-6/12">
              <ul className="space-x-12 flex items-center">
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
              </ul>
            </div>
            <div className="w-2/12">Search</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
