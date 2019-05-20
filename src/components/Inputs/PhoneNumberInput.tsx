import { countries as countryList } from 'countries-list';
import * as React from 'react';
import { FlatList, TextInput as RNTextInput, View } from 'react-native';
import { DeepPartial, Omit } from 'ts-essentials';

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
import { TextInput, TextInputProps } from './TextInput';
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
    getStyles,
    innerRef,
    useHistory = false,
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
        title={`+${countryList[countryCode].phone}`}
      />
      <CloseableModal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
      >
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
                  setIsModalOpen(false);
                }}
              />
            );
          }}
        />
      </CloseableModal>
      <TextInput
        ref={innerRef}
        name="phone"
        getStyles={() => ({
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

export const PhoneNumberInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => <PhoneNumberInputBase {...props} innerRef={ref} />,
);
