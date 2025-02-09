import { Text, View } from "react-native";
import Background from "../background/Background";
import Button from "../button/Button";
import { red } from "../../colors/Colors";
import style from "./style";

const Home = (props) => {
  return (
    <Background>
      <View style={style.container}>
        <Text style={style.subHeading}>Welcome</Text>
        <Text style={style.heading_1}>Let's start</Text>
        <Text style={style.heading_2}>Ticketing</Text>
        <Button
          bgColor={red}
          textColor="white"
          BtnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Button
          bgColor="white"
          textColor={red}
          BtnLabel="Register"
          Press={() => props.navigation.navigate("Register")}
        />
        <Button
          bgColor="white"
          textColor={red}
          BtnLabel="Inspection"
          Press={() => props.navigation.navigate("InspectionAdd")}
        />
        <Button
          bgColor="white"
          textColor={red}
          BtnLabel="Payment"
          Press={() => props.navigation.navigate("Payment")}
        />
        <Button
          bgColor="white"
          textColor={red}
          BtnLabel="Scan"
          Press={() => props.navigation.navigate("Scan")}
        />
        
      </View>
    </Background>
  );
};

export default Home;
