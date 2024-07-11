import React, { useState } from 'react';

const FooterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="bg-black text-white py-10 mt-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="mb-4">Feel free to reach out to me at:</p>
            <p className="mb-1"><strong>Email:</strong> adthorat34@gmail.com</p>
            <p className="mb-1"><strong>Phone:</strong> +919322331146</p>
            <p className="mb-1"><strong>Location:</strong> Pune, Maharashtra, India</p>
          </div>
          <div className="w-full md:w-2/3 px-6">
            <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
            <form onSubmit={handleSubmit} className="bg-slate-700 p-6 rounded">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Avdhut Thorat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
