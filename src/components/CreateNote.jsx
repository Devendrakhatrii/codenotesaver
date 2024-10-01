import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { create } from "../slice/noteSlice";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { useSelector } from "react-redux";
import { update } from "../slice/noteSlice";

const CreateNote = () => {
  const { id } = useParams();
  const uniqueId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editNote = useSelector((state) =>
    state.note.notes.find((note) => note.id === id)
  );
  console.log(editNote);
  // const [value, setValue] = useState(editNote);

  const [note, setNote] = useState({
    id: editNote?.id || uniqueId,
    title: editNote?.title || "",
    description: editNote?.description || "",
    createdAt: editNote?.createdAt || new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  });
  return (
    <div className="w-screen  m-10 mx-auto max-w-3xl">
      <Button variant="outline" onClick={() => navigate("/")}>
        <ArrowLeftIcon className="mr-2" />
        Back
      </Button>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mt-6">Create Note</h1>
        <div className="flex flex-col mt-4 gap-5">
          <Label>Title</Label>
          <Input
            placeholder="Title"
            onChange={(e) => {
              setNote({ ...note, title: e.target.value });
            }}
            value={note?.title}
          />
          <Label>Description</Label>
          <Textarea
            placeholder="Description"
            className=" size-96 w-full"
            onChange={(e) => {
              setNote({ ...note, description: e.target.value });
            }}
            value={note?.description}
          />
        </div>

        <Button
          className="mt-10"
          onClick={() => {
            if (id) {
              dispatch(update(note));
            } else {
              dispatch(create(note));
            }
            navigate("/");
          }}
        >
          {id ? "Update" : "Create"}
        </Button>
      </div>
    </div>
  );
};

export default CreateNote;
