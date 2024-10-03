import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { CopyIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import toast from "react-hot-toast";

const NoteDetail = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const note = useSelector((state) =>
    state.note.notes.find((note) => note.id === id)
  );
  console.log(note);
  return (
    <>
      {" "}
      <div className="w-screen  md:m-10 p-10 md:mx-auto max-w-3xl">
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeftIcon className="mr-2" />
          Back
        </Button>
        <div className="flex flex-col mt-10">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold">{note?.title}</h1>
                  <Button
                    variant="outline"
                    onClick={
                      (() => navigator.clipboard.writeText(note?.description),
                      toast.success("Copied to clipboard!"))
                    }
                    size="icon"
                  >
                    <CopyIcon className=" size-4" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                <Textarea
                  className="w-full h-screen cursor-not-allowed"
                  value={note?.description}
                />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};

export default NoteDetail;
