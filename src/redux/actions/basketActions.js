import api from "../../api";
import ACTION_TYPES from "../actions/actionTypes";

// redux thunk asenkron aksiyonu

// sepetteki ürünleri alacak
export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.BASKET_LOADING }); // api isteği atmaya başladığımız anda da reducer'a haber verdik

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ACTION_TYPES.BASKET_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message })
    );
};

// sepete yeni ürün ekleyecek
export const createItem = (product) => (dispatch) => {
  // 1) sepete kaydedilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)

    // 3) istek başarılı olursa reducer'a haber gönder
    .then((res) =>
      dispatch({ type: ACTION_TYPES.CREATE_ITEM, payload: res.data })
    )
    .catch(() => alert("Bir sorun oluştu"));
};

// sepetteki ürünün miktarını güncelleyecek
export const updateItem = (id, newAmount) => (dispatch) => {
  // api'a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber ver
    .then((res) =>
      dispatch({ type: ACTION_TYPES.UPDATE_ITEM, payload: res.data })
    )
    .catch((err) => alert("İşlem başarısız oldu"));
};

// sepetteki ürünü direkt kaldır
export const removeItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.REMOVE_ITEM, payload: id }))
    .catch(() => alert("İşlem başarısız oldu"));
};
