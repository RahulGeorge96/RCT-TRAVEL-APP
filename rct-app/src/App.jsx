import { useEffect, useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle';
import Filter from './components/Filter';
import Form from './components/Form';
import DestinationGrid from './components/DestinationGrid';
import DetailView from './components/DetailView';
import axios from "axios";


const fetchData = (setDestinations) => {
  axios
    .get(
      "https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json"
    )
    .then((res) => {
      const dataWithId = Object.keys(res.data).map((key) => ({
        id: key,
        ...res.data[key],
      }));
      setDestinations(dataWithId);
    })
    .catch((error) => {
      console.log(error);
    });
};

const filteredDestinations = (
  destinations,
  countryFilter,
  budgetFilter,
  searchQuery
) => {
  return destinations.filter(
    (destination) =>
      (!countryFilter || destination.country === countryFilter) &&
      destination.averageBudget <= budgetFilter &&
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};


function App() {
 const [destinations, setDestinations] = useState([]);
 const initialTheme = localStorage.getItem("theme") || "light";
 document.body.className = initialTheme === "dark" ? "dark" : "light";
 const [theme, setTheme] = useState(initialTheme);

 const [countryFilter, setCountryFilter] = useState("");
 const [budgetFilter, setBudgetFilter] = useState("4000");
 const [searchQuery, setSearchQuery] = useState("");
 const [updatingDestination, setUpdatingDestination] = useState(null);
 const [showForm, setShowForm] = useState(false);
 const [selectedDestination, setSelectedDestination] = useState(null);

 useEffect(() => {
   fetchData(setDestinations);
 }, []);

 const filterDestinations = filteredDestinations(
   destinations,
   countryFilter,
   budgetFilter,
   searchQuery
 );

 const handleEdit = (destination) => {
   setUpdatingDestination(destination);
   setShowForm(true);
 };

 const handleFormSubmit = (destination) => {
   if (updatingDestination) {
     axios
       .put(
         `https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations/${updatingDestination.id}.json`,
         destination
       )
       .then(() => {
         fetchData(setDestinations);
       })
       .catch((error) => {
         console.error(error);
       });
   } else {
     axios
       .post(
         "https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json",
         destination
       )
       .then(() => {
         fetchData(setDestinations);
       })
       .catch((error) => {
         console.error(error);
       });
   }
   setShowForm(false);
   setUpdatingDestination(null);
 };

 const handleCancel = () => {
   setShowForm(false);
   setUpdatingDestination(null);
 };

 const handleAddNew = () => {
   setUpdatingDestination(null);
   setShowForm(true);
 };

 const handleCardClick = (destination) => {
   setSelectedDestination(destination);
 };

 const handleCloseDetailView = () => {
   setSelectedDestination(null);
 };

  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Filter
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        budgetFilter={budgetFilter}
        setBudgetFilter={setBudgetFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div>
        <button onClick={handleAddNew}>Add New Destination</button>
      </div>
      {showForm ? (
        <Form
          destination={updatingDestination}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      ) : (
        <DestinationGrid
          destinations={filterDestinations}
          onEdit={handleEdit}
          onCardClick={handleCardClick}
        />
      )}
      {selectedDestination && (
        <DetailView
          destination={selectedDestination}
          onClose={handleCloseDetailView}
        />
      )}
    </>
  );
}

export default App
