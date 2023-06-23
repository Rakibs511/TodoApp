const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2">
          <h1 className="text-2xl font-bold">Blog</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>

          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 2</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>

          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 3</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>

          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 4</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>


          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 5</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>

          <div className="bg-white shadow p-4">
            <h2 className="text-xl font-bold mb-2">Blog Post 6</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              nunc in leo feugiat efficitur.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
