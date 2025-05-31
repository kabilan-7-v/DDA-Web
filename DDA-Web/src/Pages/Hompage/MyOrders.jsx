import React, {useEffect,useState} from "react";
import "./MyOrders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { hidePopup2 } from "../features/popupSlice";
import axios from "axios";

function MyOrders() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dda-backend-xskh.onrender.com/api/purchases"
      );
      const data = response.data;
      const filteredUsers = data.filter((user) => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const email = userData?.email;
        console.log(userData["email"]);
      
        return user.email === email;
      });
      setUsers(filteredUsers);
      setLoading(false);
      console.log(filteredUsers);

    } catch (error) {
      console.error("Failed to fetch data:", error);

    }


  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="myorder">
        <div className="order-list">
          <div className="order-top">
            <h1>My Orders</h1>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => dispatch(hidePopup2())}
            />
          </div>
        {loading?  <h4 style={{
            textAlign:"center"
        }}> Loading..</h4>:<div></div>}
        {!loading&&users.length==0?<h4 style={
            {
                textAlign:"center"
            }
        }>
            No Orders Found
        </h4>:<div></div>}
          {users.slice(-5).map((user,ind) => (
            <div className="list1">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
              <div className="list-des">
                <p>
                  <strong> Service</strong> : {user.service?.split("#*#")[0]}
                </p>
                <p>
                  <strong>  Category</strong> :{user.service?.split("#*#")[1]}
                </p>
                <p>
                  <strong> Price</strong> :{"₹" + (parseInt(user.package) / 100).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </>
  );
}

export default MyOrders;
