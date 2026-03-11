import {Input, Avatar} from "antd";
import {SearchOutlined, UserOutlined, DownOutlined} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex gap-4 items-center">
      <Input
        style={{
          backgroundColor: "rgba(100, 100, 100, 0.1)",
          borderRadius: "10px",
          alignItems: "center",
          fontSize: "1em",
        }}
        prefix={
          <SearchOutlined
            style={{
              fontSize: "1.5em",
              color: "rgba(100, 100, 100, 0.5)",
              marginRight: "0.5em",
            }}
          />
        }
        size="large"
        placeholder="Поиск"
      />
      <Avatar
        className="cursor-pointer"
        alt="Личный кабинет"
        size={37}
        icon={<UserOutlined />}
      />
      <DownOutlined
        style={{color: "rgba(100, 100, 100, 0.5)"}}
        className="p-1.5 cursor-pointer rounded-lg hover:bg-gray-200"
      />
    </div>
  );
};

export default Header;
