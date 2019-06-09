import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View
} from 'react-native';

import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoriesList from './videos/containers/categories-list';
import Loader from './sections/components/loader';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

const mapStateToProps = ({ selectedMovie, loading }) => {
    console.log('loading', loading)
    return {
        selectedMovie,
        loading
    }
}

class AppLayout extends Component {

    renderLoader = () => <Loader />

    componentDidMount = async () => {
        this.dispatchLoading(true);
        const categoriesList = await API.getMovies();
        this.props.dispatch({
            type: 'SET_CATEGORIES_LIST',
            payload: {
            categoriesList,
            }
        })
        const suggestionList = await API.getSugggestion(10);    
        this.props.dispatch({
            type: 'SET_SUGGESTIONS_LIST',
            payload: {
            suggestionList,
            }
        })
        this.dispatchLoading(false);
    }

    dispatchLoading = (loading) => {
        this.props.dispatch({
            type: 'SET_LOADING',
            payload: {
                loading
            }
        })
    }

    render() {
        if(this.props.selectedMovie) {
            return this.props.loading ? this.renderLoader() : <Movie />;
        }
        return (
            <Home>
                <Header/>
                {
                    this.props.loading ? 
                    this.renderLoader() :
                    <View style={styles.content}>
                        <Search />
                        <CategoriesList/>
                        <SuggestionList/>
                    </View>
                }
            </Home>
        );
    }
};

const styles = {
    content: {
        width: '100%',
        height: '100%'
    }
}

export default connect(mapStateToProps)(AppLayout)

