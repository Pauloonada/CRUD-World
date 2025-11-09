import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";

import CidadesScreen from "../screens/Cidades";
import PaisesScreen from "../screens/Paises";
import HomeScreen from "../screens/Home"

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    const { theme } = useTheme();

    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: theme.headerColor },
                headerTintColor: "#fff",
                tabBarActiveTintColor: theme.tabBarActiveColor,
                tabBarInactiveTintColor: theme.tabIconInactive,
                tabBarStyle: {
                    backgroundColor: theme.tabBarBackground,
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
            sceneContainerStyle={{ backgroundColor: theme.background }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Paises" component={PaisesScreen} />
            <Tab.Screen name="Cidades" component={CidadesScreen} />
        </Tab.Navigator>
    );
}