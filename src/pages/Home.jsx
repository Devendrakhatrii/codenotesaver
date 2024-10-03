import NoteCard from "../components/NoteCard";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center p-5 md:px-40 ">
        <div className="flex flex-col gap-5 border-2 w-full border-gray-300 p-6 px-10 rounded-lg">
          <NoteCard />
        </div>
      </div>
    </>
  );
};

export default Home;
