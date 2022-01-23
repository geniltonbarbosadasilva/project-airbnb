const Spot = require("../models/Spot");

module.exports = {
    async show(request, reponse) {
        const { user_id } = request.headers;
        const spots = await Spot.find({ user: user_id });

        return reponse.json(spots);
    }
}