import Image from "next/image";
import QuoteModal from "./QuoteModal";

interface ArtistCardProps {
  name: string;
  category: string[];
  location: string;
  priceRange: string;
  imageUrl: string;
}

const ArtistCard = ({ name, category, location, priceRange, imageUrl }: ArtistCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border hover:shadow-md transition">

<Image
  src={imageUrl}
  alt={name}
  width={300}
  height={300}
  className="w-full h-[300px] object-contain rounded-t bg-white"
  unoptimized
/>




      <div className="p-4 space-y-1 text-sm sm:text-base">
  <h3 className="text-lg font-bold text-gray-800">{name}</h3>
  <p className="text-gray-600">{category.join(", ")}</p>
  <p className="text-gray-500">{location}</p>
  <p className="text-blue-600 font-semibold">{priceRange}</p>
  <QuoteModal artistName={name} />
</div>

    </div>
  );
};

export default ArtistCard;
