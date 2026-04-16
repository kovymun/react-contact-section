import "./index.css";
import ContactUs from "./components/ContactUs";
import { mediCentreDB } from "./data/medi-centre-db";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    /* UI Re-design */
    // <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/40 to-slate-100">
    //   <Nav />
    //   <Footer />
    //   <Toaster position="top-right" />
    // </main>
    /* Previous Implementation */
    <main>
      <ContactUs data={mediCentreDB} />
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
