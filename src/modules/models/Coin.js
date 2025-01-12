const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const coinSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'Id is required'],
        unique: true,
    },
    symbol: {
        type: String,
        required: [true, 'Symbol is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    is_active: {
        type: Boolean,
        required: [true, 'Status is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    logo: {
        type: String,
        required: [true, 'Logo is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    changeOneHr: {
        type: Number,
        required: [true, 'Price Change One Hr is required'],
    },
    changeTwentyFourHr: {
        type: String,
        required: [true, 'Price Change Twenty Four Hr is required'],
    },
    changeSevenDay: {
        type: String,
        required: [true, 'Price Change Seven Day is required'],
    },
    changeFourteenDay: {
        type: String,
        required: [true, 'Price Change Fourteen Day is required'],
    },
    changeThirtyDay: {
        type: String,
        required: [true, 'Price Change Thirty Day is required'],
    },
    changeSixtyDay: {
        type: String,
        required: [true, 'Price Change Sixty Day is required'],
    },
    changeOneYear: {
        type: String,
        required: [true, 'Price Change One Year is required'],
    },
    volume: {
        type: Number,
        required: [true, 'Volume is required'],
    },
    marketCap: {
        type: Number,
        required: [true, 'Market Cap value is required'],
    },
    marketCapRank: {
        type: Number,
        required: [true, 'Market Cap rank is required'],
    },
    fullyDilutedValuation: {
        type: Number,
        required: [true, 'fullyDilutedValuation is required'],
    },
    maxSupply: {
        type: Number,
        required: [true, 'Max Supply is required'],
    },
    circulatingSupply: {
        type: Number,
        required: [true, 'Circulating Supply is required'],
    },
    allTimeHigh: {
        type: Number,
        required: [true, 'All Time High is required'],
    },
    allTimeLow: {
        type: Number,
        required: [true, 'All Time Low is required'],
    },
    liquidity: {
        type: Number,
        required: [true, 'Liquidity value is required'],
    },
    weeklyGraph: {
        type: Array,
        required: [true, 'Weekly graph is required'],
    },
    website: {
        type: String,
        required: [true, 'Website URL is required'],
    },
    technical_doc: {
        type: String,
        required: [true, 'Technical Doc URL is required'],
    },
    twitter: {
        type: String,
        required: [true, 'Twitter URL is required'],
    },
    reddit: {
        type: String,
        required: [true, 'Reddit URL is required'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Coin", coinSchema);
coinSchema.plugin(uniqueValidator, {
    message: `{PATH} already in use`
});