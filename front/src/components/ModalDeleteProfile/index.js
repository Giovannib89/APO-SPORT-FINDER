import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './modalDeleteProfile.scss';

const ModalDeleteProfile = ({
  password,
  changeField,
  handleDeleteProfile,
  onClickCloseDeleteProfile,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteProfile();
  };
  const handleOnClickCloseDeleteProfile = () => {
    console.log('click');
    onClickCloseDeleteProfile();
  }
  return (
    <div className='modalDeleteProfile'>
      <div className='modalDeleteProfile__container'>
        <button
            type="submit"
            className="modalDeleteProfile__container__close"
            onClick={handleOnClickCloseDeleteProfile}
        >
          <IoIosCloseCircleOutline className="modalDeleteProfile__container__close__circle"/>
        </button>
        <h1 className='modalDeleteProfile__container__title'>Suppression du compte</h1>
        <p className='modalDeleteProfile__container__text'>
          Veuillez saisir votre mot de passe pour supprimer votre compte.
        </p>
        <form 
          className='modalDeleteProfile__container__form'
          onSubmit={handleSubmit}
        >
          <Field
            name="password"
            className="modalDeleteProfile__container__form__field"
            type="password"
            placeholder="Mot de passe..."
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="modalDeleteProfile__container__form__button"
          >
            Valider
          </button>
        </form>
        <button
          type="submit"
          className='modalDeleteProfile__container__button'
          onClick={handleOnClickCloseDeleteProfile}
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

ModalDeleteProfile.propTypes = {
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleDeleteProfile: PropTypes.func.isRequired,
  onClickCloseDeleteProfile: PropTypes.func.isRequired,
};

export default ModalDeleteProfile
