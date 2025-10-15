import React from 'react';
import HeaderBar from './HeaderBar';
import { Star, Tag, ChevronRight } from 'lucide-react';

const foodImages = [
  'https://images.unsplash.com/photo-1604908554027-8d8f4b3b3d99?q=80&w=1200&auto=format&fit=crop', // burger
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop', // pizza
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop', // biryani
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop', // dosa
];

export default function EntryPage({ onToggleStudentMode, studentMode, goToDelivery }) {
  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      <HeaderBar studentMode={studentMode} onToggleStudentMode={() => { onToggleStudentMode(); goToDelivery(); }} />

      <div className="mx-auto max-w-md px-4 py-4">
        <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 p-4 border border-orange-200">
          <h1 className="font-extrabold text-xl text-gray-900">What are you craving today?</h1>
          <p className="text-sm text-gray-700">Order from nearby favourites with exclusive campus offers.</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-900">Popular near you</p>
          <button className="text-xs text-[#FC8019] font-semibold flex items-center gap-1">See all <ChevronRight size={14} /></button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="h-24 w-full">
                <img src={foodImages[(i-1)%foodImages.length]} alt={`Popular dish ${i}`} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900">Tasty Bites #{i}</p>
                <div className="flex items-center gap-1 text-xs text-gray-700">
                  <Star size={14} className="text-green-600" /> 4.{i} • 25-35 mins
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-600">
                  <Tag size={14} className="text-[#FC8019]" /> 20% off up to ₹50
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#3B009D]/20 bg-[#3B009D]/5 p-4">
          <p className="text-sm font-semibold text-[#3B009D]">Tip</p>
          <p className="text-xs text-[#3B009D]/80 mt-1">Turn on Student Mode to unlock campus-exclusive perks, curated menus and faster delivery windows.</p>
        </div>
      </div>
    </div>
  );
}
