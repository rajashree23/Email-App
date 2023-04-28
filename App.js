import { Routes, Route } from "react-router-dom";
import { Headers } from "./component/Headers";
import { EmailDetails } from "./pages/EmailDetails";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { Heading } from "./component/Heading";

export default function App() {
  return (
    <div>
      <Heading />

      <Headers />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/email/:emailId" element={<EmailDetails />} />
      </Routes>
    </div>
  );
}
