import React from 'react';
import API from './utils/api';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Loader from './src/sections/components/loader';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoriesList from './src/videos/containers/categories-list';

export default class App extends React.Component {

  state = {
    suggestionList: [],
    categoriesList: [],
    loading: true,
  }

  componentDidMount = async () => {
    const movies = await API.getSugggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoriesList: categories
    });
    this.setState({loading: false})
  }

  renderLoader = () => <Loader />

  render() {
    const { loading } = this.state;
    return (
      <Home>
        <Header/>
          <CategoriesList
            list={this.state.categoriesList}
          />        
        {
          loading ? 
          this.renderLoader() :
          <SuggestionList
            list={this.state.suggestionList}
          />
        }
      </Home>
    );
  }
}

