import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

const Search = ({ value, onValueChange, onFinishEnter }) => {
    return (
        <View style={css.searchPanel}>
            <Feather style={css.searchIcon} name="search" color="#535C68" />
            <TextInput
                value={value}
                onChangeText={onValueChange}
                style={css.searchText}
                placeholder="Хайх нэрээ оруулна уу"
                placeholderTextColor="#DAE0E2"
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onFinishEnter}
            />
        </View>
    );
};
export default Search;

const css = StyleSheet.create({
    searchPanel: {
        top: 15,
        height: 50,
        backgroundColor: "orange",
        marginHorizontal: 15,
        borderRadius: 7,
        flexDirection: "row"
    },
    searchText: {
        color: "white",
        fontsize: 18,
        flex: 1
    },
    searchIcon: {
        fontSize: 34,
        alignSelf: "center",
        marginHorizontal: 15
    }
})