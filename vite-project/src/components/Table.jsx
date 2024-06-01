import React, { useState, useContext } from "react";
import TableCard from "./TableCard";
import { Navigate } from "react-router-dom";
import styles from "./table.module.css";
import { TableContext } from "../context/TableContext";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

const Table = () => {
  const { data, setData } = useContext(TableContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { theme, toggleTheme, style } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  
  //form handle fun
  const handleSubmit = () => {
    let a = new Date();
    let day = ("0" + a.getDate()).slice(-2);
    let month = ("0" + (a.getMonth() + 1)).slice(-2);
    let year = a.getFullYear();

    let hours = a.getHours();
    let minutes = ("0" + a.getMinutes()).slice(-2);
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = hours + ":" + minutes + " " + ampm;

    let formattedDate = `${day}-${month}-${year} (${strTime})`;

    const dataObj = {
      cName: name,
      price,
      id: Date.now() + price,
      lModified: formattedDate,
    };
    if (dataObj.cName !== "" && dataObj.price !== "") {
      setData([...data, dataObj]);
      onClose();
    }
  };

//authenticate
  if (!isAuth) {
    return (
      <>
        <Navigate to="/" /> {alert("login please")}
      </>
    );
  }
  return (
    <>
      <div className={styles.saleBtn}>
        <Button
          variant="outline"
          onClick={onOpen}
          mt="15px"
          style={theme ? style[0] : style[1]}
        >
          + Sale Order
        </Button>
      </div>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="5" style={theme ? style[0] : style[1]}>
          <ModalHeader>Edit Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                required
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline" onClick={handleSubmit} colorScheme="blue">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className={styles.container} style={theme ? style[0] : style[1]}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th style={{ padding: "20px" }}>Last Modified</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item) => <TableCard key={item.id} data={item} />)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
