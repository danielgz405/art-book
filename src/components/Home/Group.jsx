import { View, Image, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import classNames from '../../utils/css';

export default function Group({ group, height, type }) {
  const isCol = type === 'col';
  return (
    <View style={[tw`flex flex-row rounded-lg overflow-hidden`, { backgroundColor: '#D9D9D9' }]}>
      <Image source={{ uri: group.image }} style={[tw`w-1/4 bg-gray-500`, { height }]} />
      <View style={{ flex: 1, height }} className="p-3">
        <View className="overflow-hidden">
          <Text className={classNames('font-semibold -mt-1 max-h-7', isCol ? 'text-md' : 'text-xl')}>{group.title}</Text>
          <Text className={classNames('text-xs truncate', isCol ? 'max-h-8' : 'max-h-8')}>{group.description}</Text>
        </View>
        {!isCol && (
          <View className="flex flex-row justify-between mt-auto">
            <View className="flex flex-row w-fit">
              <Image className="h-4 w-4 mr-1 rounded-full" source={{ uri: group.userImage }} />
              <Text className="text-xs">{group.name}</Text>
            </View>
            <Text className="text-xs">{group.date}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
