import 'dotenv/config';
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name ?? "CrudWorld",
  slug: config.slug ?? "CrudWorld",
  version: config.version ?? "0.6.7",
  orientation: config.orientation ?? "portrait",
  icon: config.icon ?? "./assets/icon.png",
  userInterfaceStyle: config.userInterfaceStyle ?? "light",
  splash: config.splash ?? {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: config.ios ?? {
    supportsTablet: true,
  },
  android: {
    package: "com.pedro.crudworld",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: config.web ?? {
    favicon: "./assets/favicon.png",
  },
  extra: {
    apiUrl: process.env.API_URL ?? "",
  },
});
