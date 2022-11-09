import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentitiesCategory = this.props.match.params.fentities
        return (
            <div>
                <h1 id="fentities-title">
                    {/*Get from `match`*/}
                    {fentitiesCategory}
                    </h1>
                <div id="fentities-container">
                    {this.props.state[fentitiesCategory].map(f => {
                        return (
                            <Link to={`/directory/${fentitiesCategory}/${f.name}`}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities