import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, post, update } from '../../actions/fetch';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import FileUploadeder from '../FileUploader';
import { selectEvent } from '../../utilities';

const EventForm = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const existingEvent = selectEvent(props.match.params.id);

  const options = useSelector((state: any) => {
    return state.pets.map((pet: any) => {
      return {
        label: `${pet.attributes.name}`,
        value: pet.id
      };
    });
  });

  const selectedPets =
    existingEvent &&
    options.filter((option: any) => {
      return existingEvent.relationships.pet.data.id === option.value;
    });
  const [pets, setPets] = useState<any>(existingEvent ? selectedPets : []);

  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    setState({ ...state, attachment: selectedFile });
  }, [selectedFile]);

  const [state, setState] = existingEvent
    ? useState<any>({
        event_type: existingEvent.attributes.event_type,
        name: existingEvent.attributes.name,
        details: existingEvent.attributes.details,
        date: existingEvent.attributes.date,
        attachment: existingEvent.attributes.attachment
      })
    : useState<any>({
        event_type: 'care',
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
    existingEvent
      ? dispatch(update(state, existingEvent.id, props.history, 'event'))
      : pets.map((pet: any) => {
          const event = { ...state, pet_id: parseInt(pet.value) };
          return dispatch(post(event, props.history, 'event'));
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Event Type:
          <br />
          <label>
            <input
              type="radio"
              name="event_type"
              value="care"
              checked={state.event_type === 'care'}
              onChange={handleChange}
            />
            Care
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
            value={existingEvent && state.name}
            placeholder="Name of event"
            onChange={handleChange}
          />
          <br />
          Details:
          <br />
          <input
            type="text"
            name="details"
            value={existingEvent && state.details}
            placeholder="Details of event"
            onChange={handleChange}
          />
          <br />
        </div>
        {/* {!existingEvent && ( */}
        <div>
          <label>Pet(s):</label>
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
        {/* )} */}
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
        {existingEvent ? (
          <input type="submit" value="Update event" className="button" />
        ) : (
          <input type="submit" value="Create event" className="button" />
        )}
      </form>
      <div>
        <button className="button" onClick={() => props.history.goBack()}>
          Cancel
        </button>

        {existingEvent && (
          <button
            className="button"
            onClick={() =>
              dispatch(deleteItem(existingEvent.id, props.history, 'event'))
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
