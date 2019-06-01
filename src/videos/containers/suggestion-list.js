import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native'

import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/separator';

export default class SuggestionList extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias" />

    renderItemSeparator = () => <Separator />

    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1',
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ];
        return (
            <SuggestionListLayout
                title='Sugerencias para ti'
            >
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    renderItem={({item}) => <Text key={item.key}>{item.title}</Text>}
                />
            </SuggestionListLayout>
        )
    }
};

