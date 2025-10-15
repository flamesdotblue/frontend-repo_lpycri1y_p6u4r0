import React from 'react';
import HeaderBar from './HeaderBar';
import { Star, Tag, ChevronRight } from 'lucide-react';

export default function EntryPage({ onToggleStudentMode, studentMode, goToDelivery }) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderBar studentMode={studentMode} onToggleStudentMode={() => { onToggleStudentMode(); goToDelivery(); }} />

      <div className="mx-auto max-w-md px-4 py-4">
        <div className="rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 p-4 border border-orange-200">
          <h1 className="font-bold text-lg text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-600">Explore restaurants, offers, and quick picks around you.</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">Popular near you</p>
          <button className="text-xs text-[#FC8019] font-semibold flex items-center gap-1">See all <ChevronRight size={14} /></button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="h-24 bg-gray-100" />
              <div className="p-3">
                <p className="text-sm font-semibold">Tasty Bites #{i}</p>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Star size={14} className="text-green-600" /> 4.{i} • 30 mins
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                  <Tag size={14} className="text-[#FC8019]" /> 20% off up to ₹50
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-purple-200 bg-purple-50 p-4">
          <p className="text-sm font-semibold text-[#3B009D]">Tip</p>
          <p className="text-xs text-purple-900/80 mt-1">Turn on Student Mode to unlock campus-exclusive perks and a fresh look.</p>
        </div>
      </div>
    </div>
  );
}
