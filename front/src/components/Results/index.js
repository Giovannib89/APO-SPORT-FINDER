// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// == Import : local
import SearchForm from 'src/containers/SearchForm';
import Banner from 'src/components/Banner';
import './results.scss';

// == Component
const Results = ({
  results,
  history,
  getAllReviews,
}) => { 
  const handleGetAllReviews = () => {
    getAllReviews();
  };
  return (
    <div className="results">
      <Banner />
      <p className='results__slogan'>Recherchez un sport à pratiquer près de chez vous ou partout en France</p>
      <div className="results__searchform">
        <SearchForm />
      </div>
      <div className="results__all">
        <div className="results__all__list">
          {results.map((result) => (
            <div
              key={result.id}
              className="results__all__list__single"
            >
              <p className="results__all__list__single__name">
                <Link
                  to={`/single/${result.id}`}
                  onClick={handleGetAllReviews}
                >
                  {result.titre}
                </Link>
                
              </p>
              <p className="results__all__list__single__adress">
              {result.adresse_numero_voie} {result.adresse_repetition} {result.adresse_type_voie} {result.adresse_libelle_voie} {result.adresse_code_postal} {result.adresse_libelle_commune}
              </p>
              <p className="results__all__list__single__rating">
              ⭐⭐⭐⭐⭐
              </p>
            </div>
          ))}
          
        </div>
        <div className="results__all__map">
          MAP
        </div>
      </div>
      
    </div>
  )
};

Results.propTypes = {
  resluts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired,
      adresse_numero_voie: PropTypes.string,
      adresse_repetition: PropTypes.string,
      adresse_type_voie: PropTypes.string,
      adresse_libelle_voie: PropTypes.string,
      adresse_code_postal: PropTypes.string,
      adresse_libelle_commune: PropTypes.string,
    }),
  ),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  getAllReviews: PropTypes.func.isRequired,
}

export default Results;
