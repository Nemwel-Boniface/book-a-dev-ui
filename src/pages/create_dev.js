import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newDev } from '../redux/actions/developers';
import DevForm from '../components/developer/form';

const CreateDev = () => {
  const [dev] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newDev(dev, navigate, e));
  };

  return (
    <section className="form-section">
      <h1>Create a new developer</h1>

      <div>
        <DevForm onSubmit={handleSubmit} />
      </div>

    </section>
  );
};

export default CreateDev;
