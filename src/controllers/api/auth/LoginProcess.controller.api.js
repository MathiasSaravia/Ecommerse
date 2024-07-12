const db = require('../../../database/models');
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

      }

   } catch (errors) {
      res.render("./auth/login", {
         old: req.body,
         errorsLog: errors.mapped()
      });
   }
};