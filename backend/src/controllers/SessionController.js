const User = require('../models/User')

module.exports = {
    index() { },

    show() { },
    
    async store(request, response) { 
        const { email } =  request.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }        

        return response.json(user);
    },
    
    update() { },
    
    destroy() { }
};