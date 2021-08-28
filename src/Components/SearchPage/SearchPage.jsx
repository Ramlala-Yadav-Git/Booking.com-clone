import { useState } from "react";
import { HotelData } from "../../Utils/HotelData";
import FooterBlue from "../Footer/FooterBlue";
import { Navbar } from "../Navbar/Navbar";
import { DataComponent } from "../SearchData/DataComponent";
import { FilterFeature } from "./FilterFeature";
import { SearchRequest } from "./SearchRequest";
import styles from "./SearchRequest.module.css"



export const SearchPage = () => {

    const [showData, setShowData] = useState(HotelData)
    // const [price, setPrice] = useState(false)
    // const [star, setStar] = useState(false)
    // const [policy, setPolicy] = useState(false)


    const filterPrice = (e) => {

        if (e.target.name === "price") {
            if (Number(e.target.value) === 1500) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (Number(el.price) > 1500)
                })
                setShowData([...filteredAbove1500])
            }
            else if (Number(e.target.value) === 1000) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return ((Number(el.price) >= 1000));
                })
                setShowData([...filteredAbove1500])
            }
            else if (Number(e.target.value) === 0) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (Number(el.price) <= 1000)
                })
                setShowData([...filteredAbove1500])
            }


        }
        else {
            setShowData(HotelData)
        }
        /// console.log(e.target.value, e.target.checked, e.target.name);


    }
    const filterStar = (e) => {



        const filteredAbove1500 = HotelData.filter((el) => {

            return (Number(el.rating) === Number(e.target.value))
        })
        setShowData([...filteredAbove1500])

    }
    const filterPolicy = (e) => {
        if (e.target.value === "cancellation") {

            const filteredAbove1500 = HotelData.filter((el) => {

                return (el.cancellation === "Free")
            })
            setShowData([...filteredAbove1500])
        }
        if (e.target.value === "breakFast") {

            const filteredAbove1500 = HotelData.filter((el) => {

                return (el.breakFast === "Included")
            })
            setShowData([...filteredAbove1500])
        }
    }
    const filterSearch = (search) => {

        const filteredData = HotelData.filter((e) => {
            return (e.name.toLowerCase().includes(search.toLowerCase()))
        })
        setShowData(filteredData)
    }
    return <>
        <Navbar />
        <div className={styles.serachPageContainer} >
            <div className={styles.left}>
                <SearchRequest filterSearch={filterSearch} />
                <FilterFeature filterPrice={filterPrice} filterStar={filterStar} filterPolicy={filterPolicy} />
            </div>

            <div className={styles.hotelListContainer}>
                {/* <ul className={styles.listOfHotels} > */}

                {
                    showData.map((e, i) => {
                        // console.log(e.url);


                        return <DataComponent url={e.url}
                            key={e.id}
                            name={e.name} city={e.city} distance={e.distance}
                            bedSize={e.bedSize} roomSize={e.roomSize}
                            cancelationPolicy={e.cancelationPolicy}
                            cancellation={e.cancellation}
                            reviews={e.reviews}
                            rating={e.rating}
                            breakFast={e.breakFast}
                            availability={e.availability}
                            availableRooms={e.availableRooms}
                            price={e.price}
                            discountedPrice={e.discountedPrice}
                            id={e.id}
                            view={e.view}
                        />


                    })
                }

                {/* </ul> */}

            </div>
        </div>

        <FooterBlue />

    </>
}