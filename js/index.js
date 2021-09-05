// COOKIES
window.cookieconsent.initialise({
  palette: {
    popup: {
      background: "#ff8fab",
      text: "#ffffff"
    },
    button: {
      background: "#adadad",
      text: "#ffffff"
    }
  },
  theme: "edgeless",
  content: {
    href: "../pages/docs/privacy.html"
  }
});

// GOOGLE MAPS
function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 53.611149, lng: -2.11492 }
  };

  let map = new google.maps.Map(document.getElementById("map"), options);

  let marker = new google.maps.Marker({
    position: { lat: 53.611149, lng: -2.11492 },
    map: map
  });
}

