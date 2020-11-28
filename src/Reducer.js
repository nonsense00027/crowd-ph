import { collectIdsAndDocs } from "./utilities";

export const types = {
  GET_ESTABLISHMENTS: "GET_ESTABLISHMENTS",
};

const reducer = (state, action) => {
  console.log("action is:", action);
  switch (action.type) {
    case types.GET_ESTABLISHMENTS:
      return {
        ...state,
        establishments: action.payload.map((doc) => collectIdsAndDocs(doc)),
      };
    default:
      return state;
  }
};

export default reducer;
