import ACTION_TYPES from "./actionTypes";
import api from "../../api";

// asenkron thunk aksiyonu (fonksiyon içinde fonksiyon tanımlıyoruz)

// const getRestautants1 = () => {return () => {};}; bu da kullanılır, aşağıdaki de.

export const getRestautants = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.REST_LOADING });

  api
    .get("/restaurants")
    .then((res) =>
      dispatch({ type: ACTION_TYPES.REST_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.REST_ERROR, payload: err.message })
    );
};
