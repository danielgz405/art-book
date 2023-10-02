import { FlatList, View, Image, TouchableNativeFeedback, ToastAndroid, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import Group from '../../components/Home/Group';
import classNames from '../../utils/css';
import { dataGroups, dataPost } from '../../utils/data';
import Post from '../../components/Home/Post';
import NavigateBar from '../../components/layouts/NavigateBar';

export default function Home({ auth }) {
  const navigate = useNavigate();
  const hour = new Date().getHours();

  const getWelcome = () => {
    let welcome = hour >= 5 && hour < 12 ? 'Good morning!' : hour >= 12 && hour < 18 ? 'Good afternoon!' : 'Good evening!';
    return welcome;
  };

  useEffect(() => {
    if (auth == null) {
      navigate('/');
      ToastAndroid.show('Vuelve a iniciar seccion :)', ToastAndroid.SHORT);
    }
  }, [auth]);

  return (
    <View className="flex-1 h-full w-full" style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="p-4 h-16 w-full flex flex-row items-center justify-between">
        <View className="">
          <Text className="text-2xl text-white font-bold">{getWelcome()}</Text>
        </View>

        <TouchableNativeFeedback onPress={() => navigate('/Home')}>
          <Image
            style={[
              tw`h-10 w-10 rounded-full`,
              {
                shadowOffset: {
                  width: 3,
                  height: 12,
                },
                shadowRadius: 20,
                shadowOpacity: 0.2,
                shadowColor: '#ffffff',
              },
            ]}
            source={{ uri: auth.image ? auth.image : `https://ui-avatars.com/api/?name=${auth.name}&rounded=true&background=047857&color=fff&bold=true` }}
          />
        </TouchableNativeFeedback>
      </View>
      <ScrollView className=" pb-4 pl-4 pr-4 ">
        {dataGroups.length > 0 && <Group type="one" height={120} group={dataGroups[0]} />}
        <SafeAreaView className="flex-1 justify-center">
          <FlatList
            data={dataGroups.slice(1, 5)}
            renderItem={({ item, index }) => (
              <View className={classNames('flex-1 flex-col mt-3', index % 2 === 1 ? 'ml-3' : '')}>
                <Group type="col" height={70} group={item} />
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </SafeAreaView>
        <View className="my-4 space-y-3">
          {dataPost.map((item, idx) => (
            <View key={idx} className="mt-3">
              <Post post={item} />
            </View>
          ))}
        </View>
      </ScrollView>
      <NavigateBar />
    </View>
  );
}
