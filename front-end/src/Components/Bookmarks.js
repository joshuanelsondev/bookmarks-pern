import axios from "axios";
import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";


function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/bookmarks`)
      .then(res => {
        setBookmarks(res.data);
      })
      .catch(c => {
        console.warn("catch", c);
      })
  }, [API]);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark) => {
              return <Bookmark key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
