import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Book Top Performing Artists</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Find your Favorite Artist for your Event.
        </p>
        <a
          href="/artists"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Explore Artists
        </a>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
  {["DJ", "Singer", "Dancer", "Speaker"].map((cat) => (
    <a
      key={cat}
      href={`/artists?category=${encodeURIComponent(cat)}`}
      className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 text-center hover:shadow-md transition block"
    >
      <span className="text-3xl"></span>
      <p className="mt-2 text-lg font-semibold text-gray-800">{cat}</p>
    </a>
  ))}
</div>




    </section>
  );
}

