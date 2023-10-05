function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);
  

  function getListingCode(listing) {
    return `<div class="col-4">
  <div class="listing card">
    <img
      src="${listing.picture_url}"
      class="card-img-top"
      alt="AirBNB Listing"
    />
    <div class="card-body">
      <h2 class="card-title">${listing.name}</h2>
      <div>${listing.price}</div>
      <p class="card-location">
          Location: ${listing.host_location} 
      </p>
      <p class="card-description">
        Description: ${listing.description} 
      </p>
      <p class="card-hostname">
      Host: ${listing.host_name}
      </p> 
      <img
      src=${listing.host_picture_url}
      class="cardhostphotos"
      alt="AirBNB hostphotos"
      />

      <p class="card-amenities">
      Amenities: ${listing.amenities} 
      </p>
      
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <!-- /card -->
  </div>

  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    me.redraw(listings.slice(0, 100));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();


main.loadData();
