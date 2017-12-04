import { CLICK } from '../actions/click'
export default (state = Array(9).fill(null), {type, payload} = {}) => {
  switch(type) {
    case CLICK :
      const squares1 = state.slice();
      squares1[payload] = 'X';
      return squares1;
    default :
      return state
  }
}
