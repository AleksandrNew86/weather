
import React from "react";

import "../styles/WeatherResult.css"

function FiveDaysCheckbox(props) {
    return (
        <div className="div-for-one-weather">
            <fieldset>
                <legend>Выберите, если хотите видеть погоду на пять дней</legend>

                <div>
                    <input type="checkbox" name="fiveDays" onChange={() => {props.updateIFiveDays()}} />
                        <label htmlFor="fiveDays"><b>Погода на пять дней</b></label>
                </div>
            </fieldset>
        </div>
            );
            }
export default FiveDaysCheckbox;

