import Switch from '@material-ui/core/Switch';
import styles from "./FilterFeature.module.css"
import { HotelData } from "../../Utils/HotelData"
import { useEffect, useState } from 'react';

export const FilterFeature = ({ filterPrice, filterStar, filterPolicy }) => {

    const [countAbove_1500, setCountAbove_1500] = useState("")
    const [countAbove_1000, setCountAbove_1000] = useState("")
    const [countAbove_500, setCountAbove_500] = useState("")



    const [star1, setStar1] = useState("")
    const [star2, setStar2] = useState("")
    const [star3, setStar3] = useState("")
    const [star4, setStar4] = useState("")
    const [star5, setStar5] = useState("")

    const [cancellation, setCancellation] = useState("")
    const [breakfast, setBreakFast] = useState("")


    useEffect(() => {
        const cAbove_1500 = HotelData.filter((el) => {
            return (Number(el.price) >= 1500)
        })

        setCountAbove_1500(cAbove_1500.length)
        const cAbove_1000 = HotelData.filter((el) => {
            return (Number(el.price) <= 1500 && Number(el.price) > 1000)
        })

        setCountAbove_1000(cAbove_1000.length)
        const cAbove_500 = HotelData.filter((el) => {
            return (Number(el.price) <= 1000)
        })

        setCountAbove_500(cAbove_500.length)

        const cAbove_star1 = HotelData.filter((el) => {
            return (Number(el.rating) === 1)
        })

        setStar1(cAbove_star1.length)


        const cAbove_star2 = HotelData.filter((el) => {
            return (Number(el.rating) === 2)
        })

        setStar2(cAbove_star2.length)

        const cAbove_star3 = HotelData.filter((el) => {
            return (Number(el.rating) === 3)
        })

        setStar3(cAbove_star3.length)

        const cAbove_star4 = HotelData.filter((el) => {
            return (Number(el.rating) === 4)
        })

        setStar4(cAbove_star4.length)

        const cAbove_star5 = HotelData.filter((el) => {
            return (Number(el.rating) === 5)
        })

        setStar5(cAbove_star5.length)

        const cancellation = HotelData.filter((el) => {
            return ((el.cancellation) === "Free")
        })

        setCancellation(cancellation.length)

        const cAbove = HotelData.filter((el) => {
            return ((el.breakFast) === "Included")
        })

        setBreakFast(cAbove.length)


    }, [])

    const handleFilterprice = (e) => {

        filterPrice(e)


    }
    const handleFilterStar = (e) => {

        filterStar(e)


    }
    const handleFilterPolicy = (e) => {

        filterPolicy(e)


    }



    return <div className={styles.filterFeatureContainer}>

        <h2 className={styles.header}>Filter by:</h2>

        <div className={styles.budget}>
            <h3>Your budget(per night)</h3>

            <Switch color="primary" />
            <p className={styles.own}>Set your own budget</p>



            <div>
                <div>
                    <input type="radio" value="1500" onChange={handleFilterprice} name="price" />
                    <p>₹1500 +</p>
                </div>

                <p>{countAbove_1500}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="1000" onChange={handleFilterprice} name="price" />
                    <p>₹500 - ₹ 1500</p>
                </div>

                <p>{countAbove_1000}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="0" onChange={handleFilterprice} name="price" />
                    <p>₹0 - ₹ 1000</p>
                </div>

                <p>{countAbove_500}</p>
            </div>
        </div>
        <div className={styles.rating}>
            <h3>
                Star rating
            </h3>
            <div>
                <div>
                    <input type="radio" value="1" name="star" onChange={handleFilterStar} />
                    <p> 1 star</p>
                </div>

                <p>{star1}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="2" name="star" onChange={handleFilterStar} />
                    <p> 2 star</p>
                </div>

                <p>{star2}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="3" name="star" onChange={handleFilterStar} />
                    <p> 3 star</p>
                </div>

                <p>{star3}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="4" name="star" onChange={handleFilterStar} />
                    <p> 4 star</p>
                </div>

                <p>{star4}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="5" name="star" onChange={handleFilterStar} />
                    <p> 5 star</p>
                </div>

                <p>{star5}</p>
            </div>

        </div>
        <div className={styles.reservationPolicy}>

            <h3>Reservation policy</h3>
            <div>
                <div>
                    <input type="radio" value="cancellation" name="policy" onChange={handleFilterPolicy} />
                    <p> Free cancellation</p>
                </div>

                <p>{cancellation}</p>
            </div>
            <div>
                <div>
                    <input type="radio" value="breakFast" name="policy" onChange={handleFilterPolicy} />
                    <p> Free Breakfast</p>
                </div>

                <p>{breakfast}</p>
            </div>
        </div>
    </div>
}

