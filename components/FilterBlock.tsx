"use client";

interface FilterBlockProps {
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  selectedLocation: string | null;
  setSelectedLocation: (value: string | null) => void;
  selectedPriceRange: string | null;
  setSelectedPriceRange: (value: string | null) => void;
  categories: string[];
  locations: string[];
  priceRanges: string[];
}

const FilterBlock: React.FC<FilterBlockProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedPriceRange,
  setSelectedPriceRange,
  categories,
  locations,
  priceRanges,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            // Fix: Use a regular function call instead of passing a callback
            setSelectedCategory(selectedCategory === cat ? null : cat);
          }}
          className={`px-4 py-2 rounded border ${
            selectedCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}

      <select
        value={selectedLocation || ""}
        onChange={(e) => setSelectedLocation(e.target.value || null)}
        className="px-4 py-2 border rounded"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={selectedPriceRange || ""}
        onChange={(e) => setSelectedPriceRange(e.target.value || null)}
        className="px-4 py-2 border rounded"
      >
        <option value="">All Price Ranges</option>
        {priceRanges.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBlock;