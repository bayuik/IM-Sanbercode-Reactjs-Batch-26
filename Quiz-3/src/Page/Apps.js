import React from "react"
import {AppsProvider} from "../Context/AppsContext"
import AppsList from "./AppsList"
import AppsForm from "./AppsForm"

const apps = () =>{
  return(
    <AppsProvider>
      <AppsList />
      <AppsForm />
    </AppsProvider>
  )
}

export default apps