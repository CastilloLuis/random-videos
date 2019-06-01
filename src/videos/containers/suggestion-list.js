import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native'

import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Suggestion from '../components/suggestion';

export default class SuggestionList extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias" />;

    renderItemSeparator = () => <Separator horizontal={false} />;

    renderItem = ({ item }) => <Suggestion {...item} />;

    keyExtractor = ({ id }) => id.toString();

    render() {
        return (
            <SuggestionListLayout
                title='Sugerencias para ti'
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    renderItem={this.renderItem}
                />                    
            </SuggestionListLayout>
        )
    }
};

