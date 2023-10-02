import { TouchableNativeFeedback, View } from 'react-native';
import { HomeIcon, MagnifyingGlassIcon, PaperAirplaneIcon, Squares2X2Icon, SquaresPlusIcon } from 'react-native-heroicons/solid';
import { useNavigate } from 'react-router-native';
import tw from 'tailwind-react-native-classnames';

export default function NavigateBar() {
  const navigate = useNavigate();
  return (
    <View className="flex flex-row justify-around items-center h-16 bg-zinc-800">
      <TouchableNativeFeedback onPress={() => navigate('/home')}>
        <HomeIcon size={32} style={tw`text-white`} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigate('/search')}>
        <MagnifyingGlassIcon size={32} style={tw`text-white`} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigate('/new')}>
        <SquaresPlusIcon size={32} style={tw`text-white`} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigate('/chat')}>
        <PaperAirplaneIcon size={32} style={tw`text-white`} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigate('/MyPost')}>
        <Squares2X2Icon size={32} style={tw`text-white`} />
      </TouchableNativeFeedback>
    </View>
  );
}
