import { Image, ScrollView, Text, View } from 'react-native';
import { EyeIcon, FolderPlusIcon, GiftIcon, HeartIcon, PaperAirplaneIcon, PencilSquareIcon } from 'react-native-heroicons/solid';
import tw from 'tailwind-react-native-classnames';

export function resumenNum(number) {
  if (number >= 1000) {
    const suffixes = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
    const exponent = Math.floor(Math.log10(number) / 3);
    const abbreviatedNumber = (number / Math.pow(1000, exponent)).toFixed(1);
    return abbreviatedNumber + suffixes[exponent];
  } else {
    return number.toString();
  }
}

export default function Post({ post }) {
  return (
    <View style={{ backgroundColor: '#D9D9D9' }} className="rounded-lg px-2 pt-2 pb-5 divide-y space-y-3 divide-gray-400">
      <View className="flex flex-row w-fit items-center">
        <Image className="h-10 w-10 mr-2 rounded-full" source={{ uri: post.user.image }} />
        <View>
          <Text className="text-lg">{post.user.name}</Text>
          <Text className="text-sm -mt-2">{post.user.email}</Text>
        </View>
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full">
          <View className="mt-3 w-fit flex flex-row flex-nowrap space-x-3">
            {post.images.map((item, idx) => (
              <Image key={idx} className="h-[35vh] w-[45vw] rounded-lg" source={{ uri: item }} />
            ))}
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full -mb-1">
          <View className="w-fit flex flex-row flex-nowrap mt-3 space-x-2">
            <View className="flex flex-row items-center space-x-1">
              <HeartIcon size={20} style={tw`${post.like ? 'text-red-500' : 'text-black'}`} />
              <Text>{resumenNum(post.likes)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <EyeIcon size={20} style={tw`text-black`} />
              <Text>{resumenNum(post.view)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <PencilSquareIcon size={20} style={tw`text-black`} />
              <Text>{resumenNum(post.comments.length)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <GiftIcon size={20} style={tw`text-black`} />
              <Text>{resumenNum(post.gif)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <FolderPlusIcon size={20} style={tw`text-black`} />
              <Text>{resumenNum(post.saves)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <PaperAirplaneIcon size={20} style={tw`text-black`} />
              <Text>{resumenNum(post.send)}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {post.comments.length > 0 && (
        <View className="ml-11">
          <View className="mt-3 flex flex-row w-fit items-center">
            <Image className="h-10 w-10 mr-2 rounded-full" source={{ uri: post.comments[0].user.image }} />
            <View>
              <Text className="text-lg">{post.comments[0].user.name}</Text>
              <Text className="text-sm -mt-2">{post.comments[0].user.email}</Text>
            </View>
          </View>
          <View className="ml-11 mt-3">
            <Text className="text-lg font-bold">{post.comments[0].title}</Text>
            <Text className="text-md">{post.comments[0].content}</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="ml-11 w-full -mb-1">
            <View className="w-fit flex flex-row flex-nowrap mt-3 space-x-2">
              <View className="flex flex-row items-center space-x-1">
                <HeartIcon size={20} style={tw`${post.comments[0].like ? 'text-red-500' : 'text-black'}`} />
                <Text>{resumenNum(post.comments[0].likes)}</Text>
              </View>
              <View className="flex flex-row items-center space-x-1">
                <EyeIcon size={20} style={tw`text-black`} />
                <Text>{resumenNum(post.comments[0].view)}</Text>
              </View>
              <View className="flex flex-row items-center space-x-1">
                <PencilSquareIcon size={20} style={tw`text-black`} />
                <Text>{resumenNum(post.comments[0].comments.length)}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
