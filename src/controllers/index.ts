import { UserController } from "./User/user.controller";
import { ItemController } from "./Item/Item";

const userController = new UserController();
const itemController = new ItemController();

export {
  userController,
  itemController,
};
