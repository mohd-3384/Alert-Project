import "./App.css";
import Alert from "./components/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        title={"Upgrade your plan"}
        type={"alert-default"}
        icon={<Bell size={20} />}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          maxime molestiae animi explicabo assumenda eius consequatur dolorum
          hic quo et. <a href="#">This is a Link</a>
        </p>
      </Alert>

      <Alert
        title={"Note"}
        type={"alert-info"}
        icon={<Info size={20} />}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime molestiae animi explicabo assumenda eius consequatur dolorum hic quo et."
        }
      />

      <Alert
        title={"Your order has been processed"}
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime molestiae animi explicabo assumenda eius consequatur dolorum hic quo et."
        }
      />

      <Alert
        title={"Something went wrong"}
        type={"alert-error"}
        icon={<Ban size={20} />}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime molestiae animi explicabo assumenda eius consequatur dolorum hic quo et."
        }
      />

      <Alert
        title={"ips & Tricks"}
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime molestiae animi explicabo assumenda eius consequatur dolorum hic quo et."
        }
      />
    </>
  );
}

export default App;
