import React from "react";
import Layout from "../Layout";

/**import components */
import SimpleProfileComponent from "../../component/profile/simpleProfileComponent";
import ProfileScrollbar from "../../component/profile/profileScrollbar";
 
const Profile = () => {
  return (
    <Layout>
        <SimpleProfileComponent/>
        <ProfileScrollbar/>
    </Layout>
  )
}
export default Profile;