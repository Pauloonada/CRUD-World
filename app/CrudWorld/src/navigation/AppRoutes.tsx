import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CidadesScreen from "../screens/Cidades";
import PaisesScreen from "../screens/Paises";
import HomeScreen from "../screens/Home"

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: "#d33" },
                headerTintColor: "#fff",
                tabBarActiveTintColor: "#d33",
                tabBarInactiveTintColor: "#888",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopColor: "#eee",
                    height: 60,
                    paddingBottom: 5,
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if(route.name === "Home") iconName = "home";
                    else if(route.name === "Paises") iconName = "globe";
                    else iconName = "business";

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Paises" component={PaisesScreen} />
            <Tab.Screen name="Cidades" component={CidadesScreen} />
        </Tab.Navigator>
    );
}