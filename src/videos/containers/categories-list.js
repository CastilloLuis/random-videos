import React, { Component } from 'react';
import { 
    View,
    FlatList
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Category from '../components/category';
import CategoryListLayout from '../components/category-list-layout.js'
import { connect } from 'react-redux';

const mapStateToProps = ({ categoriesList }) => {
    return {
        list: categoriesList
    }
}

class CategoriesList extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias" />;

    renderItemSeparator = () => <Separator horizontal />;

    renderItem = ({ item }) => <Category {...item} />;

    keyExtractor = ({ id }) => id.toString();

    render() {
        return (
            <CategoryListLayout title="Categorias">
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    renderItem={this.renderItem}
                /> 
            </CategoryListLayout>
        )

    }
};

export default connect(mapStateToProps)(CategoriesList);

