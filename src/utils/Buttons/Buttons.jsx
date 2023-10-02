import { Text, TouchableHighlight, View } from 'react-native';
import { Link } from 'react-router-native';
import { PrimaryText } from '../Texts/Texts';
import classNames from '../css';

export function PrimaryButton({ onPress, className, style, text }, ...props) {
  return (
    <TouchableHighlight onPress={() => onPress && onPress()}>
      <View className={classNames('p-2 mx-4 mb-3 bg-orange-500 rounded-lg', className ? className : '')} style={style} {...props}>
        <Text className="text-white text-center">{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

export function PrimaryLink({ to, className, text }, ...props) {
  return (
    <Link to={to}>
      <View className={classNames('p-2 mx-3 mb-3 bg-orange-500 rounded-lg', className ? className : '')} {...props}>
        <PrimaryText className="text-white" style={{ textAlign: 'center' }}>
          {text}
        </PrimaryText>
      </View>
    </Link>
  );
}

export function PrimaryButtonIcon({ onPress, className, style, children }, ...props) {
  return (
    <TouchableHighlight onPress={() => onPress && onPress()}>
      <View className={classNames('bg-orange-500 rounded-lg text-cyan-900 p-2 mx-3 mb-3', className)} style={style} {...props}>
        {children}
      </View>
    </TouchableHighlight>
  );
}
