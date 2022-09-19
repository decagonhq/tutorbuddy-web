const ReminderBar = ({ reminderHistories }) => {
  return (
    <>
      <div className="overflow-y-auto h-96">
        {reminderHistories.length > 0 ? (
          reminderHistories?.map((histories) => (
            <div className="flex w-full my-8">
              <div className="w-[20%]">
                <h2 className="text-xl font-bold mb-4">
                  {new Date(histories?.startTime)
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .toUpperCase()}
                </h2>
                <p>
                  {new Date(histories?.endTime)
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .toUpperCase()}
                </p>
              </div>
              <img src="./images/bar.png" alt="bar" className="mx-4" />
              <div className="w-[70%] p-4 bg-pry text-pry2 rounded-3xl">
                <p className="font-bold mb-2">{histories.title}</p>
                <p>{histories.note}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No Reminder created</p>
        )}
      </div>
      {/* <div className="flex w-full my-8">
        <div className="w-[20%]">
          <h2 className="text-xl font-bold mb-4">04:30PM</h2>
          <p>05:00PM</p>
        </div>
        <img src="./images/bar.png" alt="bar" className="mx-4" />
        <div className="w-[70%] p-4 bg-[#f7f7f7] rounded-3xl">
          <p className="font-bold mb-2">Practice React</p>
          <p>React learning with friends</p>
        </div>
      </div> */}
      {/* <div className="flex w-full my-8">
        <div className="w-[20%]">
          <h2 className="text-xl font-bold mb-4">09:00PM</h2>
          <p>10:30PM</p>
        </div>
        <img src="./images/bar.png" alt="bar" className="mx-4" />
        <div className="w-[70%] p-4 bg-[#f7f7f7] rounded-3xl">
          <p className="font-bold mb-2">Fireside chat</p>
          <p>Join meeting on google meet</p>
        </div>
      </div> */}
    </>
  );
};

export default ReminderBar;
