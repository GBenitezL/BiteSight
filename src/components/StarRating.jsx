import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from 'axios';

export default function StarRating({ user_id, restaurant_id }) {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={async (event, newValue) => {
          console.log(newValue)
          setValue(newValue);
          const rating_data = {
            user_id: user_id,
            restaurant_id: restaurant_id,
            rating: newValue
          };
          try {
            const response = await axios.post("https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/ratings", rating_data);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </Box>
  );
}
