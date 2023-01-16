import { DarkTheme } from '@react-navigation/native';

const AppDarkTheme = {
  ...DarkTheme,
  dark: false,
  colors: {
    ...DarkTheme.colors,
    text: '#dadada',
    card: '#ffffff',
    border: '#8D8D8D',
    primary: '#f9f9f9',
    background: '#252525',
    secondary: "#CCE6F4",
    error: "#B00020",
    success: "#00C851"
  }
}

export default AppDarkTheme;