import React, { useEffect, useState } from "react";
// import { fetchUsers } from "../actions/users"
// import { postHousehold } from "../actions/households";
import MultiSelect from "react-multi-select-component";
import { useSelector } from 'react-redux'


const  NewHousehold = (props: any) =>  {

  const options = useSelector((state: any) => {
    const users = state.users.map((user: any) => {
      return {label: `${user.attributes.first_name} ${user.attributes.last_name}` , value: user}
    })
    return users
  })
    
  const [values, setValues] = useState<any>({name: "", address: "", password: "", users: [], owner_id: parseInt(props.currentUser.id)})
  
  console.log(values)

  const handleChange = (event: any) => {
    if (event.target) {
      const {name, value} = event.target
        setValues({...values, [name]: value})
    } else {
        setValues({...values, users: [...event]})
    }
  
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.postHousehold(values, props.history);
    props.handleClose();
  };


    return (
      <div className="contianer">
        <form onSubmit={handleSubmit}>
          Name of Household:
          <br />
          <input
            type="text"
            name="name"
            placeholder="name of household"
            onChange={handleChange}
          />
          <br />
          Address:
          <br />
          <input
            type="text"
            name="address"
            placeholder="adress of household"
            onChange={handleChange}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="passcode"
            onChange={handleChange}
          />
          <br />
          Add Users to Household:
          <pre>{JSON.stringify(values.users.label)}</pre>
          <MultiSelect
            className="multi-select"
            options={options}
            value={values.users}
            onChange={handleChange}
            labelledBy={"Select"}
            hasSelectAll={false}
          />
          <br/>
          <input type="submit" value="Create Household" className="button" />
        </form>
      </div>
    );

}


export default NewHousehold;
