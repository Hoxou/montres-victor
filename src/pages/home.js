import * as React from "react"
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import "../styles/index.css"
import Postcard from "../components/Postcard"


const Home = () => {

    return(
        <div>
            <Navbar active="/home"/>
            <Jumbotron title="Jaquet Droz 全新大秒針Skeleton鏤空陀飛輪腕錶" date="16 august 2021" description="龍子做為如還名看愛度強像務的此筆這！可輪不業力斷設改名不，名下老回：事證用有有保般！說情五次連兒才，大平萬式意辦北房想到也高得關先的：立聲日進千畫國候精列見計；於意"/>
            <Postcard title="Jaquet Droz 全新大秒針Skeleton鏤空陀飛輪腕錶" date="16 august 2021" description="龍子做為如還名看愛度強像務的此筆這！可輪不業力斷設改名不，名下老回：事證用有有保般！說情五次連兒才，大平萬式意辦北房想到也高得關先的：立聲日進千畫國候精列見計；於意"/>
        </div>
    )
}

export default Home