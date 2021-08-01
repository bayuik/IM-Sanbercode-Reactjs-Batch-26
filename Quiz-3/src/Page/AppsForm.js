import React, {useContext, useState, useEffect} from "react"
import {AppsContext} from "../Context/AppsContext"
import axios from 'axios';

const AppsForm = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        review: "",
        release: 2000,
        page: 0,
        price: 0,
        image: ""})
    const [apps, setapps,currentID, setCurrentID] = useContext(AppsContext)
    
    useEffect( () => {
        if (currentID !== null){
            axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps${currentID}`)
            .then(res => {
                let data = res.data
                setInput({...input,
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    review: data.review,
                    release: data.release_year,
                    page: data.totalPage,
                    price: data.price,
                    image: data.image_url
                })
            })
        }
      },[currentID])

    const handleSubmit = (event) =>{
        event.preventDefault()

        if (currentID === null){
            console.log(input.image)
            axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {title: input.title, description: input.description, review: input.review, release_year: input.release, totalPage: input.page, price: input.price, image_url: input.image})
            
            .then(res => {
                let dataBaru = res.data
                console.log(dataBaru)
                setapps([...apps,{id: dataBaru.id, title: dataBaru.title, description: dataBaru.description, review: dataBaru.review, release: dataBaru.release_year, page: dataBaru.totalPage, price: dataBaru.price, image: dataBaru.image_url}])
            })
        } else{
            axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps${currentID}`, {title: input.title, description: input.description, review: input.review, release_year: input.release, totalPage: input.page, price: input.price, image_url: input.image})
            .then(() => {
                let appsBaru = apps.find(el=> el.id === currentID)
                appsBaru.title = input.title
                appsBaru.description = input.description
                appsBaru.review = input.review
                appsBaru.release = input.release
                appsBaru.page = input.page
                appsBaru.price = input.price
                appsBaru.image = input.image
                setapps([...apps])
            })
        }
        setCurrentID(null)
        setInput({
            title: "",
            description: "",
            review: "",
            release: 2000,
            page: 0,
            price: 0,
            image: ""})
    }

    const handleChange = (event) =>{
        let value = event.target.value;

        if (event.target.name === "title"){
            setInput({...input,title:value});
        }else if(event.target.name === "description"){
            setInput({...input,description:value});
        }else if(event.target.name === "review"){
            setInput({...input,review:value});
        }else if(event.target.name === "release"){
            setInput({...input,release:value});
        }else if(event.target.name === "page"){
            setInput({...input,page:value});
        }else if(event.target.name === "price"){
            setInput({...input,price:value});
        }else if(event.target.name === "image"){
            console.log(value)
            setInput({...input,image:value});
        }
    }

    if (apps.length === 0){
        return(
            <>
            </>
        )
    } else{
        return(
            <section>
            <h1 style={{textAlign: "center"}}><strong>appss Form</strong></h1>
                            <form style={{marginBottom: "5%"}} onSubmit={handleSubmit}>
                            <div style={{padding: "5px"}}>
                                        <label>
                                            <strong>Title:</strong>
                                        </label>      
                                        <input style={{float: "right"}}
                                            required
                                            name="title"
                                            type="text"
                                            value={input.title} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Description:</strong>
                                        </label> 
                                        <textarea style={{float: "right"}}
                                            required
                                            name="description"
                                            type="text"
                                            value={input.description} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Review:</strong>
                                        </label>      
                                        <textarea style={{float: "right"}}
                                            required
                                            name="review"
                                            type="text"
                                            value={input.review} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Release Year:</strong>
                                        </label>      
                                        <input style={{float: "right"}}
                                            required
                                            name="release"
                                            type="number"
                                            value={input.release}
                                            min="1980"
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Total Page:</strong>
                                        </label>      
                                        <input style={{float: "right"}}
                                            required
                                            name="page"
                                            type="number"
                                            value={input.page} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Price:</strong>
                                        </label>      
                                        <input style={{float: "right"}}
                                            required
                                            name="price"
                                            type="number"
                                            value={input.price} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <strong>Image URL:</strong>
                                        </label>      
                                        <input style={{float: "right"}}
                                            required
                                            name="image"
                                            type="url"
                                            value={input.image} 
                                            onChange={handleChange}/>
                                        <br />
                                        <br />
                                            <button style={{float: "left",backgroundColor: "green",color:"white"}}><strong>Submit</strong></button>
                                        <br></br>
                                    </div>
                            </form>
            </section>
        )
    }

}

export default AppsForm;