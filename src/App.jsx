import { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import GuessGame from "./components/NumberGuess";

const App = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    number: "",
  });

  const [error, setError] = useState({
    userNameError: "",
    numberError: "",
  });
const api = "jkasgdfjhgbs"
  function handleChanges(target) {
    const { name, value } = target;

    setLoginDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function resetForm() {
    setLoginDetails(() => {
      return {
        username: "",
        number: "",
      };
    });
  }

  function submitButton() {
    var reg = /^(\+977)?[9][6-9]\d{8}$/;
    console.log(reg.test(loginDetails.number));

    if (loginDetails.username == "" || loginDetails.number == "") {
      setError((prev) => {
        return {
          ...prev,
          userNameError: "User name must be longer than 3 letters",
          numberError: "Please input Phone Number",
        };
      });
    }

    if (loginDetails.username === "" || loginDetails.username.length <= 2) {
      setError((prev) => {
        return {
          ...prev,
          userNameError: "User name must be longer than 3 letters",
        };
      });
      return;
    } else {
      setError((prev) => {
        return {
          ...prev,
          userNameError: "",
        };
      });
      // return;
    }
    // var reg = /^\\+[1-9]{1}[0-9]{1,14}$/;
    if (!reg.test(loginDetails.number)) {
      setError((prev) => {
        return {
          ...prev,
          numberError: "Number must be nepali Number",
        };
      });
      return;
    } else {
      setError((prev) => {
        return {
          ...prev,
          numberError: "",
        };
      });
      // return;
    }

    setError((prev) => {
      return {
        userNameError: "",
        numberError: "",
      };
    });
    console.log(loginDetails);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <InputField
            name="username"
            placeholder="Enter Username"
            label="UserName"
            change={handleChanges}
            id="username"
            type="text"
            value={loginDetails.username}
          />
          <p>{error.userNameError}</p>
          <InputField
            name="number"
            placeholder="Enter number"
            label="number"
            change={handleChanges}
            id="number"
            type="text"
            value={loginDetails.number}
          />
          <p>{error.numberError}</p>

          <div className="flex items-center justify-between w-full">
            <Button submitFn={submitButton}>Submit</Button>
            <Button submitFn={resetForm}>reset</Button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <div>
        {/* <p>You entered:</p>
        <p>userName: {username}</p>
        <p>Password: {password}</p> */}
      </div>
    </div>

    // <GuessGame/>
  );
};

export default App;
