import React, { useEffect, useState } from "react";

const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState("10");

    useEffect(() => {
        select(selected);
    }, []);

    const handleChange = (e) => {
        setSelected(e.target.value);
        select(e.target.value);
    };

    return (
        <ul className="rating">
            <li>
                <input type="radio" value="1" name="rating" id="num1" onChange={handleChange} checked={selected === "1"} />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input type="radio" value="2" name="rating" id="num2" onChange={handleChange} checked={selected === "2"} />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input type="radio" value="3" name="rating" id="num3" onChange={handleChange} checked={selected === "3"} />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input type="radio" value="4" name="rating" id="num4" onChange={handleChange} checked={selected === "4"} />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input type="radio" value="5" name="rating" id="num5" onChange={handleChange} checked={selected === "5"} />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input type="radio" value="6" name="rating" id="num6" onChange={handleChange} checked={selected === "6"} />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input type="radio" value="7" name="rating" id="num7" onChange={handleChange} checked={selected === "7"} />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input type="radio" value="8" name="rating" id="num8" onChange={handleChange} checked={selected === "8"} />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input type="radio" value="9" name="rating" id="num9" onChange={handleChange} checked={selected === "9"} />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input type="radio" value="10" name="rating" id="num10" onChange={handleChange} checked={selected === "10"} />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    );
};

export default RatingSelect;
