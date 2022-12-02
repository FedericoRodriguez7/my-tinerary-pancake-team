import cityReducer from "./cityReducer";
import hotelReduce from "./hotelReducer";
import userReducer from "./userReducer";

const rootReducer = {
    city: cityReducer,
    hotel: hotelReduce,
    user: userReducer
}

export default rootReducer