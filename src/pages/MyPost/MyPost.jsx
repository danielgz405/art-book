import { View, TouchableNativeFeedback, ToastAndroid, Text, ScrollView, StatusBar, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import { dataPost } from '../../utils/data';
import Post, { resumenNum } from '../../components/Home/Post';
import NavigateBar from '../../components/layouts/NavigateBar';
import { Cog8ToothIcon } from 'react-native-heroicons/solid';

export default function MyPost({ auth }) {
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const post = dataPost.filter((item) => item.user.name === auth.name);
  const likes = () => {
    let countLikes = 0;
    post.forEach((post) => {
      countLikes += post.likes;
    });

    return countLikes;
  };
  const comments = () => {
    let countComments = 0;
    post.forEach((post) => {
      countComments += post.comments.length;
    });

    return countComments;
  };

  const getWelcome = () => {
    let welcome = hour >= 5 && hour < 12 ? 'Good morning!' : hour >= 12 && hour < 18 ? 'Good afternoon!' : 'Good evening!';
    return welcome;
  };
  const fetchEvents = () => {};

  useEffect(() => {
    if (auth == null) {
      navigate('/');
      ToastAndroid.show('Vuelve a iniciar seccion :)', ToastAndroid.SHORT);
    }
  }, [auth]);

  useEffect(() => fetchEvents(), []);
  return (
    <View className="flex-1 h-full w-full" style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="p-4 h-16 w-full flex flex-row items-center justify-between">
        <View className="">
          <Text className="text-2xl text-white font-bold">{getWelcome()}</Text>
        </View>

        <TouchableNativeFeedback onPress={() => navigate('/Home')}>
          <Cog8ToothIcon
            size={32}
            style={[
              tw`text-white`,
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
          />
        </TouchableNativeFeedback>
      </View>
      <View className="justify-center items-center px-6 pt-4 pb-2">
        <Image
          style={[
            tw`h-20 w-20 rounded-full`,
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
        <Text className="text-lg text-white font-bold">{auth.name}</Text>
        <Text className="text-md text-gray-400">{auth.email}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full flex flex-row bg-white rounded-lg overflow-hidden divide-x-2 divide-gray-400 mt-4">
          <View className="p-2 w-1/3">
            <Text className="text-md text-gray-900">Posts</Text>
            <Text className="text-sm text-gray-500">{resumenNum(post.length)}</Text>
          </View>
          <View className="p-2 w-1/3">
            <Text className="text-md text-gray-900">Likes</Text>
            <Text className="text-sm text-gray-500">{resumenNum(likes())}</Text>
          </View>
          <View className="p-2 w-1/3">
            <Text className="text-md text-gray-900">Commets</Text>
            <Text className="text-sm text-gray-500">{resumenNum(comments())}</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView className="pb-4 px-4">
        {post.map((item, idx) => (
          <View key={idx} className="my-3">
            <Post post={item} />
          </View>
        ))}
      </ScrollView>
      <NavigateBar />
    </View>
  );
}
