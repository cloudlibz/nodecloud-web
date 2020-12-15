import TestRenderer from "react-test-renderer";
import SideBar from "../src/_components/NavBar";
import React from "react";

describe("<NavBar /> Unit Tests", () => {
    it("renders correctly", () => {
        var testFunction = jest.fn();
        const testUser = {
            username: 'test'
        }
        const testUserString = JSON.stringify(testUser);
        localStorage.setItem('user', testUserString);
        var component = TestRenderer.create( <
            SideBar handleShowSidebar = {
                testFunction
            }
            />
        );
        expect(component).toMatchSnapshot();
    });
});