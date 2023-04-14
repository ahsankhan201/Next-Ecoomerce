import React,{FunctionComponent } from "react";
import SearchNav from "../components/navBar/SearchNav";
import { action } from "@storybook/addon-actions";

export default {
  title: "SearchNav",
  component: SearchNav,
};

const Template: FunctionComponent<{ args: any }> = (args) => <SearchNav {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ChnagedText=Template.bind({});
ChnagedText.args={
  title:"This is a new title",
  textColor:"red",
  fontSize:"20px",
  searchText:"Shoes whose price is less than 1000"
}

export const Colored = Template.bind({});
Colored.args = {
  textColor: "red",
  onClick: action("Navigate to home page"),
};
