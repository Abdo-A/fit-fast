// // Tab screens
// User Tab Screens
import Menu from './TabScreens/common/Menu';
import Order from './TabScreens/User/Order';
import MyOrders from './TabScreens/User/MyOrders';

// Admin Tab Screens
import Orders from './TabScreens/Admin/Orders';
import Actions from './TabScreens/Admin/Actions';

// // Other screens
import CreateNewMealScreen from './TabScreens/Admin/Actions/screens/CreateNewMeal';

const screens = {
  UserScreens: { Menu, Order, MyOrders },
  AdminScreens: { Menu, Orders, Actions },
  CreateNewMealScreen
};

export default screens;
