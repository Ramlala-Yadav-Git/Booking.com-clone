import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Main.module.css'
import axios from 'axios';
// import useTimedout from '../Hooks/useTimeout'
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const Discover = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()

    }, [])
    const getData = () => {
        axios.get("https://manishsinghbhadouria.github.io/api/db.json").then((res) => {
            setData(res.data[0].discover);
        })
    }
    const [pgnumber, setpgnumber] = useState(0)
    const items = 5
    const pgvisited = pgnumber * items
    let dataitems, len
    if (data) {
        dataitems = data.slice(pgvisited, pgvisited + items)
        len = Math.ceil(data.length / items)
    }
    const changePage = ({ selected }) => {
        setpgnumber(selected)
    }
    return (
        <div style={{
            margin: "auto",
            width: "80%",

        }}>
            <h2 style={{ paddingTop: "25px" }}>Discover</h2>
            <div>
                <div className={styles.pagination}>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={len}
                        onPageChange={changePage}
                        containerClassName={styles.paginationbtns}
                        previousLinkClassName={'prev-btn'}
                        nextLinkClassName={'next-btn'}
                        disabledClassName={'pagination-disabled'}
                        activeClassName={styles.paginationactive}
                    />
                </div>
                {

                    <div style={{ marginTop: "-10px", display: "grid", gridGap: "10px", gridTemplateColumns: "auto auto auto auto auto" }}>
                        {dataitems.map((el) => {
                            return <div key={el.title} style={{ cursor: "pointer", marginBottom: "-33px", padding: "0" }}>
                                <img style={{ width: "100%", height: "150px", marginTop: "20px" }} src={el.img} alt={el.title} />
                                <p style={{ color: "#4A9AD4", textAlign: "center", fontSize: "14px", padding: "0", marginTop: "0" }}>{el.title}</p>
                            </div>
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export { Discover }
