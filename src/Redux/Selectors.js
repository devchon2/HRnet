import store from '../Redux/store.js'


const State_firstName = store((state) => state.user.FirstName)
 
const State_lastName = store((state) => state.user.LastName)

const State_birthDate = store((state) => state.user.BirthDate)

const State_street = store((state) => state.user.Street)

const State_city = store((state) => state.user.City)

const State_state = store((state) => state.user.State)

const State_zip = store((state) => state.user.Zip)

const State_startDate = store((state) => state.user.StartDate)
