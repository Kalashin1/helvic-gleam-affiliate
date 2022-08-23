import Layout from '../../Layout';
import ProfileCard from '../../components/Profile-Card';
import ProfileInfo from '../../components/Profile-Info';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase-settings';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Profile = () => {

  const { id } = useParams()

  const [user, setUser] = useState({});

  useEffect(() => {
    async function getOrder(id) {
      const docRef = doc(db, "users", id);
      localStorage.setItem("orderId", id);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
    }
    getOrder(id);
  }, [id]);

  return (
    <Layout>
      <h1>Profile Page</h1>
      <section  class="section">
        <div class="row mt-sm-4">
          <ProfileCard />
          <ProfileInfo />
        </div>
      </section>
    </Layout>
  );
}
 
export default Profile;