import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { AppLogo } from "@/components/ui/AppLogo";

export function DashboardHeader() {
  return (
    <View className="mb-3 flex-row items-center justify-between">
      <Pressable className="h-10 w-10 items-center justify-center rounded-full">
        <Ionicons name="menu-outline" size={24} color="#3D3046" />
      </Pressable>

      <AppLogo size="sm" />

      <Pressable className="h-10 w-10 items-center justify-center rounded-full">
        <Ionicons name="notifications-outline" size={22} color="#3D3046" />
      </Pressable>
    </View>
  );
}
