const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log("Database sucessfully connected");
});

// defining the schema
const restaurantSchema = mongoose.Schema({
  id: String,
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


