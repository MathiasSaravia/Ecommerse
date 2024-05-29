module.exports = {
 getOrder : require("./getOrder.controller.api"),
 addProductToOrder : require("./addProductToOrder.controller.api"),
 removeProductToOrder : require("./removeProductToOrder.controller.api"),
 moreQuantity:require("./moreQuantity.controlles.api"),
 lessQuantity:require("./lessQuantity.controlles.api"),
 canceledOrder:require("./canceledOrder.controller.api"),
 completedOrder:require("./completedOrder.controller.api")
}