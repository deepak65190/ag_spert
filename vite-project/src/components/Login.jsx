import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { theme, style } = useContext(ThemeContext);
  const { isAuth, toggleAuth } = React.useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  //handle login fun
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleAuth();
    console.log("Form submitted with data:", formData);
  };

  //authenticate
  if (isAuth) {
    return <Navigate to="/active" />;
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <Box
        w={"30%"}
        style={theme ? style[0] : style[1]}
        m={"auto"}
        p={5}
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        }
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
//"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px
