import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../App";


require('./_parametres.scss');
export default function Parametres() {
  const { state, dispatch } = useContext(AuthContext);

  const history = useHistory();
  const id = localStorage.getItem("user");

  const initialState = {
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);

  function deleteUser() {
    axios({
      method: "delete",
      headers: { "Content-Type": "application/json" },
      url: `http://localhost:8060/api/user/${id}`,
      data: JSON.stringify({
        errorMessage: data.errorMessage,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res;
        }

        throw res;
      })
      .then(() => {
        dispatch({ type: "LOGOUT" });
        history.push("./");
      })

      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.response,
        });
      });
  }

  return (
    <div className="parametres">
      <button disabled={data.isSubmitting} onClick={deleteUser}>
        {data.isSubmitting ? "Loading..." : "Supprimer mon compte"}
      </button>
    </div>
  );
}
