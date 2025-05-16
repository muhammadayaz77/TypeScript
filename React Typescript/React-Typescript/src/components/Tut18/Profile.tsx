export type ProfileProp = {
  name : string
}

const Profile = ({name} : ProfileProp) => {
  return (
    <div>Profile - {name}</div>
  );
};

export default Profile;