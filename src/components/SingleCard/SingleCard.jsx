import React from "react";
import {NavLink} from "react-router-dom";
import style from "./SingleCard.module.css";


function SingleCard({id, name, image}) {
    return (
        <NavLink to={`/cocktail/${id}`} style={{ textDecoration: 'none' }}>
            <div className={style.card}>
                <img
                    loading="lazy"
                    className={style.image}
                    src={image}
                    alt={name}
                />

                <div className={style.body}>
                    <h5 className={style.title}>
                        {name}
                    </h5>
                    <p className={style.text}>
                        Clicca per la ricetta
                    </p>
                    </div>
            </div>
        </NavLink>

    )
}

export default SingleCard