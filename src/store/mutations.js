
export const LOCATION_UPDATE = (state, location) => {
    state.currentLocation = location
}
export const SUGGEST_LIST_UPDATE = (state, list) => {
   state.suggestions = list
}
export const CURRENT_COORDS_UPDATE = (state, coords) => {
    state.currentCoords = coords
}
export const FORECAST_UPDATE = (state, data) => {
    state.data = data
}
export const PHOTO_UPDATE = (state, data) => {
    state.photo_data = data
}
export const PHOTO_DATA_LOAD = (state, data) => {
    state.photo_data_load = data
}
export const PAGES_UPDATE = (state, data) => {
    state.pages = data
}