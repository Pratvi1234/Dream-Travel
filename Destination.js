// data/destinations.js

const destinations = [
    {
      name: "Taj Mahal, Agra",
      description: "The Taj Mahal is a symbol of love and a UNESCO World Heritage site located in Agra, India.",
      packages: [
        { name: "Taj Mahal Sunrise Tour", price: 50 },
        { name: "Taj Mahal and Fatehpur Sikri Tour", price: 80 }
      ],
      image: "https://images.unsplash.com/photo-1549887539-6c45f3873833?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Goa Beaches",
      description: "Goa is famous for its pristine beaches, vibrant nightlife, and rich Portuguese culture.",
      packages: [
        { name: "Goa Beach Holiday", price: 120 },
        { name: "Goa Adventure Water Sports", price: 100 }
      ],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jaipur, Rajasthan",
      description: "Jaipur, the Pink City, is known for its palaces, forts, and vibrant culture.",
      packages: [
        { name: "Jaipur Palace and Fort Tour", price: 60 },
        { name: "Jaipur City Sightseeing", price: 75 }
      ],
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kerala Backwaters",
      description: "The backwaters of Kerala offer serene and scenic boat rides through lush green landscapes.",
      packages: [
        { name: "Backwater Houseboat Cruise", price: 150 },
        { name: "Kerala Backwater and Beach Tour", price: 180 }
      ],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Leh-Ladakh",
      description: "Leh-Ladakh is known for its rugged terrain, scenic monasteries, and adventurous trekking routes.",
      packages: [
        { name: "Leh-Ladakh Adventure Tour", price: 200 },
        { name: "Leh and Pangong Lake Tour", price: 220 }
      ],
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Function to get all destinations
  function getAll() {
      return destinations;
  }
  
  // Function to add a new destination
  function add(destination) {
      destinations.push(destination);
      return destination;
  }
  
  module.exports = {
    getAll,
    add,
  };
  