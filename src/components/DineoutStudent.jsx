import React from 'react';
import HeaderBar from './HeaderBar';
import { PartyPopper, Users, Split, MapPin, Star, ChevronRight } from 'lucide-react';

export default function DineoutStudent({ onToggleStudentMode, studentMode }) {
  return (
    <div className="min-h-screen bg-[#FFF6EE] text-gray-900">
      <HeaderBar studentMode={studentMode} onToggleStudentMode={onToggleStudentMode} showVegToggle={false} />

      {/* Birthday Bookings Banner */}
      <section className="mx-auto max-w-md px-4 mt-4">
        <div className="rounded-2xl bg-gradient-to-r from-[#3B009D] to-purple-700 p-4 text-white">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center"><PartyPopper /></div>
            <div className="flex-1">
              <h2 className="text-lg font-extrabold">Celebrate Big, Pay Less 🎉</h2>
              <ul className="mt-1 text-sm space-y-0.5">
                <li>• Flat 25% off for 6+ guests</li>
                <li>• Birthday cashback 10–15%</li>
                <li>• Free dessert/drink coupons</li>
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="rounded-lg bg-white text-[#3B009D] text-sm font-semibold py-2">Book Birthday</button>
                <button className="rounded-lg bg-white/15 text-white border border-white/30 text-sm font-semibold py-2">Group Power-Up</button>
              </div>
              <p className="mt-2 text-xs text-white/80">Each RSVP adds to your discount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Bill Integration */}
      <section className="mx-auto max-w-md px-4 mt-6">
        <div className="rounded-2xl bg-white border border-green-200 p-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-green-100 text-green-700"><Split size={18} /></div>
            <div>
              <h3 className="text-base font-semibold">Split Bill</h3>
              <p className="text-xs text-gray-600">Enable UPI/Splitwise right after your meal.</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            {['UPI','Splitwise','Cash'].map(opt => (
              <button key={opt} className="border rounded-lg py-2 bg-gray-50 hover:bg-green-50 border-green-200 text-gray-700">{opt}</button>
            ))}
          </div>
          <button className="mt-3 w-full rounded-lg bg-green-600 text-white text-sm font-semibold py-2">Pay your share</button>
        </div>
      </section>

      {/* Listings with Campus tab */}
      <section className="mx-auto max-w-md px-4 mt-6 pb-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Buffets</button>
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Luxury Dining</button>
            <button className="px-3 py-1 rounded-full bg-orange-100 text-[#FC8019] font-semibold">🎉 Campus Parties</button>
          </div>
          <button className="text-xs text-[#FC8019] font-semibold flex items-center gap-1">See all <ChevronRight size={14} /></button>
        </div>
        <div className="mt-3 space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="h-28 bg-gray-100" />
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Party-Friendly Place #{i}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-[#FC8019] font-semibold">Student-Friendly</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <Star size={14} className="text-green-600" /> 4.{i} • <MapPin size={14} /> 1.{i} km
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
