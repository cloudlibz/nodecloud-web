import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import * as types from "../src/_constants/user.constants";
import * as services from "../src/_services/user.services";
import * as actions from "../src/_actions/user.actions";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeAll(() => {
  global.fetch = jest.fn();
});

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
    return store.dispatch(actions.register(user)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
