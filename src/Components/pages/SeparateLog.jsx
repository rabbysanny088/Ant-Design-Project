import { Avatar, Button } from "antd";
import { useFirebase } from "../../context/FirebaseProvider";

const SeparateLog = () => {
  const firebase = useFirebase();

  console.log(firebase);
  return (
    <div>
      <div
        style={{
          marginLeft: "10px",
          fontWeight: 500,
          fontSize: "15px",
          marginBottom: "10px",
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <Avatar src={firebase.displayusersPhotoUrl} />
        <p>{firebase.displayusersEmail}</p>
      </div>
      <Button block onClick={() => firebase.logouts()}>
        LogOut
      </Button>
      <div></div>
    </div>
  );
};

export default SeparateLog;
