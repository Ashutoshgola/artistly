interface Artist {
    id: string;
    name: string;
    category: string[];
    location: string;
    priceRange: string;
    languages: string[];
  }
  
  interface TableProps {
    data: Artist[];
  }
  
  const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Fee</th>
              <th className="px-4 py-2 border">Languages</th>
            </tr>
          </thead>
          <tbody>
            {data.map((artist, index) => (
              <tr key={artist.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-medium">{artist.name}</td>
                <td className="px-4 py-2">{artist.category.join(", ")}</td>
                <td className="px-4 py-2">{artist.location}</td>
                <td className="px-4 py-2">{artist.priceRange}</td>
                <td className="px-4 py-2">{artist.languages.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  