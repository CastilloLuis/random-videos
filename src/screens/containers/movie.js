import React, { Component } from 'react';
import {
    View
} from 'react-native';


import MovieLayout from '../components/movieLayout';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Details from '../../videos/components/details';
import Close from '../components/close';
import NotFound from '../../screens/containers/notFound';

import { connect } from 'react-redux';

const mapStateToProps = ({ selectedMovie }) => {
    return {
        selectedMovie
    }
}

class Movie extends Component {

    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null
            }
        })
    }

    render() {
        return (
            <MovieLayout>
                <Header>
                    {
                        Object.entries(this.props.selectedMovie).length === 0 ?
                        false :
                        <Close onPress={this.closeVideo} />
                    }
                </Header>
                {
                    Object.entries(this.props.selectedMovie).length === 0 ?
                    <NotFound onPress={this.closeVideo}/> :
                    <View style={{width: '100%', height: '100%'}}>
                        <Player />
                        <Details {...this.props.selectedMovie} />
                    </View>
                }
            </MovieLayout>
        )
    }
};

export default connect(mapStateToProps)(Movie)