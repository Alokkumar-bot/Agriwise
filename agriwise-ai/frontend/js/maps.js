/**
 * 🌾 AGRIWISE AI - Map Services & Interactive India Shortage Map
 * Leaflet.js GPS picker + Interactive SVG National Crop Shortage Map.
 */

const AgriMaps = {
  // 1. Initialize Leaflet Farm Location Picker Map
  initFarmMap(elementId, initialLat, initialLon, onLocationChange) {
    if (!window.L) {
      console.warn("Leaflet library not loaded");
      return null;
    }

    const lat = initialLat || 30.9010;
    const lon = initialLon || 75.8573;

    const map = L.map(elementId).setView([lat, lon], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let marker = L.marker([lat, lon], { draggable: true }).addTo(map);
    marker.bindPopup("<b>Selected Farm Location</b><br>Sahnewal, Ludhiana").openPopup();

    const setLocation = (newLat, newLon, popupHtml, zoomLevel = 12) => {
      marker.setLatLng([newLat, newLon]);
      if (popupHtml) {
        marker.setPopupContent(popupHtml);
        marker.openPopup();
      }
      map.flyTo([newLat, newLon], zoomLevel, { duration: 0.8 });
    };

    marker.on('dragend', (e) => {
      const pos = marker.getLatLng();
      if (onLocationChange) {
        onLocationChange(pos.lat, pos.lng);
      }
    });

    map.on('click', (e) => {
      marker.setLatLng(e.latlng);
      if (onLocationChange) {
        onLocationChange(e.latlng.lat, e.latlng.lng);
      }
    });

    return { map, marker, setLocation };
  },

  // 1.1 Comprehensive Indian States & Agricultural Districts Agronomic Dataset
  INDIAN_STATES_DATA: {
    "Punjab": {
      icon: "🌾",
      code: "PB",
      center: [30.9010, 75.8573],
      elevation_m: 244,
      soil: "Alluvial Loam",
      irrigation: "Subsurface Drip + Tube-well",
      water_source: "Deep Groundwater Tube-well (180 ft)",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Wheat (PBW 550)",
      typical_curr_crop: "Maize (Corn)",
      districts: [
        { name: "Ludhiana", lat: 30.9010, lon: 75.8573 },
        { name: "Jalandhar", lat: 31.3260, lon: 75.5762 },
        { name: "Amritsar", lat: 31.6340, lon: 74.8723 },
        { name: "Patiala", lat: 30.3398, lon: 76.3869 },
        { name: "Bathinda", lat: 30.2110, lon: 74.9455 },
        { name: "Sangrur", lat: 30.2458, lon: 75.8421 },
        { name: "Firozpur", lat: 30.9250, lon: 74.6122 },
        { name: "Hoshiarpur", lat: 31.5273, lon: 75.9149 },
        { name: "Fatehgarh Sahib", lat: 30.6480, lon: 76.3980 },
        { name: "Khanna", lat: 30.7068, lon: 76.2205 },
        { name: "Moga", lat: 30.8165, lon: 75.1717 },
        { name: "Fazilka", lat: 30.4042, lon: 74.0270 },
        { name: "Kapurthala", lat: 31.3802, lon: 75.3819 },
        { name: "Mansa", lat: 29.9984, lon: 75.3949 },
        { name: "Pathankot", lat: 32.2689, lon: 75.6496 },
        { name: "Rupnagar", lat: 30.9664, lon: 76.5331 },
        { name: "Barnala", lat: 30.3819, lon: 75.5464 },
        { name: "Faridkot", lat: 30.6769, lon: 74.7583 },
        { name: "Tarn Taran", lat: 31.4526, lon: 74.9255 }
      ]
    },
    "Haryana": {
      icon: "🌽",
      code: "HR",
      center: [29.6857, 76.9905],
      elevation_m: 228,
      soil: "Sandy Loam",
      irrigation: "Overhead Sprinkler System",
      water_source: "Tube-well Borewell (150 ft)",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Mustard (Pusa Bold)",
      typical_curr_crop: "Basmati Rice (Pusa 1509)",
      districts: [
        { name: "Karnal", lat: 29.6857, lon: 76.9905 },
        { name: "Kurukshetra", lat: 29.9695, lon: 76.8783 },
        { name: "Ambala", lat: 30.3782, lon: 76.7767 },
        { name: "Hisar", lat: 29.1492, lon: 75.7217 },
        { name: "Rohtak", lat: 28.8955, lon: 76.6066 },
        { name: "Sirsa", lat: 29.5349, lon: 75.0298 },
        { name: "Panipat", lat: 29.3909, lon: 76.9635 },
        { name: "Sonipat", lat: 28.9931, lon: 77.0151 },
        { name: "Jind", lat: 29.3140, lon: 76.3147 },
        { name: "Fatehabad", lat: 29.5152, lon: 75.4526 },
        { name: "Kaithal", lat: 29.8015, lon: 76.3996 },
        { name: "Yamunanagar", lat: 30.1290, lon: 77.2674 },
        { name: "Rewari", lat: 28.1920, lon: 76.6191 },
        { name: "Gurugram", lat: 28.4595, lon: 77.0266 },
        { name: "Bhiwani", lat: 28.7932, lon: 76.1390 },
        { name: "Palwal", lat: 28.1437, lon: 77.3258 }
      ]
    },
    "Maharashtra": {
      icon: "🍇",
      code: "MH",
      center: [19.7515, 75.7139],
      elevation_m: 560,
      soil: "Black Cotton Soil",
      irrigation: "Precision Micro-Drip + Fertigation",
      water_source: "Godavari Canal / River Lift",
      water_availability: "Moderate Deficit",
      typical_prev_crop: "Soybean (JS 335)",
      typical_curr_crop: "Bt Cotton / Onion (Nashik Red)",
      districts: [
        { name: "Nashik", lat: 19.9975, lon: 73.7898 },
        { name: "Pune", lat: 18.5204, lon: 73.8567 },
        { name: "Nagpur", lat: 21.1458, lon: 79.0882 },
        { name: "Chhatrapati Sambhajinagar", lat: 19.8762, lon: 75.3433 },
        { name: "Kolhapur", lat: 16.7050, lon: 74.2433 },
        { name: "Solapur", lat: 17.6599, lon: 75.9064 },
        { name: "Ahilyanagar (Ahmednagar)", lat: 19.0948, lon: 74.7480 },
        { name: "Satara", lat: 17.6805, lon: 73.9997 },
        { name: "Jalgaon", lat: 21.0077, lon: 75.5626 },
        { name: "Amravati", lat: 20.9374, lon: 77.7796 },
        { name: "Sangli", lat: 16.8524, lon: 74.5815 },
        { name: "Nanded", lat: 19.1383, lon: 77.3210 },
        { name: "Latur", lat: 18.4088, lon: 76.5604 },
        { name: "Jalna", lat: 19.8410, lon: 75.8864 },
        { name: "Buldhana", lat: 20.5292, lon: 76.1843 },
        { name: "Yavatmal", lat: 20.3888, lon: 78.1204 },
        { name: "Beed", lat: 18.9891, lon: 75.7601 },
        { name: "Akola", lat: 20.7002, lon: 77.0082 },
        { name: "Chandrapur", lat: 19.9615, lon: 79.2961 }
      ]
    },
    "Uttar Pradesh": {
      icon: "🌾",
      code: "UP",
      center: [26.8467, 80.9462],
      elevation_m: 123,
      soil: "Alluvial Loam",
      irrigation: "Canal Siphon + Furrow Basin",
      water_source: "Sharda Canal & Electric Tube-well",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Sugarcane (Co 0238)",
      typical_curr_crop: "Wheat (HD 2967)",
      districts: [
        { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
        { name: "Varanasi", lat: 25.3176, lon: 82.9739 },
        { name: "Agra", lat: 27.1767, lon: 78.0081 },
        { name: "Kanpur", lat: 26.4499, lon: 80.3319 },
        { name: "Prayagraj", lat: 25.4358, lon: 81.8463 },
        { name: "Meerut", lat: 28.9845, lon: 77.7064 },
        { name: "Bareilly", lat: 28.3670, lon: 79.4304 },
        { name: "Aligarh", lat: 27.8974, lon: 78.0880 },
        { name: "Gorakhpur", lat: 26.7606, lon: 83.3732 },
        { name: "Moradabad", lat: 28.8386, lon: 78.7733 },
        { name: "Muzaffarnagar", lat: 29.4727, lon: 77.7085 },
        { name: "Mathura", lat: 27.4924, lon: 77.6737 },
        { name: "Sitapur", lat: 27.5645, lon: 80.6829 },
        { name: "Jhansi", lat: 25.4484, lon: 78.5685 },
        { name: "Barabanki", lat: 26.9274, lon: 81.1844 },
        { name: "Basti", lat: 26.7925, lon: 82.7486 },
        { name: "Bulandshahr", lat: 28.4069, lon: 77.8498 }
      ]
    },
    "Madhya Pradesh": {
      icon: "🌱",
      code: "MP",
      center: [23.2599, 77.4126],
      elevation_m: 492,
      soil: "Black Cotton Soil",
      irrigation: "Overhead Sprinkler System",
      water_source: "Narmada Valley Canal & Borewell",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Soybean (JS 9560)",
      typical_curr_crop: "Sharbati Wheat (MP Gold)",
      districts: [
        { name: "Indore", lat: 22.7196, lon: 75.8577 },
        { name: "Bhopal", lat: 23.2599, lon: 77.4126 },
        { name: "Ujjain", lat: 23.1765, lon: 75.7885 },
        { name: "Jabalpur", lat: 23.1815, lon: 79.9864 },
        { name: "Gwalior", lat: 26.2183, lon: 78.1828 },
        { name: "Sagar", lat: 23.8388, lon: 78.7378 },
        { name: "Narmadapuram", lat: 22.7519, lon: 77.7289 },
        { name: "Dewas", lat: 22.9676, lon: 76.0534 },
        { name: "Dhar", lat: 22.5978, lon: 75.2974 },
        { name: "Khargone", lat: 21.8234, lon: 75.6186 },
        { name: "Ratlam", lat: 23.3315, lon: 75.0367 },
        { name: "Vidisha", lat: 23.5251, lon: 77.8081 },
        { name: "Mandsaur", lat: 24.0722, lon: 75.0694 },
        { name: "Neemuch", lat: 24.4746, lon: 74.8711 },
        { name: "Chhindwara", lat: 22.0574, lon: 78.9382 }
      ]
    },
    "Gujarat": {
      icon: "🥜",
      code: "GJ",
      center: [22.2587, 71.1924],
      elevation_m: 60,
      soil: "Sandy Loam",
      irrigation: "Precision Micro-Drip + Fertigation",
      water_source: "Sardar Sarovar Narmada Canal",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Groundnut (GG 20)",
      typical_curr_crop: "Bt Cotton / Castor",
      districts: [
        { name: "Rajkot", lat: 22.3039, lon: 70.8022 },
        { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
        { name: "Surat", lat: 21.1702, lon: 72.8311 },
        { name: "Vadodara", lat: 22.3072, lon: 73.1812 },
        { name: "Bhavnagar", lat: 21.7645, lon: 72.1519 },
        { name: "Junagadh", lat: 21.5222, lon: 70.4579 },
        { name: "Jamnagar", lat: 22.4707, lon: 70.0577 },
        { name: "Mehsana", lat: 23.5880, lon: 72.3693 },
        { name: "Banaskantha", lat: 24.1724, lon: 72.4346 },
        { name: "Amreli", lat: 21.6032, lon: 71.2221 },
        { name: "Anand", lat: 22.5645, lon: 72.9289 },
        { name: "Kheda", lat: 22.7520, lon: 72.6855 },
        { name: "Bharuch", lat: 21.7051, lon: 72.9959 },
        { name: "Patan", lat: 23.8507, lon: 72.1266 }
      ]
    },
    "Rajasthan": {
      icon: "🏜️",
      code: "RJ",
      center: [26.9124, 75.7873],
      elevation_m: 320,
      soil: "Sandy Loam",
      irrigation: "Overhead Sprinkler System",
      water_source: "Indira Gandhi Canal (IGNP) & Deep Tube-well",
      water_availability: "Moderate Deficit",
      typical_prev_crop: "Bajra (Pearl Millet)",
      typical_curr_crop: "Mustard (Pusa Bold) / Cumin",
      districts: [
        { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
        { name: "Jodhpur", lat: 26.2389, lon: 73.0243 },
        { name: "Bikaner", lat: 28.0229, lon: 73.3119 },
        { name: "Kota", lat: 25.2138, lon: 75.8648 },
        { name: "Udaipur", lat: 24.5854, lon: 73.7125 },
        { name: "Sri Ganganagar", lat: 29.9038, lon: 73.8772 },
        { name: "Alwar", lat: 27.5530, lon: 76.6346 },
        { name: "Sikar", lat: 27.6094, lon: 75.1398 },
        { name: "Ajmer", lat: 26.4499, lon: 74.6399 },
        { name: "Nagaur", lat: 27.1983, lon: 73.7493 },
        { name: "Hanumangarh", lat: 29.5815, lon: 74.3294 },
        { name: "Bharatpur", lat: 27.2152, lon: 77.5030 },
        { name: "Pali", lat: 25.7711, lon: 73.3234 },
        { name: "Barmer", lat: 25.7521, lon: 71.3967 },
        { name: "Jhalawar", lat: 24.5973, lon: 76.1610 }
      ]
    },
    "Karnataka": {
      icon: "☕",
      code: "KA",
      center: [14.5204, 75.7224],
      elevation_m: 650,
      soil: "Red Sandy Loam",
      irrigation: "Precision Micro-Drip + Fertigation",
      water_source: "Cauvery / Tungabhadra Canal & Borewell",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Ragi (Finger Millet)",
      typical_curr_crop: "Maize (Hybrid) / Sugarcane",
      districts: [
        { name: "Bengaluru", lat: 12.9716, lon: 77.5946 },
        { name: "Mysuru", lat: 12.2958, lon: 76.6394 },
        { name: "Belagavi", lat: 15.8497, lon: 74.4977 },
        { name: "Hubballi-Dharwad", lat: 15.3647, lon: 75.1240 },
        { name: "Ballari", lat: 15.1394, lon: 76.9214 },
        { name: "Shivamogga", lat: 13.9299, lon: 75.5681 },
        { name: "Davanagere", lat: 14.4644, lon: 75.9218 },
        { name: "Vijayapura", lat: 16.8302, lon: 75.7100 },
        { name: "Hassan", lat: 13.0072, lon: 76.1029 },
        { name: "Mandya", lat: 12.5218, lon: 76.8951 },
        { name: "Kalaburagi", lat: 17.3297, lon: 76.8343 },
        { name: "Raichur", lat: 16.2120, lon: 77.3439 },
        { name: "Tumakuru", lat: 13.3409, lon: 77.1006 }
      ]
    },
    "Andhra Pradesh": {
      icon: "🌶️",
      code: "AP",
      center: [15.9129, 79.7400],
      elevation_m: 85,
      soil: "Red Sandy Loam",
      irrigation: "Canal Siphon + Furrow Basin",
      water_source: "Krishna & Godavari Delta Canal Network",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Chilli (Guntur Teja)",
      typical_curr_crop: "Paddy (BPT 5204 Samba Masuri)",
      districts: [
        { name: "Guntur", lat: 16.3067, lon: 80.4365 },
        { name: "Vijayawada", lat: 16.5062, lon: 80.6480 },
        { name: "Kakinada", lat: 16.9891, lon: 82.2475 },
        { name: "Eluru", lat: 16.7107, lon: 81.0952 },
        { name: "Kurnool", lat: 15.8281, lon: 78.0373 },
        { name: "Anantapur", lat: 14.6819, lon: 77.6006 },
        { name: "Visakhapatnam", lat: 17.6868, lon: 83.2185 },
        { name: "Nellore", lat: 14.4426, lon: 79.9865 },
        { name: "Tirupati", lat: 13.6288, lon: 79.4192 },
        { name: "Kadapa", lat: 14.4673, lon: 78.8242 },
        { name: "Ongole", lat: 15.5057, lon: 80.0499 }
      ]
    },
    "Telangana": {
      icon: "🌱",
      code: "TS",
      center: [17.8495, 79.1151],
      elevation_m: 480,
      soil: "Red Sandy Loam",
      irrigation: "Deep Borewell + Solar Submersible",
      water_source: "Kaleshwaram Lift Project & Borewell",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Bt Cotton",
      typical_curr_crop: "Paddy (Telangana Sona) / Maize",
      districts: [
        { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
        { name: "Warangal", lat: 17.9689, lon: 79.5941 },
        { name: "Karimnagar", lat: 18.4386, lon: 79.1288 },
        { name: "Nizamabad", lat: 18.6725, lon: 78.0941 },
        { name: "Khammam", lat: 17.2473, lon: 80.1514 },
        { name: "Mahabubnagar", lat: 16.7488, lon: 77.9840 },
        { name: "Nalgonda", lat: 17.0577, lon: 79.2684 },
        { name: "Suryapet", lat: 17.1439, lon: 79.6239 },
        { name: "Siddipet", lat: 18.1018, lon: 78.8520 },
        { name: "Jagtial", lat: 18.7946, lon: 78.9126 },
        { name: "Adilabad", lat: 19.6641, lon: 78.5320 }
      ]
    },
    "Tamil Nadu": {
      icon: "🌾",
      code: "TN",
      center: [11.1271, 78.6569],
      elevation_m: 140,
      soil: "Clay Loam",
      irrigation: "Precision Micro-Drip + Fertigation",
      water_source: "Cauvery Delta Canal & Deep Borewell",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Paddy (Ponni Rice)",
      typical_curr_crop: "Sugarcane / Turmeric (Erode Gold)",
      districts: [
        { name: "Coimbatore", lat: 11.0168, lon: 76.9558 },
        { name: "Madurai", lat: 9.9252, lon: 78.1198 },
        { name: "Thanjavur", lat: 10.7870, lon: 79.1378 },
        { name: "Salem", lat: 11.6643, lon: 78.1460 },
        { name: "Tiruchirappalli", lat: 10.7905, lon: 78.7047 },
        { name: "Erode", lat: 11.3410, lon: 77.7172 },
        { name: "Tirunelveli", lat: 8.7139, lon: 77.7567 },
        { name: "Vellore", lat: 12.9165, lon: 79.1325 },
        { name: "Dindigul", lat: 10.3673, lon: 77.9803 },
        { name: "Thiruvarur", lat: 10.7725, lon: 79.6365 },
        { name: "Tiruppur", lat: 11.1085, lon: 77.3411 },
        { name: "Theni", lat: 10.0104, lon: 77.4768 }
      ]
    },
    "West Bengal": {
      icon: "🌾",
      code: "WB",
      center: [22.9868, 87.8550],
      elevation_m: 35,
      soil: "Alluvial Loam",
      irrigation: "Canal Siphon + Furrow Basin",
      water_source: "DVC Canal Network & Shallow Tube-well",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Jute (Golden Fibre)",
      typical_curr_crop: "Aman / Boro Paddy / Potato",
      districts: [
        { name: "Bardhaman", lat: 23.2324, lon: 87.8615 },
        { name: "Hooghly", lat: 22.9030, lon: 88.3968 },
        { name: "Nadia", lat: 23.4013, lon: 88.5002 },
        { name: "Murshidabad", lat: 24.0988, lon: 88.2679 },
        { name: "North 24 Parganas", lat: 22.7230, lon: 88.4807 },
        { name: "South 24 Parganas", lat: 22.5312, lon: 88.3245 },
        { name: "Malda", lat: 25.0108, lon: 88.1411 },
        { name: "Jalpaiguri", lat: 26.5405, lon: 88.7196 },
        { name: "Birbhum", lat: 23.9054, lon: 87.5246 },
        { name: "Bankura", lat: 23.2319, lon: 87.0784 },
        { name: "Darjeeling", lat: 27.0410, lon: 88.2663 },
        { name: "Paschim Medinipur", lat: 22.4257, lon: 87.3199 }
      ]
    },
    "Bihar": {
      icon: "🌾",
      code: "BR",
      center: [25.0961, 85.3131],
      elevation_m: 53,
      soil: "Alluvial Loam",
      irrigation: "Canal Siphon + Furrow Basin",
      water_source: "Gandak & Kosi Canal System / Tube-well",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Wheat (HD 2733)",
      typical_curr_crop: "Rabi Maize (High Yield) / Paddy",
      districts: [
        { name: "Patna", lat: 25.5941, lon: 85.1376 },
        { name: "Gaya", lat: 24.7914, lon: 85.0002 },
        { name: "Muzaffarpur", lat: 26.1209, lon: 85.3647 },
        { name: "Bhagalpur", lat: 25.2425, lon: 86.9842 },
        { name: "Darbhanga", lat: 26.1542, lon: 85.8918 },
        { name: "Purnia", lat: 25.7771, lon: 87.4753 },
        { name: "Rohtas (Sasaram)", lat: 24.9522, lon: 84.0315 },
        { name: "Samastipur", lat: 25.8629, lon: 85.7811 },
        { name: "Begusarai", lat: 25.4182, lon: 86.1272 },
        { name: "Vaishali (Hajipur)", lat: 25.6858, lon: 85.2146 },
        { name: "East Champaran (Motihari)", lat: 26.6469, lon: 84.9089 },
        { name: "Nalanda", lat: 25.1982, lon: 85.5149 }
      ]
    },
    "Odisha": {
      icon: "🌾",
      code: "OR",
      center: [20.9517, 85.0985],
      elevation_m: 45,
      soil: "Red Sandy Loam",
      irrigation: "River Lift Irrigation Network",
      water_source: "Hirakud Dam & Mahanadi Delta Canal",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Pulses (Moong/Biri Dal)",
      typical_curr_crop: "Paddy (Swarna / Pooja)",
      districts: [
        { name: "Bhubaneswar", lat: 20.2961, lon: 85.8245 },
        { name: "Cuttack", lat: 20.4625, lon: 85.8828 },
        { name: "Sambalpur", lat: 21.4669, lon: 83.9812 },
        { name: "Bargarh", lat: 21.3333, lon: 83.6167 },
        { name: "Balasore", lat: 21.4934, lon: 86.9135 },
        { name: "Ganjam", lat: 19.3149, lon: 84.7941 },
        { name: "Puri", lat: 19.8135, lon: 85.8312 },
        { name: "Koraput", lat: 18.8135, lon: 82.7118 },
        { name: "Kalahandi", lat: 19.9075, lon: 83.1643 },
        { name: "Balangir", lat: 20.7126, lon: 83.4862 }
      ]
    },
    "Chhattisgarh": {
      icon: "🍚",
      code: "CG",
      center: [21.2787, 81.8661],
      elevation_m: 298,
      soil: "Clay Loam",
      irrigation: "Canal Siphon + Furrow Basin",
      water_source: "Mahanadi Reservoir & Hasdeo Bango Canal",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Soybean / Gram",
      typical_curr_crop: "Paddy (Dubraj / IR-64)",
      districts: [
        { name: "Raipur", lat: 21.2514, lon: 81.6296 },
        { name: "Bilaspur", lat: 22.0797, lon: 82.1409 },
        { name: "Durg", lat: 21.1904, lon: 81.2849 },
        { name: "Rajnandgaon", lat: 21.0974, lon: 81.0336 },
        { name: "Korba", lat: 22.3595, lon: 82.7501 },
        { name: "Raigarh", lat: 21.8974, lon: 83.3950 },
        { name: "Janjgir-Champa", lat: 22.0067, lon: 82.5714 },
        { name: "Mahasamund", lat: 21.1085, lon: 82.0970 },
        { name: "Dhamtari", lat: 20.7071, lon: 81.5497 },
        { name: "Jagdalpur", lat: 19.0734, lon: 82.0235 }
      ]
    },
    "Jharkhand": {
      icon: "🌱",
      code: "JH",
      center: [23.6102, 85.2799],
      elevation_m: 651,
      soil: "Red Sandy Loam",
      irrigation: "Deep Borewell + Solar Submersible",
      water_source: "Subarnarekha River Lift & Check Dam Tank",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Maize / Mustard",
      typical_curr_crop: "Paddy (Upland/Lowland) / Vegetables",
      districts: [
        { name: "Ranchi", lat: 23.3441, lon: 85.3096 },
        { name: "Jamshedpur", lat: 22.8046, lon: 86.2029 },
        { name: "Dhanbad", lat: 23.7957, lon: 86.4304 },
        { name: "Bokaro", lat: 23.6693, lon: 86.1511 },
        { name: "Hazaribagh", lat: 23.9961, lon: 85.3647 },
        { name: "Deoghar", lat: 24.4826, lon: 86.7001 },
        { name: "Palamu", lat: 24.0374, lon: 84.0722 },
        { name: "Giridih", lat: 24.1856, lon: 86.3056 },
        { name: "Dumka", lat: 24.2676, lon: 87.2485 }
      ]
    },
    "Assam": {
      icon: "🍵",
      code: "AS",
      center: [26.2006, 92.9376],
      elevation_m: 55,
      soil: "Alluvial Loam",
      irrigation: "River Lift Irrigation Network",
      water_source: "Brahmaputra River Basin Tributaries",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Jute / Mustard",
      typical_curr_crop: "Assam Tea / Sali Boro Paddy",
      districts: [
        { name: "Guwahati (Kamrup)", lat: 26.1445, lon: 91.7362 },
        { name: "Dibrugarh", lat: 27.4728, lon: 94.9120 },
        { name: "Jorhat", lat: 26.7509, lon: 94.2037 },
        { name: "Nagaon", lat: 26.3452, lon: 92.6841 },
        { name: "Tezpur (Sonitpur)", lat: 26.6528, lon: 92.7926 },
        { name: "Silchar (Cachar)", lat: 24.8333, lon: 92.7789 },
        { name: "Barpeta", lat: 26.3211, lon: 91.0049 },
        { name: "Golaghat", lat: 26.5168, lon: 93.9666 },
        { name: "Tinsukia", lat: 27.4922, lon: 95.3537 },
        { name: "Sivasagar", lat: 26.9826, lon: 94.6425 }
      ]
    },
    "Kerala": {
      icon: "🌴",
      code: "KL",
      center: [10.8505, 76.2711],
      elevation_m: 25,
      soil: "Laterite Soil",
      irrigation: "Precision Micro-Drip + Fertigation",
      water_source: "Periyar River & Open Ring Well",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Tapioca / Spices (Black Pepper)",
      typical_curr_crop: "Coconut / Cardamom / Kuttanad Paddy",
      districts: [
        { name: "Palakkad", lat: 10.7867, lon: 76.6548 },
        { name: "Thrissur", lat: 10.5276, lon: 76.2144 },
        { name: "Kochi (Ernakulam)", lat: 9.9816, lon: 76.2999 },
        { name: "Kottayam", lat: 9.5916, lon: 76.5222 },
        { name: "Kozhikode", lat: 11.2588, lon: 75.7804 },
        { name: "Thiruvananthapuram", lat: 8.5241, lon: 76.9366 },
        { name: "Alappuzha (Kuttanad)", lat: 9.4981, lon: 76.3388 },
        { name: "Kannur", lat: 11.8745, lon: 75.3704 },
        { name: "Wayanad", lat: 11.6103, lon: 76.0827 },
        { name: "Idukki", lat: 9.8494, lon: 76.9720 }
      ]
    },
    "Himachal Pradesh": {
      icon: "🍎",
      code: "HP",
      center: [31.1048, 77.1734],
      elevation_m: 2200,
      soil: "Mountain Brown Soil",
      irrigation: "Gravity Kuhl Mountain Channel",
      water_source: "Mountain Glacial Kuhl & Natural Spring",
      water_availability: "Seasonal Reliable",
      typical_prev_crop: "Off-Season Vegetables (Peas, Tomato)",
      typical_curr_crop: "Apple (Royal Delicious) / Maize",
      districts: [
        { name: "Shimla", lat: 31.1048, lon: 77.1734 },
        { name: "Dharamshala (Kangra)", lat: 32.2190, lon: 76.3234 },
        { name: "Mandi", lat: 31.7087, lon: 76.9320 },
        { name: "Solan", lat: 30.9045, lon: 77.0967 },
        { name: "Kullu", lat: 31.9579, lon: 77.1095 },
        { name: "Sirmaur (Nahan)", lat: 30.5599, lon: 77.2955 },
        { name: "Una", lat: 31.4685, lon: 76.2708 },
        { name: "Hamirpur", lat: 31.6862, lon: 76.5213 },
        { name: "Chamba", lat: 32.5534, lon: 76.1258 },
        { name: "Bilaspur (HP)", lat: 31.3325, lon: 76.7587 }
      ]
    },
    "Uttarakhand": {
      icon: "🏔️",
      code: "UK",
      center: [30.0668, 79.0193],
      elevation_m: 1600,
      soil: "Mountain Brown Soil",
      irrigation: "Gravity Kuhl Mountain Channel",
      water_source: "Ganga / Yamuna Feeder & Natural Spring",
      water_availability: "Abundant (High)",
      typical_prev_crop: "Soybean / Millets (Mandua)",
      typical_curr_crop: "Basmati Rice (Dehradun Type 3) / Wheat",
      districts: [
        { name: "Dehradun", lat: 30.3165, lon: 78.0322 },
        { name: "Haridwar", lat: 29.9457, lon: 78.1642 },
        { name: "Nainital (Haldwani)", lat: 29.2183, lon: 79.5130 },
        { name: "Udham Singh Nagar (Rudrapur)", lat: 28.9796, lon: 79.4002 },
        { name: "Almora", lat: 29.5971, lon: 79.6591 },
        { name: "Pauri Garhwal", lat: 30.1472, lon: 78.7808 },
        { name: "Tehri Garhwal", lat: 30.3800, lon: 78.4800 },
        { name: "Pithoragarh", lat: 29.5829, lon: 80.2182 },
        { name: "Chamoli", lat: 30.4131, lon: 79.3245 },
        { name: "Uttarkashi", lat: 30.7268, lon: 78.4354 }
      ]
    }
  },

  // Calculate distance between two lat/lon in km using Haversine
  calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },

  // 1.2 Nearest Indian State & District Spatial Lookup
  findNearestDistrict(lat, lon) {
    let closestDistrict = null;
    let closestState = "Punjab";
    let minDistance = Infinity;

    Object.keys(this.INDIAN_STATES_DATA).forEach(stateName => {
      const stateData = this.INDIAN_STATES_DATA[stateName];
      stateData.districts.forEach(d => {
        const dist = this.calculateDistanceKm(lat, lon, d.lat, d.lon);
        if (dist < minDistance) {
          minDistance = dist;
          closestDistrict = d;
          closestState = stateName;
        }
      });
    });

    const stateObj = this.INDIAN_STATES_DATA[closestState] || this.INDIAN_STATES_DATA["Punjab"];
    return {
      state: closestState,
      stateData: stateObj,
      district: closestDistrict || { name: "Ludhiana", lat: 30.9010, lon: 75.8573 },
      soil: stateObj.soil,
      irrigation: stateObj.irrigation,
      waterSource: stateObj.water_source,
      waterAvailability: stateObj.water_availability,
      prevCrop: stateObj.typical_prev_crop,
      currCrop: stateObj.typical_curr_crop,
      elevation: stateObj.elevation_m,
      distanceKm: Math.round(minDistance)
    };
  },

  // 1.3 Autocomplete & Full-Text Search across Indian States and Districts
  searchLocations(query) {
    if (!query || typeof query !== 'string') return [];
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];

    const results = [];
    Object.keys(this.INDIAN_STATES_DATA).forEach(stateName => {
      const stateData = this.INDIAN_STATES_DATA[stateName];
      // Match state name
      if (stateName.toLowerCase().includes(q)) {
        results.push({
          type: 'state',
          title: `${stateData.icon || '🌾'} ${stateName}`,
          subtitle: `State Center • ${stateData.districts.length} Major Districts`,
          state: stateName,
          district: stateData.districts[0].name,
          lat: stateData.districts[0].lat,
          lon: stateData.districts[0].lon,
          elevation: stateData.elevation_m,
          stateData: stateData
        });
      }
      // Match district names
      stateData.districts.forEach(d => {
        if (d.name.toLowerCase().includes(q)) {
          results.push({
            type: 'district',
            title: `📍 ${d.name}`,
            subtitle: `${stateName} (${stateData.icon || '🌾'}) • Agronomic Zone`,
            state: stateName,
            district: d.name,
            lat: d.lat,
            lon: d.lon,
            elevation: stateData.elevation_m,
            stateData: stateData
          });
        }
      });
    });

    // Rank: district exact match first, then startsWith, then state matches
    results.sort((a, b) => {
      const aName = a.district.toLowerCase();
      const bName = b.district.toLowerCase();
      if (aName === q && bName !== q) return -1;
      if (bName === q && aName !== q) return 1;
      if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
      if (!aName.startsWith(q) && bName.startsWith(q)) return 1;
      return 0;
    });

    return results.slice(0, 8);
  },

  getStateData(stateName) {
    return this.INDIAN_STATES_DATA[stateName] || null;
  },

  // 2. Interactive SVG India Crop Shortage Map
  renderIndiaShortageMap(containerId, shortageData, onStateClick) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // State code to Status mapping
    const statusMap = {};
    shortageData.forEach(d => {
      statusMap[d.state_code] = d;
    });

    // Helper to get status color
    const getColor = (code) => {
      const record = statusMap[code];
      if (!record) return '#e2e8f0'; // Default gray
      if (record.status.includes('High Shortage')) return '#ef4444'; // Red
      if (record.status.includes('Medium Shortage')) return '#f59e0b'; // Amber
      if (record.status.includes('Surplus')) return '#10b981'; // Green
      return '#0284c7'; // Balanced (Blue)
    };

    // Responsive SVG Layout with Indian State Regions
    // We represent Indian states with stylized interactive SVG polygons & labels
    const states = [
      { code: 'PB', name: 'Punjab', x: 260, y: 160, w: 75, h: 55 },
      { code: 'HR', name: 'Haryana', x: 280, y: 225, w: 70, h: 50 },
      { code: 'DL', name: 'Delhi', x: 340, y: 235, w: 35, h: 30 },
      { code: 'RJ', name: 'Rajasthan', x: 180, y: 240, w: 110, h: 100 },
      { code: 'UP', name: 'Uttar Pradesh', x: 360, y: 240, w: 120, h: 80 },
      { code: 'GJ', name: 'Gujarat', x: 140, y: 350, w: 95, h: 80 },
      { code: 'MP', name: 'Madhya Pradesh', x: 280, y: 340, w: 130, h: 90 },
      { code: 'MH', name: 'Maharashtra', x: 230, y: 445, w: 125, h: 95 },
      { code: 'KA', name: 'Karnataka', x: 250, y: 560, w: 85, h: 100 },
      { code: 'AP', name: 'Andhra Pradesh', x: 350, y: 530, w: 90, h: 100 },
      { code: 'TN', name: 'Tamil Nadu', x: 290, y: 675, w: 85, h: 90 },
      { code: 'WB', name: 'West Bengal', x: 530, y: 330, w: 65, h: 90 },
      { code: 'BR', name: 'Bihar', x: 490, y: 265, w: 75, h: 65 },
      { code: 'TS', name: 'Telangana', x: 335, y: 465, w: 80, h: 65 },
      { code: 'OR', name: 'Odisha', x: 445, y: 410, w: 80, h: 75 }
    ];

    let svgShapes = states.map(st => {
      const color = getColor(st.code);
      const data = statusMap[st.code];
      const tooltip = data ? `${data.state_name}: ${data.status} (Deficit: ${data.deficit_tonnes > 0 ? '+' : ''}${data.deficit_tonnes.toLocaleString()} T)` : st.name;

      return `
        <g class="map-state-node" data-code="${st.code}" style="cursor: pointer;" onclick="AgriMaps.onStateClicked('${st.code}')">
          <rect x="${st.x}" y="${st.y}" width="${st.w}" height="${st.h}" rx="10"
                fill="${color}" stroke="#ffffff" stroke-width="2.5"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))">
            <title>${tooltip}</title>
          </rect>
          <text x="${st.x + st.w / 2}" y="${st.y + st.h / 2 - 4}"
                font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">
            ${st.code}
          </text>
          <text x="${st.x + st.w / 2}" y="${st.y + st.h / 2 + 12}"
                font-family="sans-serif" font-size="10" font-weight="500" fill="#ffffff" text-anchor="middle">
            ${st.name}
          </text>
        </g>
      `;
    }).join('');

    container.innerHTML = `
      <div style="position: relative; width: 100%; text-align: center;">
        <svg viewBox="100 120 530 680" style="max-width: 620px; width: 100%; height: auto; display: block; margin: 0 auto;">
          <!-- Map Background Grid -->
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="1"/>
            </pattern>
          </defs>
          <rect x="100" y="120" width="530" height="680" fill="url(#grid)" />
          ${svgShapes}
        </svg>

        <!-- Map Legend -->
        <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap; margin-top: 1rem; font-size: 0.82rem; font-weight: 600;">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="width: 14px; height: 14px; border-radius: 4px; background: #ef4444; display: inline-block;"></span>
            <span>High Shortage (Severe Deficit)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="width: 14px; height: 14px; border-radius: 4px; background: #f59e0b; display: inline-block;"></span>
            <span>Medium Shortage</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="width: 14px; height: 14px; border-radius: 4px; background: #0284c7; display: inline-block;"></span>
            <span>Balanced Supply</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="width: 14px; height: 14px; border-radius: 4px; background: #10b981; display: inline-block;"></span>
            <span>Surplus (Exporting State)</span>
          </div>
        </div>
      </div>
    `;

    // Save click handler
    this._onStateClick = onStateClick;
    this._statusMap = statusMap;
  },

  onStateClicked(stateCode) {
    if (this._onStateClick && this._statusMap) {
      const data = this._statusMap[stateCode];
      this._onStateClick(stateCode, data);
    }
  }
};

window.AgriMaps = AgriMaps;
