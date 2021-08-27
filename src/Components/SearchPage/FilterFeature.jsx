import Switch from '@material-ui/core/Switch';
import styles from "./FilterFeature.module.css"

export const FilterFeature = ({ filterPrice, filterStar, filterPolicy }) => {



    const handleFilterprice = (e) => {

        ///console.log(e.target.value);
        filterPrice(e)


    }
    const handleFilterStar = (e) => {

        ///console.log(e.target.value);
        filterStar(e)


    }
    const handleFilterPolicy = (e) => {

        ///console.log(e.target.value);
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
                    <input type="checkbox" value="1500" onChange={handleFilterprice} name="price" />
                    <p>₹1500 +</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="1000" onChange={handleFilterprice} name="price" />
                    <p>₹1000 - ₹ 1500</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="0" onChange={handleFilterprice} name="price" />
                    <p>₹0 - ₹ 1000</p>
                </div>

                <p>1</p>
            </div>
        </div>
        <div className={styles.rating}>
            <h3>
                Star rating
            </h3>
            <div>
                <div>
                    <input type="checkbox" value="1" name="star" onChange={handleFilterStar} />
                    <p> 1 star</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="2" name="star" onChange={handleFilterStar} />
                    <p> 2 star</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="3" name="star" onChange={handleFilterStar} />
                    <p> 3 star</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="4" name="star" onChange={handleFilterStar} />
                    <p> 4 star</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="5" name="star" onChange={handleFilterStar} />
                    <p> 5 star</p>
                </div>

                <p>1</p>
            </div>

        </div>
        <div className={styles.reservationPolicy}>

            <h3>Reservation policy</h3>
            <div>
                <div>
                    <input type="checkbox" value="cancellation" name="policy" onChange={handleFilterPolicy} />
                    <p> Free cancellation</p>
                </div>

                <p>1</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" value="breakFast" name="policy" onChange={handleFilterPolicy} />
                    <p> Free Breakfast</p>
                </div>

                <p>1</p>
            </div>
        </div>
    </div>
}

