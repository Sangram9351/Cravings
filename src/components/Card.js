import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "420px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eQnWra28mt4EcXQRE23Q2s9X-Z1ivWCVPw&s" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is some important text.</p>
                        <div className="container w-100">
                            <select className="m-2 h-100 bg-success rounded">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className="h-100 m-2 bg-success rounded">
                                <option value="half">Half</option>
                                <option value="Full">Full</option>
                            </select>
                            <div className="d-inline h-100 fs-5">
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
