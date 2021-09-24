import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import ModalComponent from "../../components/modal/ModalComponent";
import './userMap.css';
import Modal from "react-modal";

// import {social_Distancing_MapData} from '../../dummyData'

 const social_Distancing_MapData  = [
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257180",
      person: { id: 4142000, name: "Dileep Kumar" },
      longitude: "77.0281669",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  },
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257345",
      person: { id: 4142030, name: "Krishn Gandhi" },
      longitude: "77.0281457",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257454",
      person: { id: 414250, name: "Sakshi Sharma" },
      longitude: "77.0281897",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257404",
      person: { id: 414255, name: "Omkar Verma"},
      longitude: "77.0281967",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257394",
      person: { id: 4142099, name: "Sudhir Chauhan"},
      longitude: "77.0281667",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257567",
      person: {id: 4142200, name: "Mayank Rajput" },
      longitude: "77.0281667",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213188,
    location_subtype: "",
    month: "2021-09",
  }
  ,{
    category: "anti-social-behaviour",
    location_type: "Force",
     location: {
      latitude: "28.4257777",
      person: { id: 4142001, name: "Manjeet Kumar" },
      longitude: "77.0281669",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213181,
    location_subtype: "",
    month: "2021-09",
  },
  
  
   {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257222",
      person: { id: 4142000, name: "Dileep Kumar" },
      longitude: "77.0281333",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213182,
    location_subtype: "",
    month: "2021-09",
  },
  {
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257345",
      person: { id: 4142033, name: "Krishn Gandhi" },
      longitude: "77.0281457",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213183,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257454",
      person: { id: 4142504, name: "Sakshi Sharma" },
      longitude: "77.0281897",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213184,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4256704",
      person: { id: 4142555, name: "Omkar Verma"},
      longitude: "77.0281967",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213186,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4255594",
      person: { id: 41420997, name: "Sudhir Chauhan"},
      longitude: "77.0281667",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 782131899,
    location_subtype: "",
    month: "2021-09",
  },{
    category: "anti-social-behaviour",
    location_type: "Force",
    location: {
      latitude: "28.4257787",
      person: {id: 414220065, name: "Mayank Rajput" },
      longitude: "77.0284997",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 78213134,
    location_subtype: "",
    month: "2021-09",
  }
  ,{
    category: "anti-social-behaviour",
    location_type: "Force",
     location: {
      latitude: "28.4259345",
      person: { id: 4142030, name: "Dileep Kumar" },
      longitude: "77.0285459",
    },
    context: "",
    outcome_status: null,
    persistent_id: "",
    id: 782134188,
    location_subtype: "",
    month: "2021-09",
  },
 
];
const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

Modal.setAppElement("#root");

const UserMap = () => {
console.log('social_Distancing_MapData',social_Distancing_MapData);
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
  const peopleClusterData = data.slice(0, 20);

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
        defaultZoom={18}
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
