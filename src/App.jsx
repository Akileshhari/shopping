import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Login from '../components/Login';



function HomePage({ setModalOpen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true); // ✅ Open modal instead of redirecting
    }, 20000);

    return () => clearTimeout(timer);
  }, [setModalOpen]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setModalOpen={setModalOpen} />} />
      </Routes>
      {modalOpen && <Login setModalOpen={setModalOpen} />} {/* ✅ Show Modal */}
    </Router>
  );
}

export default App;
