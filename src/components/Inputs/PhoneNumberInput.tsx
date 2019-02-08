import { countries as countryList } from 'countries-list';
import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Toggle } from 'react-powerplug';
import { DeepPartial, Omit } from 'ts-essentials';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button } from '../Button';
import { ListItem } from '../ListItem';
import { Modal } from '../Modal';
import ModalContent from '../Modal/ModalContent';
import {
  GetPhoneNumberInputStyles,
  getPhoneNumberInputStyles,
  PhoneNumberInputStyles,
} from './PhoneNumberInput.styles';
import TextInput, { TextInputProps } from './TextInput';

export interface PhoneNumberInputProps
  extends Omit<TextInputProps, 'getStyles'> {
  countryCode?: string;
  onChangeCountryCode?: (countryCode: string) => void;
  phoneNumber?: string;
  onChangePhoneNumber?: (phoneNumber: string) => void;
  theme: Theme;
  /** Label displayed when showing country selection */
  header?: React.ReactElement<any>;
  getStyles?: ReplaceReturnType<
    GetPhoneNumberInputStyles,
    DeepPartial<PhoneNumberInputStyles>
  >;
}

const countries = (() => {
  return Object.keys(countryList).map(countryCode => ({
    countryCode,
    key: countryCode,
    ...countryList[countryCode],
  }));
})();

const PhoneNumberInputBase = (props: PhoneNumberInputProps) => {
  const {
    countryCode = 'US',
    phoneNumber,
    onChangeCountryCode,
    onChangePhoneNumber,
    header,
    theme,
    getStyles,
    ...textInputProps
  } = props;

  const { containerStyle } = mergeStyles(getPhoneNumberInputStyles, getStyles)(
    {},
    theme,
  );

  return (
    <View style={containerStyle}>
      <Toggle initial={false}>
        {({ on, set }) => {
          return (
            <>
              <Button
                onPress={() => set(true)}
                appearance="outline"
                getStyles={() => ({
                  buttonStyle: {
                    borderBottomRightRadius: 0,
                    borderColor: theme.colors.border.muted,
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
                title={`+${countryList[countryCode].phone}`}
              />
              <Modal visible={on}>
                <ModalContent onClose={() => set(false)}>
                  <FlatList
                    ListHeaderComponent={header}
                    keyExtractor={item => item.key}
                    getItemLayout={(data, index) => ({
                      index,
                      length: theme.controlHeights.medium,
                      offset: theme.controlHeights.medium * index,
                    })}
                    data={countries}
                    renderItem={({ item: country }) => {
                      return (
                        <ListItem
                          key={country.countryCode}
                          label={country.name}
                          onPress={event => {
                            event.preventDefault();
                            if (onChangeCountryCode) {
                              onChangeCountryCode(country.countryCode);
                            }
                            set(false);
                          }}
                        />
                      );
                    }}
                  />
                </ModalContent>
              </Modal>
            </>
          );
        }}
      </Toggle>
      <TextInput
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
    </View>
  );
};

export const PhoneNumberInput = withTheme(PhoneNumberInputBase);
export default PhoneNumberInput;
