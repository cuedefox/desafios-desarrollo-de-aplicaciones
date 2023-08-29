import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';
import {
  useGetProfileQuery,
  useUpdateImageProfileMutation
} from '../../store/stats/api';
import { getStats } from '../../store/stats/stats.slice';

const Stats = () => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.user.localId);
  const tasksCreated = useSelector((state) => state.stats.tasksCreated);
  const tasksCompleted = useSelector((state) => state.stats.tasksCompleted);
  const tasksEliminated = useSelector((state) => state.stats.tasksEliminated);
  const [uploadImageProfile, { data, isLoading, error }] =
    useUpdateImageProfileMutation();
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({
    localId
  });
  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({
      localId,
      image: `data:image/jpeg;base64,${base64}`
    });
  };
  useEffect(() => {
    if (userData && userData.tasksCreated !== undefined) {
      dispatch(
        getStats({
          tasksCreated: userData.tasksCreated || tasksCreated,
          tasksCompleted: userData.tasksCompleted || tasksCompleted,
          tasksEliminated: userData.tasksEliminated || tasksEliminated
        })
      );
    }
  }, [userData, dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.title}>Perfil</Text>
        <View style={styles.profileImage}>
          <ImageSelector
            profileImage={userData?.profileImage}
            onSelect={onHandlerImage}
          />
        </View>
        <Text style={styles.statsText}>Tareas creadas: {tasksCreated}</Text>
        <Text style={styles.statsText}>
          Tareas completadas: {tasksCompleted}
        </Text>
        <Text style={styles.statsText}>Tareas borradas: {tasksEliminated}</Text>
      </View>
    </View>
  );
};

export default Stats;
