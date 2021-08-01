import '../Assets/css/style.css'
import React, {Component} from 'react'
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            apps: []
        }
    }

    componentDidMount(){
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        .then(res => {
            let apps = res.data.map(el => {
                return{
                    id: el.id,
                    name: el.name,
                    description: el.description,
                    rating: el.rating,
                    release: el.release_year,
                    size: el.size,
                    platform: el.is_android_app,
                    image: el.image_url,
                    price: el.price
                }})
            this.setState({apps})
        })
    }

    render() {
      return (
            <section>
            <h1>Popular Mobile Apps</h1>
               {
                    this.state.apps.map((item)=>{
                      return(                    
                        <div id="article-list">
                                    <div className="article">
                                            <h3>{item.name}</h3>
                                            <div style={{float: "left", marginLeft:"50px",marginRight:"50px"}}>
                                                <img src={item.image} alt="Image" style={{width:"300px",height:"150px",marginRight: "5px", objectFit: "cover"}}/>
                                            </div>
                                                    <strong><p>Release Year: {item.release}</p></strong>
                                                    <strong><p>Price: {item.price}</p></strong>
                                                    <strong><p>Rating: {item.rating}</p></strong>
                                                    <strong><p>Size: {item.size/1000} GB</p></strong>
                                                    <strong><p>Platform: {item.platform === 1 ? "Android" : "IOS"}</p></strong>
                                                <br />
                                                <br />
                                                <br />
                                                <p style={{textAlign:"justify"}}>
                                                    <strong>Deskripsi: </strong>{item.description}
                                                </p>
                                    </div>
                        </div>
                      )
                    })
                  }
        </section>
      )
    }
  }

export default Home;