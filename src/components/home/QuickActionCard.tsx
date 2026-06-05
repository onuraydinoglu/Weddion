import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { AppText } from "@/components/ui/AppText";

type QuickActionCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
};

export function QuickActionCard({
  icon,
  title,
  subtitle,
}: QuickActionCardProps) {
  return (
    <Pressable className="w-[48%] rounded-[22px] border border-borderSoft bg-surface px-4 py-4">
      <View className="mb-3 h-10 w-10 items-center justify-center rounded-2xl bg-primaryLight">
        <Ionicons name={icon} size={20} color="#A875D1" />
      </View>

      <AppText variant="caption" className="font-manropeBold text-text">
        {title}
      </AppText>

      <AppText variant="caption" className="mt-1 text-[11px] text-textMuted">
        {subtitle}
      </AppText>
    </Pressable>
  );
}
