import React from "react";
import { PageHeader } from "antd";
import SearchZip from "../SearchZip";

const AppHeader = ({ searchBar }) => {
  return (
    <PageHeader
      ghost={true}
      backIcon={false}
      title="Weather App"
      extra={searchBar ? [<SearchZip key={"1"}/>] : []}
    />
  );
};

export default AppHeader;
