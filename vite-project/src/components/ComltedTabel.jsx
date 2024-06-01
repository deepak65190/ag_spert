import React, { useState, useContext } from 'react';

import styles from "./table.module.css";

import { ThemeContext } from '../context/ThemeContext';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const CompletedData = () => {

  const {theme ,style}=useContext(ThemeContext)
  const {isAuth}=useContext(AuthContext)
  if (!isAuth) {
    return <><Navigate to="/" /> {alert("login please")}</>;
  }

  //table dummy data
  const data=[
    {id:12500,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:1215,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:1265,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:1925,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:125,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:1025,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:7125,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:3125,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
    {id:1250,cName:"ram",price:1205,lModified:"29/05/24 (6:06 PM)"} ,
  ]
   

  return (
    <>
     
      
      <div className={styles.container} style={theme ? style[0] : style[1]} >
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th style={{ padding: "20px" }}>Last Modified</th>
             
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && data.map((item) => {
                return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.cName}</td>
                    <td>{item.price}</td>
                    <td>{item.lModified}</td>
                </tr>)

            })}
          </tbody>
        </table>
      </div>
    </>
  );
};


