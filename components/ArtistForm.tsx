"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const artistSchema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.string().required("Category is required"),
  location: yup.string().required("Location is required"),
  priceRange: yup.string().required("Fee range is required"),
  languages: yup.array().of(yup.string()).min(1, "Select at least one language"),
});

type ArtistFormInputs = yup.InferType<typeof artistSchema>;

const ArtistForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ArtistFormInputs>({
    resolver: yupResolver(artistSchema),
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const onSubmit = (data: ArtistFormInputs) => {
    console.log("Submitted Data:", data);
console.log("Image Base64:", previewImage);
 
    reset();
  };

  const categories = ["DJ", "Singer", "Dancer", "Speaker"];
  const languages = ["Hindi", "English", "Marathi", "Punjabi"];
  const priceRanges = ["₹10,000 – ₹20,000", "₹20,000 – ₹35,000", "₹35,000 – ₹50,000"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto bg-white shadow-md rounded p-6"
    >
        <div>
  <label className="block text-sm font-medium mb-1">Profile Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }}
    className="w-full border rounded p-2"
  />
</div>


      <div>
        <label className="block text-sm font-medium">Name</label>
        <input {...register("name")} className="input" />
        <p className="text-red-600 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea {...register("bio")} className="input h-24" />
        <p className="text-red-600 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select {...register("category")} className="input">
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <p className="text-red-600 text-sm">{errors.category?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Location</label>
        <input {...register("location")} className="input" />
        <p className="text-red-600 text-sm">{errors.location?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <select {...register("priceRange")} className="input">
          <option value="">Select price range</option>
          {priceRanges.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <p className="text-red-600 text-sm">{errors.priceRange?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Languages</label>
        {languages.map((lang) => (
          <label key={lang} className="block text-sm">
            <input
              type="checkbox"
              value={lang}
              {...register("languages")}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
        <p className="text-red-600 text-sm">{errors.languages?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ArtistForm;
