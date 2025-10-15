import React from 'react';
import { GraduationCap, Leaf, MapPin, Search } from 'lucide-react';

export default function HeaderBar({ studentMode, onToggleStudentMode, showVegToggle = true }) {
  return (
    <div className={`w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${studentMode ? 'bg-[#FFF6EE]' : 'bg-white'}`}>
      <div className="mx-auto max-w-md px-4 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800">
            <MapPin size={18} className="text-[#FC8019]" />
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Deliver to</p>
              <p className="text-sm font-semibold">Campus Hostel, Block A</p>
            </div>
          </div>
          <button
            className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {showVegToggle && (
            <button className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
              <Leaf size={14} className="text-green-600" /> Veg
            </button>
          )}

          <button
            onClick={onToggleStudentMode}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition border ${
              studentMode
                ? 'bg-[#3B009D] text-white border-[#3B009D]'
                : 'bg-white text-[#3B009D] border-[#3B009D]'
            }`}
            aria-pressed={studentMode}
          >
            <GraduationCap size={14} />
            {studentMode ? 'Student Mode On' : 'Student Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}
