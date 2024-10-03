import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CopyIcon,
  EditIcon,
  DownloadIcon,
  TrashIcon,
  Eye,
  Calendar,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNote, clear } from "../slice/noteSlice";
import { CardFooter } from "@/components/ui/card";
import { useState } from "react";

const NoteCard = () => {
  const [search, setSearch] = useState("");
  const notes = useSelector((state) => state.note.notes);

  const filteredNotes = notes?.filter((note) =>
    note?.title?.toLowerCase().includes(search?.toLowerCase())
  );
  const dispatch = useDispatch();
  console.log(notes);
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <Search />
        <Input
          placeholder=" search... "
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline" onClick={() => dispatch(clear())}>
          Clear
        </Button>
      </div>

      {filteredNotes.length > 0 ? (
        filteredNotes?.map((note, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between flex-col md:flex-row gap-2">
                  <h1 className="text-2xl font-bold">{note?.title}</h1>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        navigator.clipboard.writeText(note?.description || "")
                      }
                    >
                      <CopyIcon className="size-4" />
                    </Button>
                    <Link to={`/create/${note?.id}`}>
                      <Button variant="outline" size="icon">
                        <EditIcon className="size-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <DownloadIcon className="size-4" />
                    </Button>
                    <Link to={`/notes/${note?.id}`}>
                      <Button variant="outline" size="icon">
                        <Eye className="size-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        dispatch(deleteNote(note?.id));
                      }}
                    >
                      <TrashIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardTitle>

              <CardDescription>
                {note?.description.split(" ").slice(0, 100).join(" ")}...
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex justify-between w-full p-2 gap-1 items-center flex-col md:flex-row">
                <p className="flex items-center gap-1">
                  Created
                  <Calendar className="size-4" /> {note?.createdAt}
                </p>
                <p className="flex items-center gap-1">
                  Updated
                  <Calendar className="size-4" /> {note?.updatedAt}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))
      ) : (
        <h1 className="text-center p-10">Nothing..</h1>
      )}
    </>
  );
};

export default NoteCard;
