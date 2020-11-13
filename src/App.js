import "./App.css";
import Post from "./Components/Posts";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
// import Instagram from './Components/Instagram'

function getModalStyle() {
 const top = 50;
 const left = 50;

 return {
  top: `${top}%`,
  left: `${left}%`,
  transform: `translate(-${top}%, -${left}%)`,
 };
}

const useStyles = makeStyles((theme) => ({
 paper: {
  position: "absolute",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
 },
}));

function App() {
 const classes = useStyles();
 const [modalStyle] = useState(getModalStyle);
 const [posts, setPosts] = useState([]);
 const [open, setOpen] = useState(false);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");

 useEffect(() => {
  db.collection("posts").onSnapshot((snapshot) => {
   setPosts(
    snapshot.docs.map((doc) => ({
     id: doc.id,
     post: doc.data(),
    }))
   );
  });
 }, []);

 const signUp = (event) => {};
 return (
  <div className="App">
   <Modal open={open} onClose={() => setOpen(false)}>
    <div style={modalStyle} className={classes.paper}>
     <h1> Iam a Modal</h1>
    </div>
    </Modal>
    <div className="app__header">
     <form className="app_signup">
      <center>
       <img
        className="app_headerImage"
        src="https://fontmeme.com/images/instagram-new-logo.png"
        alt=""
       />
      </center>

      <input
       placeholder="username"
       type="username"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />

      <input
       placeholder="email"
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />

      <input
       placeholder="password"
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={() => setOpen(true)}>Sign up</Button>
     </form>
    </div>
   
   

   <div className="app__header">
    <center>
     <img
      className="app_headerImage"
      src="https://fontmeme.com/images/instagram-new-logo.png"
      alt=""
     />
    </center>
   </div>

   <h1>HEllo Hash Developer lets build Instagram clone</h1>

   {posts.map((id, post) => (
    <Post
     key={id}
     username={post.username}
     caption={post.caption}
     imageUrl={post.imageUrl}
    />
   ))}
  </div>
 );
}

export default App;
