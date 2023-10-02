import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, TextInput, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import NavigateBar from '../../components/layouts/NavigateBar';
import tw from 'tailwind-react-native-classnames';
import { dataUsers } from '../../utils/data';
import User from '../../components/Home/User';

export default function Sends({ auth }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState(dataUsers);

  const search = (e) => {
    console.log(e);
    setUsers(
      dataUsers.filter((user) => {
        let letersInput = Array.from(e.toLowerCase());
        let letterUser = Array.from(user.name.toLowerCase());

        return e === '' || !letersInput.some((item) => !letterUser.some((acc) => item === acc));
      })
    );
    console.log(users);
  };

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
          <TextInput onChangeText={(e) => search(e)} className="bg-white rounded-lg h-9 px-3" placeholder="search" />
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
        <SafeAreaView className="flex-1 justify-center">
          {users.map((user, idx) => (
            <View key={idx} className="w-full pb-4">
              <User user={user} />
            </View>
          ))}
        </SafeAreaView>
      </ScrollView>
      <NavigateBar />
    </View>
  );
}
