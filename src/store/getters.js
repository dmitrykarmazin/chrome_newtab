
const suggesctions  = state => state.suggestions;
//const isOpen = state => state.isOpen;
const data = state => state.data;

const today = state => state.data.today

const forecast = state => state.data.forecast

const forecast10day = state => state.data.forecast10day

const hourly = state => state.data.hourly

const astronomy = state => state.data.astronomy

const photo = state => state.photo_data

export {
    suggesctions,
    data,
    today,
    forecast,
    forecast10day,
    hourly,
    astronomy,
    photo

//    isOpen
}

