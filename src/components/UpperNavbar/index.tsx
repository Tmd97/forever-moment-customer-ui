import { Search } from "lucide-react";

const UpperNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-pink-600 text-white gap-4">
      
      {/* LEFT - LOGO */}
      <div className="text-2xl font-bold">
        Forever <span className="text-pink-200">Moment</span>
      </div>

      {/* CENTER - SEARCH */}
      <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-[40%]">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search venues, vendors..."
          className="ml-2 w-full outline-none text-gray-700"
        />
      </div>

      {/* RIGHT - ACTIONS */}
      <div className="flex items-center gap-4 text-sm">
        <span className="cursor-pointer hover:underline">Booking Tracking</span>
        <span className="cursor-pointer hover:underline">Login</span>

        <select className="text-black rounded-md px-2 py-1">
          <option> delhi </option>
                   <option> goa  </option>
          <option> Mumbai </option>
          <option> Haryana  </option>
          <option> Noida </option>
          <option> GUrgaon </option>




        </select>
      </div>
    </div>
  );
};

export default UpperNavbar;
