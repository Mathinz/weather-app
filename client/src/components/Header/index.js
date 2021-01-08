import React from "react";
import { PageHeader } from "antd";
import SearchZip from "../SearchZip";

const AppHeader = ({ searchBar }) => {
  return (
    <PageHeader
      ghost={true}
      backIcon={false}
      title="Weather"
      extra={searchBar ? [<SearchZip />] : []}
    />
  );
};

export default AppHeader;
