/** @format */

import { FETCH_VIDEO_GAMES } from './types'

const initialState = {
  feed: {},
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_GAMES:
      return { ...state, feed: action.payload }

    default:
      return state
  }
}
