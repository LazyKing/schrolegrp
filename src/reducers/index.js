import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
import Autentication_Registration from "./authentication_registraction";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  authenticationAndRegistration: Autentication_Registration
});

export default rootReducer;