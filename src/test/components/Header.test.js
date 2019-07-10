import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header";
import Adapter from "enzyme-adapter-react-16";
import "../setupTests";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").text()).toBe(1);
  });
  