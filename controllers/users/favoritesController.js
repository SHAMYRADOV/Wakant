const { Favorites, Profile, Jobs } = require("../../models");
const factory = require("../../utils/handlerController");

exports.getProfileFavs = factory.getFavorites(Favorites, Profile);
exports.getJobFavs = factory.getFavorites(Favorites, Jobs);
exports.addFavorites = factory.createOne(Favorites);
exports.deleteFavorites = factory.deleteOne(Favorites);
