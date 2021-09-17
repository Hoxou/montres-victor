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
            <Postcard image="../images/cardbg.png"title="及性人用媽事讀推高書四外片的步如！" date="16 september 2021" description="星為了，年之了，看家以有學養：中係個；為在在半把孩的大？以可問？非水清軍朋任親行大團出文讀小。心看全銀的期發上看力我如親被息告紀童下手重政及應！兒員我用那知麼死名難寫不如一密倒，無情或為地連民足送之是散父不，合這在不，法如聽想取小裡五。有平如走動壓母語古他水正謝進不現的的。"/>
        </div>
    )
}

export default Home