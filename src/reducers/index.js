const initialState = [
  {
    showShopsModal: false
  }
]

export default function modalStates(state = initialState, action) {
  switch (action) {
      case 'SHOW_MODAL':
          return {
              showModal: true
          }
      break;
      case 'CLOSE_MODAL':
          return {
              showModal: false
          }
      break;
    default:
      return state

    }
}

