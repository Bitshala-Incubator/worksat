import React from "react";

const DevSideBar = () => {
  return (
    <div>
       <div className="flex justify-center ">
        <div className="flex-col">
          <div className="flex justify-center">
            <img
              className="max-w-sm rounded-full"
              src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/5a80c5ad2e3c1ecc868ec5d67b54087f.jpg?1689815561"
            />
          </div>

          <div className="text-3xl font-bold">Name</div>
          <div>Years of Experience</div>
          <div className="max-w-7xl mt-3">
            Detail. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quod dicta voluptatem in laborum ipsam cum id illo veniam autem
            cupiditate soluta et fugiat, inventore accusamus, aperiam omnis!
            Placeat ab optio officia deserunt! Aperiam, velit accusamus quis
            quos omnis reiciendis at minus! A provident alias veritatis aliquam
            aut tempora obcaecati, doloribus vitae perspiciatis aspernatur
            temporibus commodi excepturi aperiam, cumque exercitationem, eum
            officiis? Ducimus perferendis, nobis voluptatibus impedit architecto
            id libero ex expedita consequuntur! Pariatur quidem illo neque,
            facere quae impedit necessitatibus earum exercitationem quisquam!
            Ipsam adipisci voluptas consequatur id nesciunt distinctio.
            Doloremque quod dignissimos voluptates dolor animi, cumque iste
            blanditiis. Magnam.
          </div>

          <div className="mt-2 mb-3">
            A one line bio. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Beatae, vitae.
          </div>

          <div>🛂 Nationality : 🇺🇸 United States</div>
          <div>🏡 Residency : 🇺🇸 United States</div>
          <div>📍 Location : 🇺🇸 United States</div>

          <div>
            Skilled in : js typescript react webpack node jest java spring boot
            gradle git linux bash docker sql github github actions ci cd aws gcp{" "}
          </div>

          <div>Employment History</div>
          <div>2021 - 2022: Lead Front-end Architect @ Nextdoor</div>
          <div>
            2012 - 2016: Bachelor's in Chemistry @ New College of Florida
          </div>

          <div className="bg-red-200 p-5 rounded-lg m-5">
            <div>Contact Details</div>
            {/* This part will be behind a paywall */}
            <div>email: abc@uvw.xyz</div>
            <div>github : Lorem ipsum dolor sit amet.</div>
            <div>LinkedIn : Lorem ipsum dolor sit amet.</div>
            <div>Twitter : Lorem ipsum dolor sit amet.</div>
            <p className="font-bold p-3">
              Or we can make a seperate card here and add the unlock button
              there, and onClick we can add a modal
            </p>
          </div>

          <div
            className="bg-red-400 p-3 rounded-lg mx-3 mt-5 mb-10"
            onClick={openModal}
          >
            Unlock Contact Section
          </div>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <p>The payment Page will go here</p>
            {/* A Flag will go here if the payment gets successful, and the contact detail will be revealed */}
            <button
              className="bg-red-400 px-3 py-2 mt-5 rounded-lg"
              onClick={closeModal}
            >
              close
            </button>
          </Modal>
        </div>
      </div>
      
    </div>
  );
};

export default DevSideBar;
