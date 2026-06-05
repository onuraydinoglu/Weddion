// src/components/layout/AppTabBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { AppText } from "@/components/ui/AppText";

type IconName = keyof typeof Ionicons.glyphMap;

type AppTabRoute = {
  key: string;
  name: string;
};

type AppTabBarProps = {
  state: {
    index: number;
    routes: AppTabRoute[];
  };
  descriptors: Record<
    string,
    {
      options: {
        title?: string;
      };
    }
  >;
  navigation: {
    navigate: (name: string) => void;
  };
};

const TAB_ICONS: Record<string, { active: IconName; inactive: IconName }> = {
  home: {
    active: "home",
    inactive: "home-outline",
  },
  invitations: {
    active: "mail",
    inactive: "mail-outline",
  },
  guests: {
    active: "people",
    inactive: "people-outline",
  },
  profile: {
    active: "person",
    inactive: "person-outline",
  },
};

export function AppTabBar({ state, descriptors, navigation }: AppTabBarProps) {
  const firstTabs = state.routes.slice(0, 2);
  const lastTabs = state.routes.slice(2);

  const handleCreatePress = () => {
    navigation.navigate("invitations");
  };

  return (
    <View className="absolute bottom-6 left-6 right-6 h-[78px] flex-row items-center justify-between rounded-[32px] border border-borderSoft bg-surface px-5 shadow-sm">
      {firstTabs.map((route, index) => (
        <TabItem
          key={route.key}
          routeName={route.name}
          label={descriptors[route.key]?.options.title ?? route.name}
          active={state.index === index}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}

      <Pressable
        onPress={handleCreatePress}
        className="-mt-9 h-[66px] w-[66px] items-center justify-center rounded-full bg-primary shadow-sm"
      >
        <Ionicons name="add" size={34} color="#FFFFFF" />
      </Pressable>

      {lastTabs.map((route, index) => {
        const realIndex = index + 2;

        return (
          <TabItem
            key={route.key}
            routeName={route.name}
            label={descriptors[route.key]?.options.title ?? route.name}
            active={state.index === realIndex}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </View>
  );
}

type TabItemProps = {
  routeName: string;
  label: string;
  active: boolean;
  onPress: () => void;
};

function TabItem({ routeName, label, active, onPress }: TabItemProps) {
  const iconSet = TAB_ICONS[routeName];

  if (!iconSet) {
    return null;
  }

  return (
    <Pressable onPress={onPress} className="items-center justify-center gap-1">
      <Ionicons
        name={active ? iconSet.active : iconSet.inactive}
        size={24}
        color={active ? "#A875D1" : "#817A90"}
      />

      <AppText
        variant="caption"
        className={`text-[11px] ${active ? "text-primary" : "text-textMuted"}`}
      >
        {label}
      </AppText>
    </Pressable>
  );
}
