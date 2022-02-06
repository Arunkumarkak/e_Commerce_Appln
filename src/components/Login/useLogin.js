import { useHistory } from "react-router-dom";
const useLogin = () => {
  const history = useHistory();

  //   function for handlesubmit
  const handleSubmit = () => {
    history.push("./productList");
  };
  return {
    handleSubmit
  };
};
export default useLogin;
