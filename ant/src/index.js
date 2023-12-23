import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { DatePicker, message, Alert, Button, FloatButton } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./index.css";

const App = () => {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value) => {
    messageApi.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <>
      <div style={{ width: 400, margin: "100px auto" }}>
        <DatePicker onChange={handleChange} />
        <div style={{ margin: "30px 0px" }}>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </div>
        <Alert
          message="Selected Date"
          description={date ? date.format("YYYY-MM-DD") : "None"}
        />
        <Button type="primary">Primary Button</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <FloatButton
          shape="circle"
          badge={{ dot: true }}
          style={{ right: 24 + 70 + 70 }}
        />
        <FloatButton.Group shape="circle" style={{ right: 24 + 70 }}>
          <FloatButton
            href="https://ant.design/index-cn"
            tooltip={<div>custom badge color</div>}
            badge={{ count: 5, color: "blue" }}
          />
          <FloatButton badge={{ count: 5 }} />
        </FloatButton.Group>
        <FloatButton.Group shape="circle">
          <FloatButton
            badge={{ count: 12 }}
            icon={<QuestionCircleOutlined />}
          />
          <FloatButton badge={{ count: 123, overflowCount: 999 }} />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
        {contextHolder}
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
