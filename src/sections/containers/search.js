import React, { Component} from 'react';
import {
    TextInput,
} from 'react-native';

import API from '../../../utils/api';

import { connect } from 'react-redux';

class Search extends Component {

    state = {
        text: ''
    }

    handleSumit = async () => {
        this.dispatchLoading(true);
        const movie = await API.searchMovie(this.state.text);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: typeof movie !== 'undefined' ? movie[0] : {}
            }
        });
        this.dispatchLoading(false);
    }

    handleChangeText = (text) => {
        this.setState({text});
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
        return (
            <TextInput
                placeholder='Search your favorite movie'
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleSumit}
                underlineColorAndroid="transparent"
                style={styles.input}
            />
        )
    }
}

const styles = {
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
}

export default connect(null)(Search);

