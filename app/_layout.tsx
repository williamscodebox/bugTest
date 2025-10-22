// import { openAndInitDatabase } from "@/utils/db";
import { Drawer } from "expo-router/drawer";
// import { SQLiteProvider } from "expo-sqlite";
// import { Suspense } from "react";
import CustomDrawer from "@/components/CustomDrawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

type DrawerIconProps = { color: string; size: number };

export default function Layout() {
  const drawerItems = [
    {
      key: "home",
      name: "index",
      label: "Home",
      icon: "home",
    },
  ];
  return (
    <SafeAreaProvider>
      {/* <Suspense fallback={<Text></Text>}>
    //     <SQLiteProvider
    //       databaseName="dbhf.db"
    //       onInit={openAndInitDatabase}
    //       useSuspense
    //     > */}
      <Drawer
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: "#010000",
          headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "rgba(227, 239, 242, .0)",
          },
          drawerActiveTintColor: "#b91c1c", // red-700
          drawerInactiveTintColor: "#374151", // gray-700
          drawerStyle: { backgroundColor: "#fff7f7" }, // red-50
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }: DrawerIconProps) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
      {/* </SQLiteProvider>
    // </Suspense> */}
    </SafeAreaProvider>
  );
}
