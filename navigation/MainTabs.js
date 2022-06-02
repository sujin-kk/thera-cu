import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Like from "../screens/Like";
import MyPage from "../screens/MyPage";
import color from "../theme/color";
import HomeActive from "../assets/svgIcon/HomeActive";
import HomeInactive from "../assets/svgIcon/HomeInactive";
import SearchInactive from "../assets/svgIcon/SearchInactive";
import SearchActive from "../assets/svgIcon/SearchActive";
import LikeActive from "../assets/svgIcon/LikeActive";
import LikeInactive from "../assets/svgIcon/LikeInactive";
import MyPageActive from "../assets/svgIcon/MyPageActive";
import MyPageInactive from "../assets/svgIcon/MyPageInactive";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{}}
      initialRouteName="Like"
      screenOptions={{
        unmountOnBlur: true, // caching, not fetch again
        headerShown: false,
        tabBarStyle: { backgroundColor: "#F9FAFF" },
        tabBarActiveTintColor: color.MAIN_PURPLE,
        tabBarInactiveTintColor: color.GRAY_300,
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { color: "black" },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginTop: -5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActive /> : <HomeInactive />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "둘러보기",
          tabBarIcon: ({ focused }) => {
            return focused ? <SearchActive /> : <SearchInactive />;
          },
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          title: "즐겨찾기",
          tabBarIcon: ({ focused }) => {
            return focused ? <LikeActive /> : <LikeInactive />;
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "내 정보",
          tabBarIcon: ({ focused }) => {
            return focused ? <MyPageActive /> : <MyPageInactive />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
