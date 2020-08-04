import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const containerStyle = {
      position: "relative",
      width: "600px",
      height: "600px",
    };
    const styles = [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.park",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.school",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.government",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.medical",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ];
    const label = {
      fontWeight: "bold",
      // text: "A",
      fontSize: "15px",
      color: "white",
      
    };
    const markerIcon = "/car-repair.svg";
    const shops = this.props.repairShops;
    const mapCenter = this.props.activeShop.position;
    const handleClick = (evt) => {
      const shopName = evt.name;
      const shop = shops.find((x) => x.name === shopName);
      return this.props.onClickFunction(shop);
    };
    const listItems = shops.map((shop, index) => (
      <Marker
        key={shop.name}
        name={shop.name}
        label={{...label, text: `${index+1}`}}
        // icon={markerIcon}
        position={shop.position}
        onClick={handleClick}
      ></Marker>
    ));
    return (
      <Map
        google={this.props.google}
        containerStyle={containerStyle}
        styles={styles}
        intitialCenter={{ lat: 37.778519, lng: -122.40564 }}
        center={mapCenter}
        style={containerStyle}
        zoom={14}
      >
        {/* <Marker onClick={this.onMarkerClick} name={"Current location"} /> */}
        {listItems}
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHKQHB3WXPUS7z7bCnlNHhA-isVof3sSk",
  v: "3.30",
})(MapContainer);
