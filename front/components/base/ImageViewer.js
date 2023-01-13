import { StyleSheet, Image } from 'react-native';   

export default function ImageViewer({PlaceholderImageSource, style}){
    return (
        <Image source={PlaceholderImageSource} style={style} />
    )
}
