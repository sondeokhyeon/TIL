import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../mybase";
import Nweet from "../components/Nweet";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attch, setAttch] = useState("");

  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachUrl = "";
    if (attch !== "") {
      const attachref = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachref.putString(attch, "data_url");
      attachUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachUrl,
    };
    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttch("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishiedEvent) => {
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttch(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setAttch(null);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="What's your mind?"
          maxLength={120}
          value={nweet}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attch && (
          <div>
            <img src={attch} width="50px" height="50px;" />
            <button onClick={onClearPhoto}>clear photo</button>
          </div>
        )}
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
