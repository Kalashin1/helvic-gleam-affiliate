import Layout from '../../Layout';
import ProfileCard from '../../components/Profile-Card';
import ProfileInfo from '../../components/Profile-Info';

const Profile = () => {
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