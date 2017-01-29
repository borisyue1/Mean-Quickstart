//controllers folder - contains Express application controllers; AKA middleware functions
exports.render = function(req, res) {
    res.render('index', {
        title: 'Some-title',
    })
};