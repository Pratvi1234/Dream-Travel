// script.js
(() => {
    "use strict";
  
    // Initial destination data array
    const destinations = [
      {
        name: "Taj Mahal, Agra",
        description: "The Taj Mahal is a symbol of love and a UNESCO World Heritage site located in Agra, India.",
        packages: [
          { name: "Taj Mahal Sunrise Tour", price: 50 },
          { name: "Taj Mahal and Fatehpur Sikri Tour", price: 80 }
        ]
      },
      {
        name: "Goa Beaches",
        description: "Known for pristine beaches, vibrant nightlife, and rich Portuguese culture.",
        packages: [
          { name: "Goa Beach Holiday", price: 120 },
          { name: "Goa Adventure Water Sports", price: 100 }
        ]
      },
      {
        name: "Jaipur, Rajasthan",
        description: "Jaipur, the Pink City, is known for its palaces, forts, and vibrant culture.",
        packages: [
          { name: "Jaipur Palace and Fort Tour", price: 60 },
          { name: "Jaipur City Sightseeing", price: 75 }
        ]
      },
      {
        name: "Kerala Backwaters",
        description: "The backwaters of Kerala offer serene and scenic boat rides through lush green landscapes.",
        packages: [
          { name: "Backwater Houseboat Cruise", price: 150 },
          { name: "Kerala Backwater and Beach Tour", price: 180 }
        ]
      },
      {
        name: "Leh-Ladakh",
        description: "Known for rugged terrain, scenic monasteries, and adventurous trekking routes.",
        packages: [
          { name: "Leh-Ladakh Adventure Tour", price: 200 },
          { name: "Leh and Pangong Lake Tour", price: 220 }
        ]
      }
    ];
  
    // DOM elements
    const navLinks = document.querySelectorAll('nav.navbar ul.menu a');
    const pages = document.querySelectorAll('section.page');
  
    const homeCta = document.getElementById('home-cta');
  
    // Destinations page elements
    const destinationsPage = document.getElementById('destinations-page');
    const destinationList = document.getElementById('destination-list');
    const destinationDetails = document.getElementById('destination-details');
    const detailName = document.getElementById('destination-name-detail');
    const detailDesc = document.getElementById('destination-desc-detail');
    const detailPackages = document.getElementById('destination-packages');
    const backButton = document.getElementById('back-button');
  
    // Add Destination Form elements
    const addForm = document.getElementById('add-destination-form');
    const inputName = document.getElementById('destination-name');
    const inputDesc = document.getElementById('destination-desc');
    const inputPkgName = document.getElementById('travel-package-name');
    const inputPkgPrice = document.getElementById('travel-package-price');
  
    // Show a page by id and update nav active states
    function showPage(pageId) {
      pages.forEach(page => {
        const isActive = page.id === pageId;
        page.hidden = !isActive;
        if(isActive) page.classList.add('active');
        else page.classList.remove('active');
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === pageId);
      });
      // Focus first focusable element on shown page for accessibility
      const page = document.getElementById(pageId);
      if(page){
        setTimeout(() => {
          const focusable = page.querySelector('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
          if(focusable) focusable.focus();
          else page.focus();
        }, 100);
      }
    }
  
    // Render destinations list on Destinations page
    function renderDestinationList() {
      destinationList.innerHTML = '';
      destinations.forEach((dest, idx) => {
        const li = document.createElement('li');
        li.textContent = dest.name;
        li.tabIndex = 0;
        li.setAttribute('role', 'button');
        li.setAttribute('aria-label', `View details for ${dest.name}`);
        li.addEventListener('click', () => showDestinationDetails(idx));
        li.addEventListener('keydown', e => {
          if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showDestinationDetails(idx);
          }
        });
        destinationList.appendChild(li);
      });
      // Hide details panel when rendering list
      destinationDetails.hidden = true;
    }
  
    // Show destination details panel with data
    function showDestinationDetails(index) {
      const dest = destinations[index];
      if(!dest) return;
      detailName.textContent = dest.name;
      detailDesc.textContent = dest.description;
      detailPackages.innerHTML = '';
      if(dest.packages && dest.packages.length){
        dest.packages.forEach(pkg => {
          const li = document.createElement('li');
          li.textContent = `${pkg.name} - ₹${pkg.price}`;
          detailPackages.appendChild(li);
        });
      } else {
        detailPackages.innerHTML = '<li>No packages available</li>';
      }
      // Hide list and show details
      destinationList.parentElement.hidden = true;
      destinationDetails.hidden = false;
      destinationDetails.focus();
    }
  
    // Show destinations list again (hide details)
    backButton.addEventListener('click', () => {
      destinationDetails.hidden = true;
      destinationList.parentElement.hidden = false;
      destinationList.parentElement.focus();
    });
  
    // Form submission to add new destination
    addForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = inputName.value.trim();
      const desc = inputDesc.value.trim();
      const pkgName = inputPkgName.value.trim();
      const pkgPrice = Number(inputPkgPrice.value);
      if(!name || !desc || !pkgName || !pkgPrice || isNaN(pkgPrice) || pkgPrice <= 0) {
        alert('Please fill all fields with valid values.');
        return;
      }
      destinations.push({
        name, description: desc, packages: [{ name: pkgName, price: pkgPrice }]
      });
      renderDestinationList();
      addForm.reset();
      alert('Destination added successfully!');
    });
  
    // Navbar link click handlers
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.target;
        showPage(target);
        if(target === 'destinations-page') renderDestinationList();
      });
    });
  
    // Home CTA button to navigate to destinations page
    homeCta.addEventListener('click', () => {
      showPage('destinations-page');
      renderDestinationList();
    });
  
    // Image gallery click on home page opens destination details
    document.querySelectorAll('#home-page .image-gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const idx = Number(img.dataset.destIndex);
        if(!isNaN(idx)) {
          showPage('destinations-page');
          renderDestinationList();
          setTimeout(() => showDestinationDetails(idx), 150);
        }
      });
      img.addEventListener('keydown', e => {
        if((e.key === 'Enter' || e.key === ' ') && img.dataset.destIndex) {
          e.preventDefault();
          const idx = Number(img.dataset.destIndex);
          if(!isNaN(idx)) {
            showPage('destinations-page');
            renderDestinationList();
            setTimeout(() => showDestinationDetails(idx), 150);
          }
        }
      });
    });
  
    // Initialize on load
    renderDestinationList();
  })();
  