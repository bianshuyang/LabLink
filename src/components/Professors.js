import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGINATION = 8;

function SampleComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to SampleComponent</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

function generatePagination(currentPage, maxPages) {
    let pages = [];
    if (maxPages <= MAX_VISIBLE_PAGINATION) {
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
    } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', maxPages];
        if (currentPage <= 3) {
            pages = [1, 2, 3, 4, '...', maxPages];
        } else if (currentPage >= maxPages - 2) {
            pages = [1, '...', maxPages - 3, maxPages - 2, maxPages - 1, maxPages];
        }
    }
    return pages;
}

function Professors() {
    const [ProfessorsData, setProfessorsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');

    useEffect(() => {
        // fetch('/api/professors').then(response => response.json()).then(data => setProfessorsData(data));
    }, []);

    return (
        <div>
          {/* Component JSX */}
          <SampleComponent />
        </div>
    )
}

export default Professors;
