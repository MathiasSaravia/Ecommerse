module.exports = (req,res , next) => {
    if(req.cookies.userLogin){
        res.locals.userLogin = req.cookies.userLogin
    }
    next()
}
