import { SET_PESSOAS } from "../actions/actions";

export default function pessoas(state = [], action = {}) {

  switch(action.type) {

    case SET_PESSOAS:
      return action.pessoas;

    default: return state;

  }

}