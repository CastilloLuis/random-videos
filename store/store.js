import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducer from './reducers/videos';

// const store = createStore(reducer, {
//     categoriesList: [],
//     suggestionList: [],
// });

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['selectedMovie']
}
  

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

