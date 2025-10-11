// Mock airport data for the concierge app
export const airportData = {
  restaurants: [
    {
      id: 1,
      name: "Sky Lounge Café",
      type: "restaurant",
      category: "coffee",
      location: { terminal: "A", gate: "A12", coordinates: { x: 120, y: 80 } },
      status: "open",
      hours: "5:00 AM - 11:00 PM",
      rating: 4.2,
      features: ["vegetarian", "vegan", "gluten-free"],
      distance: 0.2
    },
    {
      id: 2,
      name: "Gate 4 Bistro",
      type: "restaurant",
      category: "casual",
      location: { terminal: "B", gate: "B4", coordinates: { x: 200, y: 150 } },
      status: "open",
      hours: "6:00 AM - 10:00 PM",
      rating: 3.8,
      features: ["vegetarian", "fast-food"],
      distance: 0.5
    },
    {
      id: 3,
      name: "Terminal C Deli",
      type: "restaurant",
      category: "deli",
      location: { terminal: "C", gate: "C8", coordinates: { x: 300, y: 200 } },
      status: "closed",
      hours: "7:00 AM - 9:00 PM",
      rating: 4.0,
      features: ["vegetarian", "sandwiches"],
      distance: 0.8
    },
    {
      id: 4,
      name: "Asian Fusion Express",
      type: "restaurant",
      category: "asian",
      location: { terminal: "A", gate: "A5", coordinates: { x: 80, y: 120 } },
      status: "open",
      hours: "24/7",
      rating: 4.5,
      features: ["vegetarian", "vegan", "halal"],
      distance: 0.3
    }
  ],
  restrooms: [
    {
      id: 5,
      name: "Restroom A12",
      type: "restroom",
      location: { terminal: "A", gate: "A12", coordinates: { x: 125, y: 85 } },
      status: "open",
      features: ["accessible", "family"],
      distance: 0.2
    },
    {
      id: 6,
      name: "Restroom B4",
      type: "restroom",
      location: { terminal: "B", gate: "B4", coordinates: { x: 205, y: 155 } },
      status: "open",
      features: ["accessible"],
      distance: 0.5
    },
    {
      id: 7,
      name: "Restroom C8",
      type: "restroom",
      location: { terminal: "C", gate: "C8", coordinates: { x: 305, y: 205 } },
      status: "maintenance",
      features: ["accessible", "family"],
      distance: 0.8
    }
  ],
  gates: [
    {
      id: 8,
      name: "Gate A12",
      type: "gate",
      location: { terminal: "A", gate: "A12", coordinates: { x: 120, y: 80 } },
      status: "boarding",
      flight: "AA1234",
      destination: "New York",
      distance: 0.2
    },
    {
      id: 9,
      name: "Gate B4",
      type: "gate",
      location: { terminal: "B", gate: "B4", coordinates: { x: 200, y: 150 } },
      status: "boarding",
      flight: "DL5678",
      destination: "Los Angeles",
      distance: 0.5
    },
    {
      id: 10,
      name: "Gate C8",
      type: "gate",
      location: { terminal: "C", gate: "C8", coordinates: { x: 300, y: 200 } },
      status: "delayed",
      flight: "UA9012",
      destination: "Chicago",
      distance: 0.8
    }
  ],
  shops: [
    {
      id: 11,
      name: "Duty Free Store",
      type: "shop",
      category: "retail",
      location: { terminal: "A", gate: "A1", coordinates: { x: 50, y: 50 } },
      status: "open",
      hours: "6:00 AM - 11:00 PM",
      distance: 0.1
    },
    {
      id: 12,
      name: "Tech Store",
      type: "shop",
      category: "electronics",
      location: { terminal: "B", gate: "B10", coordinates: { x: 250, y: 100 } },
      status: "open",
      hours: "7:00 AM - 10:00 PM",
      distance: 0.6
    }
  ]
};

// Helper function to get all amenities
export const getAllAmenities = () => {
  return [
    ...airportData.restaurants,
    ...airportData.restrooms,
    ...airportData.gates,
    ...airportData.shops
  ];
};

// Helper function to search amenities
export const searchAmenities = (query, amenities) => {
  if (!query) return amenities;
  
  const searchTerm = query.toLowerCase();
  return amenities.filter(amenity => 
    amenity.name.toLowerCase().includes(searchTerm) ||
    amenity.type.toLowerCase().includes(searchTerm) ||
    (amenity.category && amenity.category.toLowerCase().includes(searchTerm)) ||
    (amenity.location && amenity.location.gate.toLowerCase().includes(searchTerm)) ||
    (amenity.features && amenity.features.some(feature => 
      feature.toLowerCase().includes(searchTerm)
    ))
  );
};

// Helper function to filter by status
export const filterByStatus = (amenities, status) => {
  if (status === 'all') return amenities;
  return amenities.filter(amenity => amenity.status === status);
};

// Helper function to filter by distance
export const filterByDistance = (amenities, maxDistance) => {
  if (!maxDistance) return amenities;
  return amenities.filter(amenity => amenity.distance <= maxDistance);
};
