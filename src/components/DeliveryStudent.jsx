import React from 'react';
import HeaderBar from './HeaderBar';
import Spline from '@splinetool/react-spline';
import { GraduationCap, Clock, Users, ChevronRight, Star, Tag } from 'lucide-react';

const campusDishes = [
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop', // thali
  'https://images.unsplash.com/photo-1598184277221-37d169d4eeda?q=80&w=1200&auto=format&fit=crop', // noodles
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', // sandwich
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop', // pizza slice
];

const restaurantCovers = [
  'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop', // cafe
  'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop', // curry
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop', // tacos
  'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=1200&auto=format&fit=crop', // pasta
];

export default function DeliveryStudent({ onToggleStudentMode, studentMode }) {
  return (
    <div className="min-h-screen bg-[#FFF6EE] text-gray-900">
      <HeaderBar studentMode={studentMode} onToggleStudentMode={onToggleStudentMode} />

      {/* Hero: Swiggy Mess */}
      <section className="relative mx-auto max-w-md px-0">
        <div className="h-56 w-full overflow-hidden">
          <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFF6EE] via-transparent to-transparent" />
        <div className="px-4 -mt-12 relative">
          <div className="rounded-2xl bg-white shadow-lg border border-orange-100 p-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FC8019]/10 text-[#FC8019]">
                <GraduationCap size={18} />
              </div>
              <div>
                <h1 className="text-lg font-extrabold">Swiggy Mess: Your Campus Dabba</h1>
                <p className="text-xs text-gray-600 -mt-0.5">Subscription meals, priced for students.</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">Balanced thalis, weekly menus, and on-time slots. Eat better without burning your pocket.</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="rounded-lg bg-[#FC8019] text-white text-sm font-semibold py-2">Subscribe Now</button>
              <button className="rounded-lg border border-[#FC8019] text-[#FC8019] text-sm font-semibold py-2 bg-white">View This Week’s Menu</button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Scheduled Delivery */}
      <section className="mx-auto max-w-md px-4 mt-6">
        <div className="rounded-2xl bg-white border border-purple-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-purple-100 text-[#3B009D]"> <Clock size={18} /> </div>
              <div>
                <h2 className="text-base font-semibold">Scheduled Delivery</h2>
                <p className="text-xs text-gray-600">Get it steaming hot when you want it.</p>
              </div>
            </div>
            <button className="text-sm font-semibold text-white bg-[#3B009D] px-3 py-1.5 rounded-lg">Schedule</button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            {['12:30 PM','1:00 PM','1:30 PM'].map(t => (
              <button key={t} className="border rounded-lg py-2 bg-gray-50 hover:bg-purple-50 border-purple-200 text-gray-700">{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: Campus Menu */}
      <section className="mx-auto max-w-md px-4 mt-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-base font-bold">Campus Menu</h3>
          <button className="text-xs text-[#FC8019] font-semibold flex items-center gap-1">See all <ChevronRight size={14} /></button>
        </div>
        <div className="mt-2 flex gap-2 text-xs">
          <button className="px-3 py-1 rounded-full bg-orange-100 text-[#FC8019] font-semibold">Friends order</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Seniors loved</button>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {campusDishes.map((src, i) => (
            <div key={i} className="min-w-[160px] rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="h-24 w-full">
                <img src={src} alt={`Trending dish ${i+1}`} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold">Trending Dish #{i+1}</p>
                <p className="text-xs text-gray-600">From Hostel Canteen</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature: Similar Choice Trace */}
      <section className="mx-auto max-w-md px-4 mt-6">
        <h3 className="text-base font-bold">Since you loved Butter Chicken…</h3>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {[1,2,3].map(i => (
            <div key={i} className="min-w-[220px] rounded-xl border bg-white border-orange-100 p-4">
              <p className="text-sm font-semibold">Similar Pick #{i}</p>
              <p className="text-xs text-gray-600">Rich gravy, campus favorite</p>
              <button className="mt-3 text-xs font-semibold text-white bg-[#FC8019] px-3 py-1.5 rounded-lg self-start">Add</button>
            </div>
          ))}
        </div>
      </section>

      {/* Feature: Group Orders & Bill Split */}
      <section className="mx-auto max-w-md px-4 mt-6">
        <div className="rounded-2xl bg-white border border-green-200 p-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-green-100 text-green-700"><Users size={18} /></div>
            <div>
              <h2 className="text-base font-semibold">Group Orders & Split Bill</h2>
              <p className="text-xs text-gray-600">Order together, split via UPI/Splitwise.</p>
            </div>
          </div>
          <button className="mt-3 w-full rounded-lg bg-green-600 text-white text-sm font-semibold py-2">Start Group Order</button>
        </div>
      </section>

      {/* Normal Restaurant Listing */}
      <section className="mx-auto max-w-md px-4 mt-6 pb-24">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold">Restaurants</h3>
          <div className="flex items-center gap-2 text-xs">
            <button className="rounded-full border px-3 py-1 bg-white">Sort</button>
            <button className="rounded-full border px-3 py-1 bg-white">Offers</button>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[0,1,2,3].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="h-24 w-full">
                <img src={restaurantCovers[i % restaurantCovers.length]} alt={`Restaurant ${i+1}`} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Campus Bites #{i+1}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-[#FC8019] font-semibold">Campus Picks</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-700">
                  <Star size={14} className="text-green-600" /> 4.{i+1} • 25-35 mins
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-600">
                  <Tag size={14} className="text-[#FC8019]" /> Up to 30% off
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
