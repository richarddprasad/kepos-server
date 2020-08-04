import { UserController } from "./User/User";
import { ItemController } from "./Item/Item";

const userController = new UserController();
const itemController = new ItemController();

export {
  userController,
  itemController,
};
