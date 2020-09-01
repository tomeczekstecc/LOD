import axios from 'axios';

const deleteDuty = async (id) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


  await axios
    .delete(`/api/duty/delete/${id}`, config)
    .then((res) => console.log(res.data));

  //   await fetch(`http://localhost:5000/api/duty/add`, {
  //     method: 'post',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
};

export default deleteDuty

