import * as React from 'react';
import { FlatList, TextInput as RNTextInput, View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

import { TextInput, TextInputProps } from '.';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';
import { CloseableModal } from '../Modal';
import {
  getPhoneNumberInputStyles,
  PhoneNumberInputStyles,
} from './PhoneNumberInput.styles';
import { GetTextInputStyles, TextInputStyles } from './TextInput.styles';

export interface PhoneNumberInputProps
  extends Omit<TextInputProps, 'getStyles'> {
  countryCode?: string;
  onChangeCountryCode?: (countryCode: string) => void;
  phoneNumber?: string;
  onChangePhoneNumber?: (phoneNumber: string) => void;
  /** Prop to be passed to modal */
  useHistory?: boolean;
  /** Label displayed when showing country selection */
  header?: React.ReactElement<any>;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles & PhoneNumberInputStyles>
  >;
  countryCodes?: CountryCode[];
  getCountryCodeTitle?: (countryCode: string) => string;
}

export interface CountryCode {
  /** The value for countryCode */
  value: string;
  /** Labels used in the list of countries to select the country code from */
  label: string;
}

const PhoneNumberInputBase = (props: PhoneNumberInputProps) => {
  const {
    countryCode = '1',
    countryCodes = [],
    phoneNumber,
    onChangeCountryCode,
    onChangePhoneNumber,
    header,
    getStyles,
    innerRef,
    useHistory = false,
    getCountryCodeTitle = (code: string) => code,
    ...textInputProps
  } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const theme = useTheme();

  const { containerStyle } = mergeStyles(getPhoneNumberInputStyles, getStyles)(
    {},
    theme,
  );

  return (
    <View style={containerStyle}>
      <Button
        onPress={() => setIsModalOpen(true)}
        appearance="outline"
        getStyles={() => ({
          buttonStyle: {
            borderBottomRightRadius: 0,
            borderColor: theme.colors.border.default,
            borderTopRightRadius: 0,
            borderWidth: 1,
          },
        })}
        iconAfter={
          <Icon
            size={20}
            color={theme.colors.text.default}
            name="chevron-down"
          />
        }
        title={getCountryCodeTitle(countryCode)}
      />
      <TextInput
        ref={innerRef}
        name="phone"
        getStyles={() => ({
          containerStyle: {
            flex: 1,
          },
          inputStyle: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
          },
        })}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        {...textInputProps}
      />
      <CloseableModal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
      >
        <FlatList
          ListHeaderComponent={header}
          keyExtractor={item => item.label}
          getItemLayout={(data, index) => ({
            index,
            length: theme.controlHeights.medium,
            offset: theme.controlHeights.medium * index,
          })}
          data={countryCodes}
          renderItem={({ item }) => {
            return (
              <ListItem
                key={item.label}
                label={item.label}
                onPress={event => {
                  event.preventDefault();
                  if (onChangeCountryCode) {
                    onChangeCountryCode(item.value);
                  }
                  setIsModalOpen(false);
                }}
              />
            );
          }}
        />
      </CloseableModal>
    </View>
  );
};

export const PhoneNumberInput = React.forwardRef<
  RNTextInput,
  PhoneNumberInputProps
>((props, ref) => <PhoneNumberInputBase {...props} innerRef={ref} />);
