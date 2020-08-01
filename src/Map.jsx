import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const containerStyle = {
      position: "relative",
      width: "600px",
      height: "600px",
    };
    const shops = this.props.repairShops;
    const mapCenter = this.props.activeShop.position;
    const handleClick = (evt) => {
      const shopName = evt.name;
      const shop = shops.find(x => x.name === shopName);
      return this.props.onClickFunction(shop)
    };
    const listItems = shops.map((shop) =>
    <Marker key={shop.name}  name={shop.name} position={shop.position} onClick={handleClick}>
    </Marker>
  );
    return (
      <Map  google={this.props.google} containerStyle={containerStyle} intitialCenter={{lat: 37.778519, lng: -122.405640}} center={mapCenter} style={containerStyle} zoom={14}>
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
