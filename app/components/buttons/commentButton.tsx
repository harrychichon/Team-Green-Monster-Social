import React, { useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function CommentButton() {
  const inputRef = useRef<TextInput>(null);

  const showKeyboard = () => {
    inputRef.current?.focus();
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={showKeyboard}>
        <Text style={styles.text}>Comment</Text>
      </TouchableOpacity>

      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        caretHidden
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#757575',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#424242',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  hiddenInput: {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
  },
});
