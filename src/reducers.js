import { combineReducers } from "redux";
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_ACTIVE_PAINTING,
  FILTER_BY_NAT_GALLERY
} from "./actions/types";

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_ACTIVE_PAINTING:
      return state.filter(painting => painting.id !== action.id);
    case FILTER_BY_NAT_GALLERY:
      return state.filter(painting => painting.museum.id === 2);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = 1, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      console.log(paintingsReducer.state);
      return 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
