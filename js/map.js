// Initialize and add the map
function initMap() {
    // The location of next destination
    const location = { lat: -33.924, lng: 18.424 };
    // The map, centered at location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
    });
    // The marker, positioned at next destination
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }