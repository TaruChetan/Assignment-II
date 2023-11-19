import { Input, Space } from "antd";
const { Search } = Input;
const UserInput = ({ getData }) => {
  const onSearch = (value) => {
    getData(value.toString());
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div style={{ textAlign: "center", fontSize: "50px" }}>
        <span>Public</span>
        <span style={{ color: "red" }}> GitHub Users</span>
        <span> Information</span>
      </div>
      <Space
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          display: "flex",
          marginTop: "50px",
          marginBottom: "50px",
        }}
        direction="vertical"
      >
        <Search
          style={{
            width: "90vh",
          }}
          placeholder="Enter username"
          allowClear
          size="large"
          enterButton="show"
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

export default UserInput;
