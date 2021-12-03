/** @format */

import axios from 'axios'
import { FETCH_VIDEO_GAMES } from '../reducers/types'

const apiBaseUrl = 'https://public.connectnow.org.uk/applicant-test/'

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
}

export const feeds = () => async (dispatch) => {
  let res = await axios.get(`${apiBaseUrl}`)
  dispatch({ type: FETCH_VIDEO_GAMES, payload: res.data })
}
