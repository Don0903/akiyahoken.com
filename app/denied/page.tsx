
export default function Denied() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl">Access Denied</h1>
        <p className="text-center ">
          You are logged in, but do not have permission to access this page yet. <br/>
          Request to access has been sent to the Admins - we'll come back to you
          shortly!
        </p>
      </div>
    </div>
  );
}
