import { Ionicons } from '@expo/vector-icons';
import {
  launchCameraAsync,
  requestCameraPermissionsAsync
} from 'expo-image-picker';
import { useState } from 'react';
import { TouchableOpacity, View, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { setProfileImage } from '../../store/profile/profile.slice';
import { COLORS } from '../../themes';

const ImageSelector = ({ profileImage }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;
    const result = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
      base64: true
    });

    dispatch(setProfileImage(result.assets[0].uri));
    setImage(result.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
        {image || profileImage ? (
          <Image
            source={{ uri: image || profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Ionicons name="ios-camera" size={24} color={COLORS.text} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
