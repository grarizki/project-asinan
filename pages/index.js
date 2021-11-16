import Image from 'next/image';
import logo from '../assets/Logo.png';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-black-dark to-black-light min-h-screen text-white">
      <nav className="py-3 px-3">
        <div className="container mx-auto">
          <div className="flex items-center">
            <a href="#" className="w-6/12 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-t from-red-800 to-red-600 rounded flex items-center justify-center mr-4 shadow-2xl">
                KN
              </div>
              Kliwon Night
            </a>
            <div className="w-8/12 items-center justify-center">
              <input
                className="text bg-trueGray-500 py-1 px-3 rounded-full bg-search"
                placeholder="Search"
              />
            </div>
            <div className="w-2/12">
              <ul className="flex space-x-5">
                <li>
                  <a href="#" className="hover:underline">
                    Ghosts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
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
