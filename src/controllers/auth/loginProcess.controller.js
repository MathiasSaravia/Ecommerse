const db = require('../../database/models');
const { validationResult } = require("express-validator")

module.exports = async (req, res) => {
   try {
      const errors = validationResult(req)

      if (errors.isEmpty()) {
         const { remember } = req.body;
         const userFind = await db.user.findOne({
            where: { email: req.body.email.toLowerCase() },
            attributes: {
               exclude: ['password']
            },
         })
   
         const { id, name, email, rol, avatar } = userFind;
         
   
         req.session.userLogin = {
            id,
            name,
            email,
            rol,
            avatar
         };
   
         if (remember) res.cookie("userLogin", req.session.userLogin, { maxAge: (60000 * 10 ) * 6})
   
         return res.redirect("/");
      }
      else {
         throw errors
      }

   } catch (errors) {
      res.render("./auth/login", {
         old: req.body,
         errorsLog: errors.mapped()
      });
   }
};