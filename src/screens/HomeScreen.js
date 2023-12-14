import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native';

import Search from '../components/Search';
import useCategories from '../hooks/useCategories';
import CategoryBookList from '../components/CategoryBookList';
import Spinner from '../components/Spinner';

const HomeScreen = () => {
    const [localSearchText, setLocalSearchText] = useState("");
    const [serverSearchText, setServerSearchText] = useState("");
    const [categories, errorMessage, loading] = useCategories()

    const searchBookFromServer = () => {
        console.log(`Serverees ${localSearchText} utgaar hailaa.`)
        setServerSearchText(localSearchText)
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {loading ? (
                <Spinner />
            ) :
                (
                    <View>
                        <Search
                            value={localSearchText}
                            onValueChange={setLocalSearchText}
                            onFinishEnter={searchBookFromServer}
                        />

                        {errorMessage && (
                            <Text style={{ marginHorizontal: 20, color: 'red' }} >
                                {errorMessage}
                            </Text>
                        )}
                        <ScrollView style={{ marginTop: 20 }}>
                            {categories.map(el => (
                                <CategoryBookList
                                    searchLocalValue={localSearchText}
                                    searchServerValue={serverSearchText}
                                    key={el._id}
                                    style={{ marginVertical: 10 }}
                                    data={el} />
                            ))}
                        </ScrollView>
                    </View>

                )
            }


        </View>
    );
};

export default HomeScreen;

