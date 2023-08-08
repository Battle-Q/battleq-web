import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef, useState } from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { MiddleBoardLeft } from "../../layout/Middle";
import { useNavigate } from "react-router-dom";
import { BoardData } from "../../type/type";
import axios from "axios";
import { apiUrl } from "../../service/authService";

export const TextEditor = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contentValue, setContentValue] = useState("");
  const [boardData, setBoardData] = useState<BoardData>({
    title: "",
    content: "",
    category: "",
    priority: true,
  });

  const data: BoardData = {
    title: boardData.title,
    content: contentValue,
    category: boardData.category,
    priority: boardData.priority,
  };

  const navigate = useNavigate();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );

  const boardRegistHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios
      .post(`${apiUrl}/boards`, data)
      .then((res) => {})
      .catch((error) => {});
  };

  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <Header />
      <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
        <MiddleBoardLeft />
        <div className="w-75percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
          <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold border-b-2">
            <p className="text-3xl text-white">자유게시판</p>
          </div>
          <div className="w-full h-70percent flex flex-col items-center justify-around rounded-2xl border-b-2">
            <div className="w-70percent h-10percent flex border-2 border-black">
              <div className="w-10percent h-full bg-cyan-100 text-center flex items-center justify-center mr-10">
                카테고리
              </div>
              <div className="w-7percent h-full flex justify-center items-center mr-20">
                <input
                  type="radio"
                  id="free"
                  name="category"
                  value="free"
                  onChange={(e) =>
                    setBoardData({ ...boardData, category: e.target.value })
                  }
                  className="w-50percent h-40percent "
                />{" "}
                <label
                  htmlFor="free"
                  className="w-50percent h-40percent mb-1 cursor-pointer"
                >
                  자유
                </label>
              </div>
              <div className="w-7percent h-full flex justify-center items-center mr-20">
                <input
                  type="radio"
                  id="game"
                  name="category"
                  value="game"
                  onChange={(e) =>
                    setBoardData({ ...boardData, category: e.target.value })
                  }
                  className="w-50percent h-40percent "
                />{" "}
                <label
                  htmlFor="game"
                  className="w-50percent h-40percent mb-1 cursor-pointer"
                >
                  게임
                </label>
              </div>
              <div className="w-7percent h-full flex justify-center items-center">
                <input
                  type="radio"
                  id="inquiry"
                  name="category"
                  value="inquiry"
                  onChange={(e) =>
                    setBoardData({ ...boardData, category: e.target.value })
                  }
                  className="w-50percent h-40percent"
                />{" "}
                <label
                  htmlFor="inquiry"
                  className="w-50percent h-40percent mb-1 cursor-pointer"
                >
                  문의
                </label>
              </div>
            </div>
            <input
              type="text"
              className="w-70percent h-10percent pl-3"
              placeholder="제목을 입력해주세요."
              value={boardData.title}
              onChange={(e) =>
                setBoardData({ ...boardData, title: e.target.value })
              }
            />
            <ReactQuill
              ref={(element) => {
                if (element !== null) {
                  QuillRef.current = element;
                }
              }}
              style={{ width: "70%", height: "60%", marginBottom: 45 }}
              value={contentValue}
              onChange={setContentValue}
              modules={modules}
              theme="snow"
              placeholder="내용을 입력해주세요."
            />
          </div>
          <div className="w-full h-15percent flex justify-end">
            <button
              className="w-7percent h-25percent bg-indigo-100 mr-5 text-xl font-medium mt-4"
              onClick={() => navigate("/board/free")}
            >
              목록
            </button>
            <button
              className="w-7percent h-25percent bg-indigo-100 mr-5 text-xl font-medium mt-4"
              onClick={boardRegistHandleSubmit}
            >
              등록
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
