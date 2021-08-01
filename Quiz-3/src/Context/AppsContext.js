import React, { useState, CreateContext } from "react";

const AppsContext = CreateContext

const AppsProvider = props => {
  const [apps, setapps] = useState([]);
  const [currentID, setCurrentID] =  useState(null)

  return (
    <AppsContext.Provider value={[apps, setapps, currentID, setCurrentID]}>
      {props.children}
    </AppsContext.Provider>
  );
};

export {AppsContext, AppsProvider}