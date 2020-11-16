// const BASE_URL = "http://localhost:3000/api/v1";

export const setHouseholds = (households: any) => {
  return {
    type: "SET_HOUSEHOLDS",
    households,
  };
};
