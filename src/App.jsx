import { useState } from "react";
import UserDetails from "./components/UserDetails";
import UserInput from "./components/UserInput";
import { getUser } from "./components/api";
import { Divider, Progress ,useToast} from "@chakra-ui/react";
import {message} from 'antd'

const App = () => {
  const [popup,displayPopup]=message.useMessage()
  const [data, setData] = useState(null);
  const showError = () => {
    popup.open({
      type: 'error',
      content: 'User not Exist',
      style: {
        marginTop: '7vh',
      },
    });
  };
  const getData = (username) => {
    getUser(username)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(null)
       if(username)showError()
      });
  };
  return (
    <>
    {displayPopup}
      <UserInput getData={getData} />
      <Divider />
      {data ? <UserDetails data={data} /> :''}
    </>
  );
};

export default App;
