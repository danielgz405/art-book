import { Image, Text, View } from 'react-native';

export default function User({ user }) {
  return (
    <View style={{ backgroundColor: '#D9D9D9' }} className="rounded-lg px-2 pt-2 pb-5">
      <View className="flex flex-row w-fit items-center">
        <Image className="h-10 w-10 mr-2 rounded-full" source={{ uri: user.image }} />
        <View>
          <Text className="text-lg">{user.name}</Text>
          <Text className="text-sm -mt-2">{user.email}</Text>
        </View>
      </View>
    </View>
  );
}
