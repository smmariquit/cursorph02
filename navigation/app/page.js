'use client';

import { useState, useEffect } from 'react';
import { getAllAmenities, searchAmenities, filterByStatus, filterByDistance } from './data/airportData';
import Chatbot from './components/Chatbot';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [distanceFilter, setDistanceFilter] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [filteredAmenities, setFilteredAmenities] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotSearch = (query) => {
    setSearchQuery(query);
    setSelectedType('all');
    setStatusFilter('all');
    setDistanceFilter('');
  };

  useEffect(() => {
    const allAmenities = getAllAmenities();
    setAmenities(allAmenities);
    setFilteredAmenities(allAmenities);
  }, []);

  useEffect(() => {
    let filtered = amenities;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(amenity => amenity.type === selectedType);
    }

    // Filter by search query
    filtered = searchAmenities(searchQuery, filtered);

    // Filter by status
    filtered = filterByStatus(filtered, statusFilter);

    // Filter by distance
    if (distanceFilter) {
      filtered = filterByDistance(filtered, parseFloat(distanceFilter));
    }

    setFilteredAmenities(filtered);
  }, [searchQuery, selectedType, statusFilter, distanceFilter, amenities]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-green-600 bg-green-100';
      case 'closed': return 'text-red-600 bg-red-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'boarding': return 'text-blue-600 bg-blue-100';
      case 'delayed': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'restaurant': return '🍽️';
      case 'restroom': return '🚻';
      case 'gate': return '✈️';
      case 'shop': return '🛍️';
      default: return '📍';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <span className="text-3xl">✈️</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Cebu Pacific Concierge</h1>
                <p className="text-red-100 mt-2 text-lg">Your personal airport guide</p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(!showChatbot)}
              className="bg-white hover:bg-gray-50 text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-2xl">🤖</span>
              Ask Assistant
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => {
                setSelectedType('restaurant');
                setStatusFilter('open');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">🍽️</span>
              <span className="font-bold">Open Restaurants</span>
            </button>
            <button
              onClick={() => {
                setSelectedType('restroom');
                setStatusFilter('open');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">🚻</span>
              <span className="font-bold">Restrooms</span>
            </button>
            <button
              onClick={() => {
                setSelectedType('gate');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">✈️</span>
              <span className="font-bold">Flight Gates</span>
            </button>
            <button
              onClick={() => {
                setSelectedType('shop');
                setStatusFilter('open');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">🛍️</span>
              <span className="font-bold">Shops</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Search & Filter</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What are you looking for?
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Try: 'vegetarian food near gate 4' or 'nearest restroom'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-500 text-lg transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400 text-xl">🔍</span>
                </div>
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Category
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-500 text-lg transition-all duration-300"
              >
                <option value="all">All Categories</option>
                <option value="restaurant">🍽️ Restaurants</option>
                <option value="restroom">🚻 Restrooms</option>
                <option value="gate">✈️ Gates</option>
                <option value="shop">🛍️ Shops</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-500 text-lg transition-all duration-300"
              >
                <option value="all">All Status</option>
                <option value="open">✅ Open</option>
                <option value="closed">❌ Closed</option>
                <option value="maintenance">🔧 Maintenance</option>
                <option value="boarding">🛫 Boarding</option>
                <option value="delayed">⏰ Delayed</option>
              </select>
            </div>
          </div>

          {/* Distance Filter */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Maximum Distance (miles)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={distanceFilter || 2}
                onChange={(e) => setDistanceFilter(e.target.value)}
                className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="bg-red-100 px-4 py-2 rounded-lg">
                <span className="font-bold text-red-700">{distanceFilter || 2} miles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredAmenities.length} Result{filteredAmenities.length !== 1 ? 's' : ''} Found
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-2xl">📍</span>
            <span>Sorted by distance</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => (
            <div key={amenity.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{getTypeIcon(amenity.type)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{amenity.name}</h3>
                    <p className="text-sm text-gray-600 capitalize font-medium">{amenity.type}</p>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(amenity.status)}`}>
                  {amenity.status === 'open' ? '✅ Open' : 
                   amenity.status === 'closed' ? '❌ Closed' :
                   amenity.status === 'maintenance' ? '🔧 Maintenance' :
                   amenity.status === 'boarding' ? '🛫 Boarding' :
                   amenity.status === 'delayed' ? '⏰ Delayed' : amenity.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg">🏢</span>
                  <span className="font-semibold">Terminal {amenity.location.terminal}, Gate {amenity.location.gate}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg">📏</span>
                  <span className="font-semibold">{amenity.distance} miles away</span>
                </div>
                
                {amenity.hours && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-lg">🕒</span>
                    <span className="font-semibold">{amenity.hours}</span>
                  </div>
                )}
                
                {amenity.rating && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-lg">⭐</span>
                    <span className="font-semibold">{amenity.rating}/5 rating</span>
                  </div>
                )}
                
                {amenity.flight && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-lg">✈️</span>
                    <span className="font-semibold">{amenity.flight} to {amenity.destination}</span>
                  </div>
                )}
                
                {amenity.features && amenity.features.length > 0 && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {amenity.features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAmenities.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No results found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or use the quick action buttons above</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setStatusFilter('all');
                  setDistanceFilter('');
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chatbot */}
      {showChatbot && (
        <Chatbot
          isOpen={showChatbot}
          onClose={() => setShowChatbot(false)}
          onSearch={handleChatbotSearch}
        />
      )}
    </div>
  );
}
