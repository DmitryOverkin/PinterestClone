import {Input, Avatar, Button} from "antd";
import {SearchOutlined, UserOutlined, DownOutlined} from "@ant-design/icons";

import {useSelector} from "react-redux";
import type {RootState} from "../../globalStores/store";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const {isAuth} = useSelector((state: RootState) => state.auth);

  const navigator = useNavigate();

  return (
    <div className="flex gap-4 py-6 items-center w-full sticky top-0 z-10 bg-white">
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
      {isAuth ? (
        <Avatar
          className="cursor-pointer"
          alt="Личный кабинет"
          size={37}
          icon={<UserOutlined />}
        />
      ) : (
        <Button type="text" onClick={() => navigator("/auth")}>Войти</Button>
      )}

      <DownOutlined
        style={{color: "rgba(100, 100, 100, 0.5)"}}
        className="p-1.5 cursor-pointer rounded-lg hover:bg-gray-200"
      />
    </div>
  );
};

export default Header;
