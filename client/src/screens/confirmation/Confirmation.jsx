import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { getDonation, deleteDonation } from "../../services/donations";
import { Checkmark } from "react-checkmark";
import "./confirmation.css";
import { useHistory } from "react-router-dom";

export default function Confirmation() {
  let { id } = useParams();
  const [dontationData, setDonationData] = useState({});
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    const apiCall = async () => {
      const data = await getDonation(id);
      setDonationData(data);
    };
    apiCall();
  }, []);

  const deleteDonate = async () => {
    const data = await deleteDonation(id);
    console.log(data);
    history.push(`/donate`);
  };

  return (
    <>
      <Layout>
        <div className="confirmation">
          <Checkmark size={117} color="#00a1f8" />
          <h2 className="thank-you">Thank You!</h2>
          <p className="confirmation-text">{`Your donation of $${dontationData.amount} has been received. We will send a confirmation email to the contact provided.  EHR will NOT send soliciting emails after your donation`}</p>
          <button className="confirmation-btn" onClick={deleteDonate}>
            Cancel donation
          </button>
        </div>
      </Layout>
    </>
  );
}
