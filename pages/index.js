export default function Home() {
  return (
    <div className="flex mx-auto p-1 bg-gradient-to-b from-gray-800 to-gray-700">
      <h1 className="text-white ml-4">Kliwon Night</h1>
      <div className="flex right-0 top-0">
        <div className="flex ml-6">
          <h1 className="text-white">Home</h1>
        </div>
        <div className="flex ml-4">
          <h1 className="text-white">Blog</h1>
        </div>
        <div className="flex ml-4">
          <h1 className="text-white">Shop</h1>
        </div>
        <div className="flex ml-4">
          <h1 className="text-white">Event</h1>
        </div>
      </div>
    </div>
  );
}
