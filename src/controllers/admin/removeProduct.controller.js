module.exports=(req,res)=>{
    const {id,name,image} = req.query
    res.render("admin/deleteProduct", {id, name,image}, (err,content) => {
        err && res.send(err.message)
        res.render("partials/dashboard",{ views: content})
    })
}