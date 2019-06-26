import React, { Component } from 'react';
import Loading from '../loading';
import './img.scss';

class Img extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        this.image.onload = this.imageLoaded.bind(this);
    }

    imageLoaded(){
        this.setState({
            loading: false
        });
    }

    render(){
        const { className = '' } = this.props;
        const loadingClass = this.state.loading ? 'loading' : 'loaded';

        return (
            <div className="image-load-container center">
                <img ref={e => this.image = e} {...this.props} className={`${className} ${loadingClass}`} />
                <div className={`${loadingClass} loading-animation-container`}>
                    <Loading/>
                </div>
            </div>
        );
    }
}

export default Img;
