import { useState, createContext, Children } from "react";
export const TableContext = createContext(null);
const TableProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 12500, cName: "ram", price: 1205, lModified: "29/05/24 (6:06 PM)" },
  ]);
  return (
    <TableContext.Provider value={{ data, setData }}>
      {children}
    </TableContext.Provider>
  );
};
export default TableProvider;
