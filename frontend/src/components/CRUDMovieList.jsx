import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIES_API_URL } from '../apiUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddMovieModal from './AddMovieModal';
function CRUDMovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(MOVIES_API_URL);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pb-5 header text-center">
      <div className="container py-5 text-white">
        <header className="py-2">
          <h1 className="display-5" style={{color:'black'}}>Movie List</h1>
        </header>

        <div className="top" style={{ display: 'flex', justifyContent:'space-evenly'}}>
            <div className="row mb-2">
              <div className="col-lg-12 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="addnew">
            <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOpenModal}>
                                 Add Movie <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <AddMovieModal show={showModal} handleClose={handleCloseModal} />
            </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="card border-0 shadow">
              <div className="card-body p-5">

                {/* Responsive table */}
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMovies.map((movie, index) => (
                        <tr key={movie.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{movie.name}</td>
                          <td>{movie.genre}</td>
                          <td>{movie.rating}</td>
                          <td>
                            <ul className="list-inline m-0">
                              <li className="list-inline-item">
                                <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit">
                                  <FontAwesomeIcon icon={faEdit} />
                                </button>
                              </li>
                              <li className="list-inline-item">
                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete">
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRUDMovieList;
