import React from "react";

function ContactSection() {
  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20"
      id="contact"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-4xl  font-extrabold text-center mb-12 text-white bartle">
          Contact Us
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-60 rounded-xl shadow-lg p-8">
          <form className="space-y-6">
      
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

      
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

 
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block 
                           bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 
                           text-white px-8 py-3 rounded-full 
                           shadow-lg 
                           transition-all duration-500 ease-in-out 
                           transform hover:scale-105 
                           hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 
                           hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] cursor-pointer"
              >
                Send Message 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;