const mongoose = require('mongoose');

const dbName = "restaurant";
mongoose.connect(`mongodb://localhost/${dbName}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database sucessfully connected");
});

// defining the schema
const restaurantSchema = mongoose.Schema({
  version: {
    versionNumber: Number,
    lastUpdated: String,
  },
  type: String,
  name: String,
  cuisineIds: [Number],
  chainId: Number,
  images: [
    {
      id: String,
      href: String
    }
  ],
  primaryImage: {
    id: String,
    href: String
  },
  website: String,
  bookingTelephone: String,
  bookingEmail: String,
  bookingUrl: String,
  isBookingRequired: Boolean,
  address: {
    id: String,
    building: String,
    locality: String,
    street: String,
    town: String,
    county: String,
    postcode: String,
    country: String
  },
  geo: {
    type: String,
    coordinates: [Number]
  },
  isActive: Boolean
});

// Compile schema into model. Each restaurant will have properties and behaviours declared in schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Insert record
const restaurantOne = new Restaurant(
  {
    "_id": "23823ujasljdf82",
    "version": {
    "versionNumber": 2,
    "lastUpdated": "2018-02-19T15:46:46.326Z",
    },
    "type": "restaurant",
    "name": "1 Brasserie @ Downstairs",
    "cuisineIds": [1,2],
    "chainId": 1,
    "images": [
      {
        "id": "aslfj23asdfjasjfs9048",
        "href": "https://s3.amazonaws.com/image.jpg"
      }
    ],
    "primaryImage": {
      "id": "aslfj23asdfjasjfs9048",
      "href": "https://s3.amazonaws.com/image.jpg"
    },
    "website": "https://1brasserie.com",
    "bookingTelephone": "01234 567890",
    "bookingEmail": "1@brasserie.com",
    "bookingUrl": "brasserie.com",
    "isBookingRequired": false,
    "address": {
      "id": "asdfawfas2324",
      "building": "192",
      "locality": null,
      "street": "Leeds Way",
      "town": "Leeds",
      "county": "West Yorkshire",
      "postcode": "LS1 1SL",
      "country": "UK"
    },
    "geo": {
        "type": "Point",
        "coordinates": [
            55.865233060606,
            -4.2645282926424
        ]
    },
    "isActive": true,
  }
);

// saves restaurant into DB. Create bulk insert method.
restaurant.save(function(err) {
  if (err) return handleError(err);
  console.log("Restaurant saved onto database");
  // create console log to show how many records
});

