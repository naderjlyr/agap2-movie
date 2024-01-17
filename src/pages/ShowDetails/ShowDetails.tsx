import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h1>Show Details</h1>
      <p>
        Showing details for {name} with ID: {id}
      </p>
      {/* Render other details of the show */}
    </div>
  );
};

export default ShowDetails;
