  "use client";

  import * as Dialog from "@radix-ui/react-dialog";
  import { useState } from "react";

  interface QuoteModalProps {
    artistName: string;
  }

  const QuoteModal: React.FC<QuoteModalProps> = ({ artistName }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      date: "",
    });

    const today = new Date().toISOString().split("T")[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Quote Request For:", artistName);
      console.log("Form Data:", formData);
      setOpen(false);
      setFormData({ name: "", email: "", date: "" });
    };

    return (
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700">
            Ask for Quote
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <Dialog.Content
            className="fixed z-50 bg-white max-w-md w-full p-6 sm:p-8 rounded-lg 
                      border border-gray-200 shadow-2xl top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 space-y-6"
          >
            <Dialog.Title className="text-2xl font-bold text-center text-gray-800">
              Request a Quote
            </Dialog.Title>

            <p className="text-center text-sm text-gray-500 mb-2">
              For <span className="font-medium">{artistName}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div className="flex justify-between pt-4">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm"
                  >
                    Cancel
                  </button>
                </Dialog.Close>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  };

  export default QuoteModal;
