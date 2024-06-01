import { useContext, useState, useRef } from "react";
import { TableContext } from "../context/TableContext";
import { ThemeContext } from "../context/ThemeContext";
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
const TableCard = (props) => {
  const { data, setData } = useContext(TableContext);
  const { theme, style } = useContext(ThemeContext);
  const [name, setName] = useState(props.data.cName);
  const [price, setPrice] = useState(props.data.price);
  console.log(data);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  //handle edit fun
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
      ...props.data,
      cName: name,
      price,
      lModified: formattedDate,
    };

    const updatedData = data.map((item) =>
      item.id === props.data.id ? dataObj : item
    );

    setData(updatedData);
    onClose();
  };

  return (
    <tr style={theme ? style[0] : style[1]}>
      <td>{props.data.id}</td>
      <td>{props.data.cName}</td>
      <td>{props.data.price} </td>
      <td>{props.data.lModified}</td>

      <td style={{ cursor: "pointer" }}>
        <Button
          textAlign={"center"}
          style={theme ? style[0] : style[1]}
          variant={"ghost"}
          mt={4}
          onClick={onOpen}
        >
          ...
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={theme ? style[0] : style[1]}>
            <ModalHeader>Edit Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  ref={initialRef}
                  value={name}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </td>
    </tr>
  );
};

export default TableCard;
