const verifyIsAdmin = (req, res, next) => {
    const user = req.session.user
    if (user && user.isAdmin) {
        return next()
    }
    return res.redirect('/login')
}

module.exports = verifyIsAdmin;
