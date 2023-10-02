import { useEffect } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import NavigateBar from '../../components/layouts/NavigateBar';
import tw from 'tailwind-react-native-classnames';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid';

export default function NewPost({ auth }) {
  const navigate = useNavigate();

  //authent
  useEffect(() => {
    if (auth == null) {
      navigate('/');
      ToastAndroid.show('Vuelve a iniciar seccion :)', ToastAndroid.SHORT);
    }
  }, [auth]);
  return (
    <View className="flex-1 h-full w-full" style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="p-4 h-16 w-full flex flex-row items-center justify-between">
        <View className="w-[78vw]">
          <ArrowLeftCircleIcon size={50} style={tw`text-white`} />
        </View>

        <TouchableNativeFeedback onPress={() => navigate('/Home')}>
          <View className="bg-white p-2 rounded-lg">
            <Text className="font-bold -mt-1 text-md">Create</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView className=" pb-4 pr-4 ">
        <View className="p-4 h-16 w-full flex flex-row items-center justify-between">
          <TouchableNativeFeedback onPress={() => navigate('/Home')}>
            <Image
              style={[
                tw`h-10 w-10 mr-2 rounded-full`,
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
          <View className="w-[78vw] flex flex-row">
            <TextInput className="bg-white rounded-lg h-9 px-3 w-1/2" placeholder="Add Category" />
            <TextInput className="bg-white ml-2 rounded-lg h-9 px-3 w-1/2" placeholder="Add Catwgory" />
          </View>
        </View>
        <TextInput className="placeholder:text-white text-white rounded-lg h-9 px-3 w-1/2" placeholder="Add Title" placeholderTextColor="#ffffff" />
        <TextInput className="placeholder:text-white text-white rounded-lg h-9 px-3 w-1/2" placeholder="Add Commeent" placeholderTextColor="#ffffff" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full">
          <View className="mt-3 ml-4 w-fit flex flex-row flex-nowrap space-x-3">
            {[
              'https://images.unsplash.com/photo-1693235760563-96285d5e4b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
              'https://images.unsplash.com/photo-1687191591471-e3b46d40a0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
              'https://plus.unsplash.com/premium_photo-1676638154798-904c8f6282d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
              'https://images.unsplash.com/photo-1688141584989-750cfd31fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
              'https://images.unsplash.com/photo-1692284759956-ad1330507a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
              'https://images.unsplash.com/photo-1655813710695-b376c7bacb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
            ].map((item, idx) => (
              <Image key={idx} className="h-[35vh] w-[45vw] rounded-lg" source={{ uri: item }} />
            ))}
          </View>
        </ScrollView>
        <View className="mt-4 pl-4">
          <TouchableNativeFeedback className="pl-4" onPress={() => navigate('/Home')}>
            <View className="bg-white p-2 w-full rounded-lg">
              <Text className="font-bold -mt-1 text-center text-md">Add new image</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
      <NavigateBar />
    </View>
  );
}
