import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import Modal from "react-modal";
import ModalComponent from "../../components/modal/ModalComponent";
import './userMap.css';
import {social_Distancing_MapData} from '../../dummyData'

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

Modal.setAppElement("#root");

const UserMap = () => {

  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [person,setPerson] = useState(null);
  const [employeeId,setEmployeeId] = useState(null);
    function toggleModal(event,personName,empId) {       
        setIsOpen(!isOpen);
        setPerson(personName);
        setEmployeeId(empId)
    }

//   const url =
//     "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

//   const { data, error } = useSwr(url, { fetcher });
//   const peopleClusterData = data && !error ? data.slice(0, 200) : [];

  const data = social_Distancing_MapData;
  const peopleClusterData = data.slice(0, 10);

  const points = peopleClusterData.map(people => ({
    type: "Feature",
    properties: { cluster: false, peopleId: people.id, category: people.category,username:people.location.person.name,empId:people.location.person.id },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(people.location.longitude),
        parseFloat(people.location.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
        <ModalComponent 
        isOpen={isOpen} 
        toggleModal={toggleModal}
        person={person}
        employeeId={employeeId}
          />

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{ lat: 28.4257194, lng: 77.0290894 }}
        defaultZoom={20}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`people-${cluster.properties.peopleId}`}
              lat={latitude}
              lng={longitude}
            >
              <button className="people-marker" onClick={(event)=>{
                  toggleModal(event,cluster.properties.username,cluster.properties.empId);
              }}>
               
                <img src="/person.svg" alt="person" />
              </button>
           
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default UserMap
