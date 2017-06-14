import { SHOW_SIDEBAR, HIDE_SIDEBAR, CHANGE_VIEW } from '../constants/actions'

export const showSideBar = () => ({
  type: SHOW_SIDEBAR,
})
export const hideSideBar = () => ({
  type: HIDE_SIDEBAR,
})

export const changeView = view => ({
  type: CHANGE_VIEW,
  payload: { view },
})
