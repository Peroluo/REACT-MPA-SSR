import React from "react";
import { setInitModel } from "@lib/inject";
import { Tab } from "@src/components";

@setInitModel
class Sort extends React.Component {
  render() {
    return (
      <div id="content">
        分类页
        <Tab active={2}></Tab>
      </div>
    );
  }
}
export default Sort;
