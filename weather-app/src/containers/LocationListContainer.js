import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationList from './../components/LocationList';
import { setSelectedCity } from './../actions';

class LocationListContainer extends Component{
   
    handleSelectedLocation = city =>{
        this.props.setCity(city);
     }

    render(){
        return(
            <LocationList cities={this.props.cities} 
            onSelectedLocation={this.handleSelectedLocation}></LocationList>     
        );
    }
}

LocationListContainer.propTypes={
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch =>(
    {
        //nombre propiedad          nombre import
        setCity: value => dispatch(setSelectedCity(value))
    }
);


export default connect(null,mapDispatchToProps)(LocationListContainer);