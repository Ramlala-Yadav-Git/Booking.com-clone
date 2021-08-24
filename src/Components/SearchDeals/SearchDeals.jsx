import styles from "./SearchDeals.module.css"
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

export const SearchDeals = () => {

    const [initvalue, onChange] = useState(new Date());
    const [endvalue, onEndChange] = useState(new Date());
    const [intiDate, setInitDate] = useState(false)
    const [endDate, setEndDate] = useState(false)
    const [currentMonth, currentDay, currentDayNum] = currentDatePicker(initvalue.getDay(), initvalue.getMonth(), initvalue.getDay())
    const [endMonth, endDay, endDayNum] = endDatePicker(endvalue.getDay(), endvalue.getMonth(), endvalue.getDay())

    const handleInitDate = () => {
        setInitDate(!intiDate)
        setEndDate(!endDate)

    }
    const handleEndDate = () => {
        setInitDate(!endDate)
        setEndDate(!intiDate)

    }
    // console.log(value.getDate());


    return <div className={styles.searchDealsContainer}>
        <div className={styles.uppertext}>
            <h3>
                Find deals on hotels, homes and much more...
            </h3>
            <p>
                From cosy country homes to funky city flats
            </p>
        </div>
        <div className={styles.searchDealsBars}>
            <div className={styles.search}>
                <div className={styles.svgImg}>
                    <img src="https://cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg" alt="icon" />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder="Where are you going?" />
                </div>
                <div className={styles.Cross}>
                    < svg className={styles.svgCross} focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
                </div>
            </div>
            <div className={styles.calender}>
                <div className={styles.calenderPermnantItems}>
                    <div>
                        <svg fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 128 128"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z" fillRule="evenodd"></path></svg>
                    </div>
                    <div onClick={handleInitDate}>
                        <p>
                            {currentDay}
                        </p>

                        <p>
                            {currentDayNum}

                        </p>
                        <p>
                            {currentMonth}

                        </p>
                        -
                    </div>
                    <div>
                        -
                    </div>
                    <div onClick={handleEndDate}>
                        <p>
                            {endDay}
                        </p>

                        <p>
                            {endDayNum}

                        </p>
                        <p>
                            {endMonth}

                        </p>

                    </div>
                </div>
                {
                    intiDate &&
                    <div className={styles.calenderItem}>
                        <Calendar
                            onChange={onChange}
                            value={initvalue}
                        />
                    </div>
                }
                {
                    endDate &&
                    <div className={styles.calenderItem}>
                        <Calendar
                            onChange={onEndChange}
                            value={endvalue}
                        />
                    </div>
                }
            </div>

            <div className={styles.selector}>
                <div className={styles.manIcon}>
                    <img src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg" alt="manSVG" />
                </div>
                <div className={styles.selectorItems}>
                    <p>
                        2 adults  .
                    </p>
                    <p>
                        0 children  .
                    </p>
                    <p>
                        2 rooms
                    </p>
                </div>
                <div>
                    <img src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg" alt="corousel" />
                </div>
            </div>
            <div className={styles.button}>
                <button>Search</button>
            </div>
        </div>
        <div className={styles.lowerText}>
            <input type="checkbox" />
            <p>I'm travelling for work</p>
        </div>
    </div>

}



function currentDatePicker(D, M, day) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var d = new Date();
    var currentDay = weekday[D];

    var currentMonth = month[M];

    var currentDayNum = day

    return [currentMonth, currentDay, currentDayNum]
}

function endDatePicker(D, M, day) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var d = new Date();
    var currentDay = weekday[D];

    var currentMonth = month[M];

    var currentDayNum = day

    return [currentMonth, currentDay, currentDayNum]
}