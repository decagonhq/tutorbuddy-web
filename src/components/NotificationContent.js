const NotificationContent = () => {
  return (
    <div>
      <div className="flex p-4 cursor-pointer border-b-2 hover:bg-bgGreen">
        <div>
          <img src="/images/avatar.png" alt="logo" />
        </div>
        <div className="mx-4">
          <p className="text-base font-semibold">John Doe</p>
          <p className="text-sm">Has accepted your study request</p>
        </div>
        <div><p className="text-grey text-sm">20 min ago</p></div>
      </div>
      <div className="flex p-4 cursor-pointer border-b-2 hover:bg-bgGreen">
        <div>
          <img src="/images/avatar.png" alt="logo" />
        </div>
        <div className="mx-4">
          <p className="text-base font-semibold">John Doe</p>
          <p className="text-sm">Has accepted your study request</p>
        </div>
        <div><p className="text-grey text-sm">20 min ago</p></div>
      </div>
      <div className="flex p-4 cursor-pointer border-b-2 hover:bg-bgGreen">
        <div>
          <img src="/images/avatar.png" alt="logo" />
        </div>
        <div className="mx-4">
          <p className="text-base font-semibold">John Doe</p>
          <p className="text-sm">Has accepted your study request</p>
        </div>
        <div><p className="text-grey text-sm">20 min ago</p></div>
      </div>
    </div>
  );
};

export default NotificationContent;
