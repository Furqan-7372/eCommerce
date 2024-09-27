// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import Categories from '../../Screens/Categories'; // Generic categories screen
// import Products from '../../Screens/Products'; // Reusable products screen
// import ProductDetails from '../../Screens/ProductDetails'; // Reusable product details screen
// import {IGenderNavigator} from '../../Interfaces/index';

// const Stack = createStackNavigator();

// const GenderNavigator: React.FC<IGenderNavigator> = ({route}) => {
//   const {category} = route.params; // Get the category from the route

//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Categories">
//         {props => <Categories {...props} category={category} />}
//       </Stack.Screen>
//       <Stack.Screen name="Products" component={Products} />
//       <Stack.Screen name="ProductDetails" component={ProductDetails} />
//     </Stack.Navigator>
//   );
// };

// export default GenderNavigator;
