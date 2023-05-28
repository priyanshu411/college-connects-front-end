import { useState, useEffect } from "react";
import constants from "../../utility/constants";
import { getDate } from "../../utility/CommonUtility";
import axios from "axios";
function News() {
    useEffect(() => {
        fetchNews(localStorage.getItem("token"),0);
    }, []);


    const [news, setNews] = useState([]);

    function handleDay(days){
        fetchNews(localStorage.getItem("token"),days);
    }

    async function fetchNews(token,days) {
        await axios.get(constants.API_URL + "/api/news?date=" + getDate(days), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response);
                setNews(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <section className="container">
                <h3 className="center-align txt-col1">News</h3>
                <div className="center-align my-3">
                    <button className="btn waves-effect waves-light btn-1" onClick={()=>handleDay(0)}>Today
                        
                    </button>
                    
                    <button className="btn waves-effect waves-light btn-1" onClick={()=>handleDay(-1)}>YesterDay
                      
                    </button>
                    <button className="btn waves-effect waves-light btn-1" onClick={()=>handleDay(1)}>Tomorrow
                      
                    </button>
                </div>
                <div className="row">
                    {news.length > 0 ?
                        news.map((data, index) => {
                            return (
                                <div className="col vh-25 s10 offset-s1 m6 l4" key={index}>
                                    <div className="card shadow my-3 mx-2">
                                        <div className="card-content news-card">
                                            <span className="fs-5 txt-col2">{data.newsTittle}</span>
                                            <p>{data.newsDetail}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <p className="center-align fs-3 txt-col2">No recoard found</p>
                    }
                </div>
            </section>
        </>
    );
}
export default News