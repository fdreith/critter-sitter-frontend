import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, post, update } from '../actions/fetch';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import FileUploadeder from './FileUploader';

const EventForm = (props: any) => {
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

  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    setState({ ...state, attachment: selectedFile });
  }, [selectedFile]);

  const [state, setState] = props.event
    ? useState<any>({
        event_type: props.event.attributes.event_type,
        name: props.event.attributes.name,
        details: props.event.attributes.details,
        date: props.event.attributes.date,
        attachment: props.event.attributes.attachment
      })
    : useState<any>({
        event_type: 'event',
        name: '',
        details: '',
        user_id: parseInt(currentUser.id),
        date: new Date(),
        attachment: ''
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
    props.event
      ? dispatch(update(state, props.event.id, props.history, 'event'))
      : pets.map((pet: any) => {
          const event = { ...state, pet_id: parseInt(pet.value) };
          return dispatch(post(event, props.history, 'event'));
        });
  };

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit}>
        <div>
          event Type:
          <br />
          <label>
            <input
              type="radio"
              name="event_type"
              value="event"
              checked={state.event_type === 'care'}
              onChange={handleChange}
            />
            Event
          </label>
          <label>
            <input
              type="radio"
              name="event_type"
              value="reminder"
              checked={state.event_type === 'reminder'}
              onChange={handleChange}
            />
            Reminder
          </label>
          <label>
            <input
              type="radio"
              name="event_type"
              value="vet"
              checked={state.event_type === 'vet'}
              onChange={handleChange}
            />
            Vet event
          </label>
          <br />
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={props.event && state.name}
            placeholder="Name of event"
            onChange={handleChange}
          />
          <br />
          Details:
          <br />
          <input
            type="text"
            name="details"
            value={props.event && state.details}
            placeholder="Details of event"
            onChange={handleChange}
          />
          <br />
        </div>
        {props.event || (
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
        {state.event_type === 'reminder' && (
          <Datetime
            value={state.date}
            onChange={handleDateChange}
            dateFormat={true}
          />
        )}
        {state.event_type === 'vet' && (
          <>
            {/* <input
              type="file"
              value={selectedFile}
              onChange={(e: any) => setSelectedFile(e.target.files[0])}
            /> */}
            <FileUploadeder
              onFileSelectSuccess={(file: any) => setSelectedFile(file)}
              onFileSelectError={({ error }: any) => alert(error)}
            />
          </>
        )}
        <br />

        {props.event ? (
          <input type="submit" value="Update event" className="button" />
        ) : (
          <input type="submit" value="Create event" className="button" />
        )}
      </form>
      <div>
        <button className="button" onClick={() => props.history.goBack()}>
          Cancel
        </button>

        {props.event && (
          <button
            className="button"
            onClick={() =>
              dispatch(deleteItem(props.event.id, props.history, 'event'))
            }
          >
            Delete event
          </button>
        )}
      </div>
    </div>
  );
};

export default EventForm;
