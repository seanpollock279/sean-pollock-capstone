import React from "react";

function Uploader () {
    return (
        <div>
            <h1>Upload New Location</h1>

            <form action="">
                <label htmlFor="">NAME OF LOCATION</label>
                <input type="text"/>
                <label htmlFor="">DESCRIPTION OF LOCATION</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label htmlFor="">LOCATION ADDRESS</label>
                <input type="text" placeholder="Street # and street name"/>
                <label htmlFor="">CITY</label>
                <input type="text" placeholder="city"/>
                <label htmlFor="">REGION</label>
                <select name="" id="">
                    <option value="">AB</option>
                    <option value="">BC</option>
                    <option value="">MN</option>
                    <option value="">NFLD</option>
                    <option value="">NS</option>
                    <option value="">ON</option>
                    <option value="">PEI</option>
                    <option value="">SK</option>
                    <option value="">NB</option>
                    <option value="">QC</option>
                    <option value="">YK</option>
                    <option value="">NVT</option>
                    <option value="">NWT</option>
                </select>
                <label htmlFor="">CATEGORIES</label>
                <input type="checkbox"/><p></p>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>


            </form>
        </div>
    )
}