import { DefaultTheme } from '@react-navigation/native';

const AppLightTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#616161',
    card: '#252525',
    border: '#9F9F9F',
    primary: '#333333',
    background: '#ffffff',
    secondary: "#FFA69E",
    error: "#B00020",
    success: "#00C851",
    input: "#3F3F3F",
    message: "#F1F1F1"
  }
}

export default AppLightTheme;