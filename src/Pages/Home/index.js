import React,{useState} from 'react';
import Layout from "../../Layout";
import Movies from "../../Components/Movies";
import FloatingActionButton from "../../Components/FloatingButton";
import AddMovieModal from "../../Components/AddMovieModal";
import "./index.css";

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout>
      <Movies />
      <div className="add-button">
        <FloatingActionButton addMovie={handleOpen} />
      </div>
      <AddMovieModal isModalOpen={open} closeModal={handleClose}/>
    </Layout>
  );
}

export default Home;
