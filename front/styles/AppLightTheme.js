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
    error: "#B00020"
  }
}

export default AppLightTheme;