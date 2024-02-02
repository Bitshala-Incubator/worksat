import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";

export const Similar = () => {
  const [devsList, setDevsList] = useState([]);
  const devsCollectionRef = collection(db, "devs");

  const getDevsList = async () => {
    try {
      const data = await getDocs(devsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDevsList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  getDevsList();
  return (
    <div className="hidden lg:inline">
      <div className={` p-3 duration-300 hidden xl:inline justify-center`}>
        <div className="bg-white m-2 w-80 border rounded-lg text-start">
          <div className="flex flex-col m-3 text-start justify-center">
            <div className="text-xl my-3 mx-5 font-semibold">
              Similar Makers 🥳
            </div>

            {devsList.map((dev) => (
              <>
                <button
                  onClick={() => {
                    viewDetails(dev.id);
                  }}
                  className="flex items-center "
                >
                  <div className="m-2">
                    <img
                      src={dev.profImgUrl}
                      alt="..."
                      className=" rounded-full shadow h-12 w-12 align-middle border-2"
                    />
                  </div>
                  <div className="font-medium text-lg mx-3">{dev.userName}</div>
                </button>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
