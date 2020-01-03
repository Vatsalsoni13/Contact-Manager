import HomeScreen from "./screens/HomeScreen";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContactScreen },
    View: { screen: ViewContactScreen },
    Edit: { screen: EditContactScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
);
const App = createAppContainer(MainNavigator);
export default App;
