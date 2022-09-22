import cartReducer from "./cartReducer";
import { addItem, removeItem } from './actions';

describe("cartReducer Tests", function () {

    let item;
    let INI_STATE;

    beforeEach(function () {
        INI_STATE = { cart: [], total: +0 };
        item = {
            "name": "tv",
            "price": 219.99,
            "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
            "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
            "key": "47314fa1-ae56-4eae-80be-af6691145951"
        }
    });

    it("Returns state by default", function () {
        expect(cartReducer(INI_STATE, { type: "" })).toEqual(INI_STATE);
    });

    it("Adds item to cart", function () {
        expect(cartReducer(INI_STATE, { ...addItem(), payload: { item } })).toEqual(
            {
                cart: [item],
                total: item.price
            })

    });

    it("Removes item from cart", function () {
        expect(cartReducer({ cart: [item], total: item.price }, { ...removeItem(), payload: { item } })).toEqual(INI_STATE);
    });

});

