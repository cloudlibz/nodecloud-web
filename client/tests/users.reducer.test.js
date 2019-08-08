import * as reducer from "../src/_reducers/users.reducer";

describe("reducer", () => {
  describe("GETALL REQUEST", () => {
    test("sets getall to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_GETALL_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("GETALL SUCCESS", () => {
    test("sets getall to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_GETALL_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("GETALL FAILURE", () => {
    test("sets getall to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_GETALL_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("DELETE REQUEST", () => {
    test("sets delete to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_DELETE_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("DELETE SUCCESS", () => {
    test("sets delete to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_DELETE_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("DELETE FAILURE", () => {
    test("sets delete to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_DELETE_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL MACHINE REQUEST", () => {
    test("sets create virtual machine to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_MACHINE_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL MACHINE SUCCESS", () => {
    test("sets create virtual machine to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_MACHINE_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL MACHINE FAILURE", () => {
    test("sets create virtual machine to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_MACHINE_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL NETWORK REQUEST", () => {
    test("sets create virtual network to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_NETWORK_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL NETWORK SUCCESS", () => {
    test("sets create virtual network to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_NETWORK_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE VIRTUAL NETWORK FAILURE", () => {
    test("sets create virtual network to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_VIRTUAL_NETWORK_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE DATBASE REQUEST", () => {
    test("sets create database to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_DATBASE_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE DATBASE SUCCESS", () => {
    test("sets create database to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_DATBASE_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE DATBASE FAILURE", () => {
    test("sets create database to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_DATBASE_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE SECURITY REQUEST", () => {
    test("sets create security to requesting", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_SECURITY_REQUEST"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE SECURITY SUCCESS", () => {
    test("sets create security to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_SECURITY_SUCCESS"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("CREATE SECURITY FAILURE", () => {
    test("sets create security to failure", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = {
        type: "USERS_CREATE_SECURITY_FAILURE"
      };
      const nextState = reducer.users(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });
});
