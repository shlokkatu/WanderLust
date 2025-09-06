const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage"
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    }
  }, // ✅ <- This comma was missing
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;





// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema ({
// title: {
//     type: String,
//     required: true,
// },
// description: String,
// image: {
//   filename: {
//     type: String,
//     default: "listingimage"
//   },
//   url: {
//     type: String,
//     default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
//   }
// }

// // image: {
// //     type: String,
// //     default: "https://unsplash.com/photos/mountain-range-peaks-emerge-from-clouds-at-sunrise-w-BSFRpfTWk",
// //     set: (v) =>
// //          v === "" 
// //            ? "https://unsplash.com/photos/mountain-range-peaks-emerge-from-clouds-at-sunrise-w-BSFRpfTWk"
// //             : v,
// // },
// price: Number,
// location: String,
// country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;