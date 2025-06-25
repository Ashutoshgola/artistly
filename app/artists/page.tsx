"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ARTISTS } from "@/lib/data";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

const allCategories = ["DJ", "Singer", "Dancer", "Speaker"];
const allLocations = [...new Set(ARTISTS.map((a) => a.location))];
const allPriceRanges = [...new Set(ARTISTS.map((a) => a.priceRange))];

function ArtistListingContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  useEffect(() => {
    if (defaultCategory) {
      setSelectedCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const filteredArtists = ARTISTS.filter((artist) => {
    const matchesCategory = selectedCategory
      ? artist.category.includes(selectedCategory)
      : true;
    const matchesLocation = selectedLocation
      ? artist.location === selectedLocation
      : true;
    const matchesPrice = selectedPriceRange
      ? artist.priceRange === selectedPriceRange
      : true;

    return matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">Explore Artists</h1>

      <FilterBlock
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        categories={allCategories}
        locations={allLocations}
        priceRanges={allPriceRanges}
      />

      {/* Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            category={artist.category}
            location={artist.location}
            priceRange={artist.priceRange}
            imageUrl={artist.imageUrl}
          />
        ))}
      </div>

      {(selectedCategory || selectedLocation || selectedPriceRange) && (
        <div className="text-center">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedLocation(null);
              setSelectedPriceRange(null);
            }}
            className="px-4 py-2 border border-gray-400 rounded text-sm text-gray-700 hover:bg-gray-100"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ArtistListingPage() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading artists...</div>}>
      <ArtistListingContent />
    </Suspense>
  );
}