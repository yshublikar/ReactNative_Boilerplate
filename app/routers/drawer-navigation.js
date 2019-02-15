import { createDrawerNavigator } from "react-navigation";
import SwitchStackNavigator from './stack-navigation';

const drawerNavigator = createDrawerNavigator(
  {
    Home: { screen: SwitchStackNavigator }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
export default drawerNavigator;
