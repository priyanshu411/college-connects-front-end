import { useState,useEffect } from "react";
import constants from "../../utility/constants";
import { getDate } from "../../utility/CommonUtility";
import axios from "axios";
function News(){
    useEffect(() => {
        fetchNews(localStorage.getItem("token"));
    }, []);


    const [news, setNews] = useState([]);

    async function fetchNews(token) {
        console.log(`Bearer ${token}`);
        await axios.get(constants.API_URL + "/api/news?date="+getDate(0), {
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


    return(
        <>
         <section className="container">
            <h3 className="center-align txt-col1">News</h3>
                <div className="row">
                    {news.length>0 ?
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
                        :<p className="center-align fs-3 txt-col2">No recoard found</p>
                    }
                </div>
            </section>
        </>
    );
}
export default News