import { View, type ViewProps } from "react-native";

type AppCardProps = ViewProps & {
  className?: string;
};

export function AppCard({ className = "", children, ...props }: AppCardProps) {
  return (
    <View
      className={`rounded-[22px] border border-border bg-surface px-5 py-6 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
