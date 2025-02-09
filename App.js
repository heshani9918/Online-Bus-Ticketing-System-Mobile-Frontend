// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import InspectionAdd from "./components/inspection/InspectionAdd";
import Payment from "./components/payment/Payment";
import Amount from "./components/amount/Amount";
import PayMethod from "./components/paymethod/PayMethod";
import CardDetails from "./components/cardDetails/CardDetails";
import Scan from "./components/scan/Scan";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="InspectionAdd" component={InspectionAdd} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Amount" component={Amount} />
        <Stack.Screen name="PayMethod" component={PayMethod} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
