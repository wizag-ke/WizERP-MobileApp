import React from 'react';
import { TextInputProps, View } from 'react-native';
import { InputData } from '../utils/styledComponents';
import { colors } from '../utils/theme/colors';

interface CustomTextInputProps extends TextInputProps {
    placeholder?: string;
    value?: string | undefined;
    onChangeText?: (text: string) => void;
    textColor?: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    textColor,
}) => {
    return (
        <View>
            <InputData
                style={{ color: textColor }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor={colors.greySix}
            />
        </View>
    );
};
