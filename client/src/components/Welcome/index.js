import React from "react";
import { Result } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import SearchZip from "../SearchZip";

const Welcome = () => {
  return (
    <Result
      icon={<CloudOutlined />}
      title="Welcome, Please search Zip code to see weather!"
      extra={<SearchZip />}
    />
  );
};

export default Welcome;
