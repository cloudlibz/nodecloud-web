import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../src/_actions/user.actions";
import * as types from "../src/_constants/user.constants";
import * as services from "../src/_services/user.services";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("register actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates REGISTER_SUCCESS when signup is done", () => {
    fetchMock.getOnce("/signup", {
      body: { username: "guest", email: "guest@guest.com", password: "guest" },
      headers: { "content-type": "application/json" }
    });

    const user = {
      email: "guest",
      username: "",
      password: ""
    };

    const expectedActions = [
      { type: types.REGISTER_REQUEST },
      { type: types.REGISTER_SUCCESS, body: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });

    console.log(services.register(user));
    return store.dispatch(services.register(user)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
