import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import { addItem, removeItem } from './actions';

describe("Test Actions", function () {

    it("returns correct action.type", function () {
        expect(addItem()).toEqual({ type: ADD_ITEM });
        expect(removeItem()).toEqual({ type: REMOVE_ITEM });
    });
});