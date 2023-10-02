import { TextInput } from 'react-native';

export function GeneralInput({ onChange, placeholder, className, style, value, keyboardType, secureTextEntry }) {
  return (
    <TextInput
      className={className}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={style}
      onChangeText={(e) => onChange && onChange(e)}
      value={value}
    />
  );
}
