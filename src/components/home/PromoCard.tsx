import { Image, Pressable, View } from "react-native";

import { AppText } from "@/components/ui/AppText";

export function PromoCard() {
  return (
    <View className="mb-24 mt-5 flex-row overflow-hidden rounded-[26px] bg-surface px-5 py-5">
      <View className="flex-1">
        <AppText variant="subtitle" className="text-text">
          Premium davetiyelerle fark yaratın ✨
        </AppText>

        <AppText variant="caption" className="mt-2 text-textMuted">
          Özel tasarımlarımızı keşfedin.
        </AppText>

        <Pressable className="mt-4 h-10 w-32 items-center justify-center rounded-xl bg-primaryLight">
          <AppText
            variant="caption"
            className="font-manropeSemiBold text-primaryDark"
          >
            Tasarım Keşfet
          </AppText>
        </Pressable>
      </View>

      <Image
        source={require("../../../assets/images/wedding-floral.png")}
        className="h-28 w-28"
        resizeMode="contain"
      />
    </View>
  );
}
