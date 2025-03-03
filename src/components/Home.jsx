import React, { useState } from "react";
import "../utils/styles/Home.css";
import Posts from "./Posts";
import posts from "../data/postData";
import joined from "../data/joinedActivity";
import JoinedActivity from "./sections/joinedActivity/JoinedActivity";
import pendingActivity from "../data/pendingActivity";
import PendingActivity from "./sections/pendingActivity/PendingActivity";
import myActivity from "../data/myActivity";
import MyActivity from "./sections/myActivity/MyActivity";
import declinedActivity from "../data/declinedActivities";
import DeclinedActivity from "./sections/declinedActivity/DeclinedActivity";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  const [showActivities, setShowActivities] = useState(false);

  const toggleActivities = () => {
    setShowActivities(!showActivities);
  };

  const MobileNav = () => (
    <div className="mobile-nav">
      <button onClick={() => setShowActivities(false)}>Home</button>
      <button>Create</button>
      <button onClick={() => setShowActivities(true)}>Activities</button>
      <button>Profile</button>
    </div>
  );

  return (
    <>
      <Navbar />
      <div
        className={`homeContainer ${
          showActivities ? "mobile-activities-visible" : ""
        }`}
      >
        <div className="menu-section">
          {/* <button>Home</button>
          <button>Create Activity</button>
          <button>Activity Details</button>
          <button>Profile</button> */}

          <div className="created-activities">
            <label htmlFor="activity">My Activities</label>
            {myActivity.map((createdActivity) => (
              <MyActivity
                key={createdActivity.id}
                image={createdActivity.image}
                title={createdActivity.title}
              />
            ))}
          </div>
        </div>

        <div className="post-section">
          <div className="cards">
            <Posts posts={posts} />
          </div>
        </div>

        <div className="activityContainer">
          <div className="activity-section">
            <h3>Joined Activities</h3>
            <div className="joined">
              {joined.map((join) => (
                <JoinedActivity
                  key={join.id}
                  title={join.title}
                  link={join.link}
                  image={join.image}
                />
              ))}
            </div>
            <h3>Pending Activities</h3>
            <div className="pending">
              {pendingActivity.map((pending) => (
                <PendingActivity
                  key={pending.id}
                  title={pending.title}
                  image={pending.image}
                />
              ))}
            </div>
            <h3>Declined Activities</h3>
            <div className="declined-activities">
              {declinedActivity.map((declined) => (
                <DeclinedActivity
                  key={declined.id}
                  title={declined.title}
                  image={declined.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </>
  );
};

export default Home;
