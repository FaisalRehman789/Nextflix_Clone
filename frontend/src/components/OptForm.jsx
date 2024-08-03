/** @format */

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OptForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };

  return (
    <div>
      <form
        className="flex flex-col md:flex-row gap-4"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          placeholder="Email address"
          className="p-2 rounded flex-1 bg-black/80 border border-gray-700 mb-15"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-red-600 text-xl text-white lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center mb-15">
          Get Started
          <ChevronRight className="size-8 md:size-10" />
        </button>
      </form>
      <div className="flex justify-center py-4 mt-4">
        <p
          className="text-lg text-white text-center 
                 sm:text-base sm:leading-5"
        >
          Ready to watch? Enter your email to create or restart your membership
        </p>
      </div>
    </div>
  );
};

export default OptForm;
