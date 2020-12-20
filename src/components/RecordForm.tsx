import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, post, update } from '../actions/fetch';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const RecordForm = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);

  const options = useSelector((state: any) => {
    return state.pets.map((pet: any) => {
      return {
        label: `${pet.attributes.name}`,
        value: pet.id
      };
    });
  });

  const [pets, setPets] = useState<any>([]);

  const [state, setState] = props.record
    ? useState<any>({
        record_type: props.record.attributes.record_type,
        name: props.record.attributes.name,
        details: props.record.attributes.details,
        date: props.record.attributes.date
        // attachment: ''
      })
    : useState<any>({
        record_type: 'event',
        name: '',
        details: '',
        user_id: parseInt(currentUser.id),
        date: new Date()
        // attachment: ''
      });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleDateChange = (event: any) => {
    setState({
      date: event
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.record
      ? dispatch(update(state, props.record.id, props.history, 'record'))
      : pets.map((pet: any) => {
          const record = { ...state, pet_id: parseInt(pet.value) };
          return dispatch(post(record, props.history, 'record'));
        });
  };

  console.log(state.date);

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit}>
        <div>
          Record Type:
          <br />
          <label>
            <input
              type="radio"
              name="record_type"
              value="event"
              checked={state.record_type === 'event'}
              onChange={handleChange}
            />
            Event
          </label>
          <label>
            <input
              type="radio"
              name="record_type"
              value="reminder"
              checked={state.record_type === 'reminder'}
              onChange={handleChange}
            />
            Reminder
          </label>
          <label>
            <input
              type="radio"
              name="record_type"
              value="vet"
              checked={state.record_type === 'vet'}
              onChange={handleChange}
            />
            Vet Record
          </label>
          <br />
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={props.record && state.name}
            placeholder="Name of Record"
            onChange={handleChange}
          />
          <br />
          Details:
          <br />
          <input
            type="text"
            name="details"
            value={props.record && state.details}
            placeholder="Details of Record"
            onChange={handleChange}
          />
          <br />
        </div>
        {props.record || (
          <div>
            Pet(s):
            <pre>{JSON.stringify(pets.label)}</pre>
            <MultiSelect
              className="multi-select"
              options={options}
              value={pets}
              onChange={setPets}
              labelledBy={'Select'}
              hasSelectAll={false}
            />
          </div>
        )}
        <br />
        {state.record_type === 'reminder' && (
          <Datetime
            value={state.date}
            onChange={handleDateChange}
            dateFormat={true}
          />
        )}
        <br />

        {props.Record ? (
          <input type="submit" value="Update Record" className="button" />
        ) : (
          <input type="submit" value="Create Record" className="button" />
        )}
      </form>
      <div>
        <button className="button" onClick={() => props.history.goBack()}>
          Cancel
        </button>

        {props.Record && (
          <button
            className="button"
            onClick={() =>
              dispatch(deleteItem(props.record.id, props.history, 'record'))
            }
          >
            Delete Record
          </button>
        )}
      </div>
    </div>
  );
};

export default RecordForm;
