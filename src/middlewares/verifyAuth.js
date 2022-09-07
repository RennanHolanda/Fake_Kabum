const verifyAuth = (req, res, next) => {
    console.log(req.session.user) 

    if(!req.session.user) return res.redirect("/login");
    return next();
}

module.exports = verifyAuth;