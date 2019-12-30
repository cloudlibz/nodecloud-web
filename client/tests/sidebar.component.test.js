import TestRenderer from 'react-test-renderer';
import SideBar from '../src/_components/SideBar'
import React from 'react'


describe("<SideBar /> Unit Tests", () => {

    it("renders correctly", () => {
        var testFunction = jest.fn();
        var component = TestRenderer.create( <
            SideBar changeSelectedDashboardService = {
                testFunction
            }
            />
        );
        expect(component).toMatchSnapshot();
    });
});